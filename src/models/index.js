import { createRequire } from 'module'
import knexfile from '../../knexfile.js'

import stringsModel from './strings.js'
import configModel from './config.js'
import commandsModel from './commands.js'

const require = createRequire(import.meta.url)
const { knex } = require('../libs/knex.cjs')(knexfile[process.env.NODE_ENV])

export const stringsDb = stringsModel(knex)
export const configDb = configModel(knex)
export const commandsDb = commandsModel(knex)
