import { stringsDb } from '../models/index.js'
import getRandomString from '../utils/getRandomString.js'

export const getString = async (call, callback) => {
  if (call?.request && call?.request?.string) {
    const string = getRandomString(await stringsDb.get(call?.request?.string))
    callback(null, string)
  } else {
    callback(null, null)
  }
}

export const getManyStrings = async (call, callback) => {
  if (call?.request && call?.request?.strings) {
    const strings = await stringsDb.getMany(call?.request?.strings)
    callback(null, {
      strings
    })
  } else {
    callback(null, null)
  }
}

export const getAllStrings = async (call, callback) => {
  if (call?.request) {
    const strings = await stringsDb.getAll()
    callback(null, {
      strings
    })
  } else {
    callback(null, null)
  }
}
