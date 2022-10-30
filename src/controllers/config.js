import { configDb } from '../models/index.js'
import getRandomString from '../utils/getRandomString.js'

export const getConfig = async (call, callback) => {
  if (call?.request && call?.request?.name) {
    const config = getRandomString(await configDb.get(call?.request?.name))
    callback(null, {
      name: config.name,
      value: config.config
    })
  } else {
    callback(null, null)
  }
}
