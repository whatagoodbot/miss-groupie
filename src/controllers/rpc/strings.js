import { performance } from 'perf_hooks'
import { logger, metrics, getRandom } from '@whatagoodbot/utilities'
import { stringsDb } from '../../models/index.js'

export const getString = async (call, callback) => {
  const functionName = 'getString'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  if (call?.request && call?.request?.string) {
    const string = getRandom.fromArray(await stringsDb.get(call?.request?.string))
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    return callback(null, string)
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  callback(null, null)
}

export const getManyStrings = async (call, callback) => {
  const functionName = 'getManyStrings'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  if (call?.request && call?.request?.strings) {
    const strings = await stringsDb.getMany(call?.request?.strings)
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    callback(null, {
      strings
    })
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  callback(null, null)
}

export const getAllStrings = async (call, callback) => {
  const functionName = 'getAllStrings'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  if (call?.request) {
    const strings = await stringsDb.getAll()
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    callback(null, {
      strings
    })
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  callback(null, null)
}
