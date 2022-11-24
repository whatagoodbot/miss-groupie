import { performance } from 'perf_hooks'
import { logger, metrics, getRandom } from '@whatagoodbot/utilities'
import { roomsDb, roomGreetingsDb } from '../../models/index.js'

export const getRooms = async (call, callback) => {
  const functionName = 'getRooms'
  const startTime = performance.now()
  logger.debug({ event: functionName })

  if (call?.request && call?.request?.client) {
    const rooms = await getRoomsFromDb(call.request.client)
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    return callback(null, { rooms })
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  return callback(null, {})
}

export const getRoomsFromDb = async client => {
  const rooms = await roomsDb.getAll(client)
  rooms.forEach(room => {
    try {
      room.lastfm = JSON.parse(room.lastfm)
      room.spotify = JSON.parse(room.spotify)
      room.botConfig = JSON.parse(room.botConfig)
    } catch (error) {
    }
  })
  return rooms
}

export const getRoom = async (call, callback) => {
  const functionName = 'getRoom'
  const startTime = performance.now()
  logger.debug({ event: functionName })

  if (call?.request && call?.request?.room) {
    const room = await getRoomFromDb(call.request.room)
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    return callback(null, room)
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  return callback(null, {})
}

const getRoomFromDb = async roomId => {
  const [room, roomGreeting] = await Promise.all([
    roomsDb.get(roomId),
    roomGreetingsDb.get(roomId)
  ])
  try {
    room.lastfm = JSON.parse(room.lastfm)
    room.spotify = JSON.parse(room.spotify)
    room.botConfig = JSON.parse(room.botConfig)
  } catch (error) {
  }
  if (roomGreeting.length > 0) room.greeting = getRandom.fromArray(roomGreeting).greeting
  return room
}
