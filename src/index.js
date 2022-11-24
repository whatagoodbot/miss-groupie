import WebSocket, { WebSocketServer } from 'ws'
import { v4 as uuidv4 } from 'uuid'
import broker from '@whatagoodbot/mqtt'
import { server, serverCreds, strings, commands, rooms } from '@whatagoodbot/rpc'
import { logger, metrics } from '@whatagoodbot/utilities'
import { performance } from 'perf_hooks'
import { getString, getManyStrings, getAllStrings } from './controllers/rpc/strings.js'
import { getCommand, getAllCommands } from './controllers/rpc/commands.js'
import { getRoom, getRooms, getRoomsFromDb } from './controllers/rpc/rooms.js'
import controllers from './controllers/mqtt/index.js'
import { userConnected } from './controllers/mqtt/userConnect.js'
import { userDisconnected } from './controllers/mqtt/userDisconnect.js'
import express from 'express'

const wss = new WebSocketServer({ port: 8080 })
wss.on('connection', ws => {
  ws.id = uuidv4()
  console.log('Client Connected', ws.id)
})

const statistics = {
  rooms: {}
}

const dbRooms = await getRoomsFromDb()
dbRooms.forEach(room => {
  statistics.rooms[room.id] = statistics.rooms[room.id] || {}
  statistics.rooms[room.id].name = room.name
  statistics.rooms[room.id].users = []
})

userConnected.on('message', payload => {
  statistics.rooms[payload.room.id].users.push(payload.user)
  updateClient()
})

userDisconnected.on('message', payload => {
  statistics.rooms[payload.room.id].users = statistics.rooms[payload.room.id].users.filter(user => user.id !== payload.user.id)
  updateClient()
})

const updateClient = () => {
  wss.clients.forEach(function each (client) {
    console.log(client.readyState)
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(statistics.rooms))
    }
  })
}

const app = express()

app.use(express.static('./web/build'))
app.listen(80)

const topicPrefix = `${process.env.NODE_ENV}/`

// TODO add discord intetgration for annoucements etc
server.addService(strings.Strings.service, { getString, getManyStrings, getAllStrings })
server.addService(rooms.Rooms.service, { getRoom, getRooms })
server.addService(commands.Commands.service, { getCommand, getAllCommands })
server.bindAsync('0.0.0.0:50000', serverCreds, () => {
  server.start()
  logger.debug({ event: 'Service Started' })
  metrics.count('started')
})

export const serverStatus = () => {
  return server.started
}

const subscribe = () => {
  Object.keys(controllers).forEach((topic) => {
    broker.client.subscribe(`${topicPrefix}${topic}`, (err) => {
      logger.info(`Subscribed to ${topicPrefix}${topic}`)
      if (err) {
        logger.error(err)
        logger.debug({ topic })
      }
    })
  })
}

if (broker.client.connected) {
  subscribe()
} else {
  broker.client.on('connect', subscribe)
}

broker.client.on('error', logger.error)

broker.client.on('message', async (fullTopic, data) => {
  const functionName = 'receivedMessage'
  const startTime = performance.now()
  const topic = fullTopic.substring(topicPrefix.length)
  logger.debug({ event: functionName, topic })

  let requestPayload
  try {
    requestPayload = JSON.parse(data.toString())
    const validatedRequest = broker[topic].validate(requestPayload)
    if (validatedRequest.errors) throw { message: validatedRequest.errors } // eslint-disable-line
    const processedResponses = await controllers[topic](requestPayload)
    if (!processedResponses || !processedResponses.length) return
    for (const current in processedResponses) {
      const processedResponse = processedResponses[current]
      const validatedResponse = broker[processedResponse.topic].validate({
        ...validatedRequest,
        ...processedResponse.payload
      })
      if (validatedResponse.errors) throw { message: validatedResponse.errors } // eslint-disable-line
      if (processedResponse.topic && !process.env.FULLDEBUG) {
        logger.debug({ event: 'Publishing', topic: processedResponse.topic })
        broker.client.publish(`${topicPrefix}${processedResponse.topic}`, JSON.stringify(validatedResponse))
      }
    }
    metrics.trackExecution(functionName, 'mqtt', performance.now() - startTime, true, { topic })
  } catch (error) {
    logger.error(error)
    logger.debug({ topic, requestPayload })
  }
})
