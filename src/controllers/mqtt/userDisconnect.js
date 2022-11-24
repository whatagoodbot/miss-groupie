import { logger, metrics } from '@whatagoodbot/utilities'
import { performance } from 'perf_hooks'
import { EventEmitter } from 'node:events'

export const userDisconnected = new EventEmitter()

export default async payload => {
  const functionName = 'userDisconnect'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  metrics.count(functionName)

  userDisconnected.emit('message', payload)

  metrics.trackExecution(functionName, 'mqtt', performance.now() - startTime, true)
}
