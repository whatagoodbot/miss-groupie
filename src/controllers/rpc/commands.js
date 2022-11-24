import { performance } from 'perf_hooks'
import { logger, metrics } from '@whatagoodbot/utilities'
import { commandsDb, commandsInRoomsDb } from '../../models/index.js'

export const getCommand = async (call, callback) => {
  const functionName = 'getCommand'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  if (call?.request && call?.request?.command && call?.request?.room) {
    const command = await commandsDb.get(call?.request?.command)
    const commandsInRoom = await commandsInRoomsDb.get(call?.request?.room)
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    if (!command.isLimited) return callback(null, command)
    if (command.isLimited && commandsInRoom.find(allowedCommand => allowedCommand.command === command.command)) return callback(null, command)
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  return callback(null, {})
}

export const getAllCommands = async (call, callback) => {
  const functionName = 'getAllCommands'
  const startTime = performance.now()
  logger.debug({ event: functionName })
  metrics.count('functionExecuted', { method: 'rpc', command: functionName })
  if (call?.request && call?.request?.room) {
    let commands = await commandsDb.getAll(call?.request?.room)
    const commandsInRoom = await commandsInRoomsDb.get(call?.request?.room)
    commands = commands.filter(command => {
      if (!command.isLimited) return true
      if (command.isLimited && commandsInRoom.find(allowedCommand => allowedCommand.command === command.command)) return true
      return false
    })
    metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, true)
    return callback(null, { commands })
  }
  metrics.trackExecution(functionName, 'rpc', performance.now() - startTime, false)
  return callback(null, {})
}
