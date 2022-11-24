import { createRequire } from 'module'
import knexfile from '../../knexfile.js'

import stringsModel from './strings.js'
import commandsModel from './commands.js'
import commandsInRoomsModel from './commandsInRooms.js'
import roomsModel from './rooms.js'
import roomGreetingsModel from './roomGreetings.js'

const require = createRequire(import.meta.url)
const { knex } = require('../libs/knex.cjs')(knexfile[process.env.NODE_ENV])

export const stringsDb = stringsModel(knex)
export const commandsDb = commandsModel(knex)
export const commandsInRoomsDb = commandsInRoomsModel(knex)
export const roomsDb = roomsModel(knex)
export const roomGreetingsDb = roomGreetingsModel(knex)
