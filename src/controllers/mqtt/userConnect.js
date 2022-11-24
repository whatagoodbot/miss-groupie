import { logger, metrics, getRandom } from '@whatagoodbot/utilities'
import { roomGreetingsDb } from '../../models/index.js'
import { performance } from 'perf_hooks'
import { EventEmitter } from 'node:events'

export const userConnected = new EventEmitter()

export default async payload => {
  const functionName = 'userConnect'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  metrics.count(functionName)

  userConnected.emit('message', payload)

  const greetings = await roomGreetingsDb.get(payload.room.id)
  metrics.trackExecution(functionName, 'mqtt', performance.now() - startTime, true)
  if (greetings.length > 0) {
    const greetingRecord = getRandom.fromArray(greetings)
    const message = greetingRecord.greeting
    return [{
      topic: 'broadcast',
      payload: {
        message
      }
    }]
  }
}
