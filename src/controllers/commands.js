import { commandsDb } from '../models/index.js'
import getRandomString from '../utils/getRandomString.js'

export const getCommand = async (call, callback) => {
  if (call?.request && call?.request?.command) {
    const command = getRandomString(await commandsDb.get(call?.request?.command))
    callback(null, command)
  } else {
    callback(null, null)
  }
}

export const getAllCommands = async (call, callback) => {
  if (call?.request) {
    const commands = await commandsDb.getAll()
    callback(null, {
      commands
    })
  } else {
    callback(null, null)
  }
}
