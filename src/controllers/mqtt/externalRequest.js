import { clients } from '@whatagoodbot/rpc'
import { logger, metrics } from '@whatagoodbot/utilities'
import { roomGreetingsDb } from '../../models/index.js'

export default payload => {
  if (payload.service !== process.env.npm_package_name) return
  const functionName = 'externalRequest'
  logger.debug({ event: functionName })
  metrics.count(functionName)
  return commands[payload.command](payload)
}

const commands = {
  addroomgreeting: async payload => {
    const functionName = 'addRoomGreeting'
    logger.debug({ event: functionName })
    metrics.count(functionName)
    if (payload.arguments) {
      const result = await roomGreetingsDb.add(payload.room.id, payload.arguments)
      if (result) {
        const string = await clients.strings.get('roomGreetingAdded')
        return [{
          topic: 'broadcast',
          payload: {
            message: string.value
          }
        }]
      }
    } else {
      const string = await clients.strings.get('roomGreetingMissingArgs')
      return [{
        topic: 'broadcast',
        payload: {
          message: string.value
        }
      }]
    }
  },
  deleteroomgreetings: async payload => {
    const functionName = 'deleteRoomGreeting'
    logger.debug({ event: functionName })
    metrics.count(functionName)

    const result = await roomGreetingsDb.delete(payload.room.id)
    if (result) {
      const string = await clients.strings.get('roomGreetingDeleted')
      return [{
        topic: 'broadcast',
        payload: {
          message: string.value
        }
      }]
    } else {
      const string = await clients.strings.get('roomGreetingNoneToDelete')
      return [{
        topic: 'broadcast',
        payload: {
          message: string.value
        }
      }]
    }
  }
}
