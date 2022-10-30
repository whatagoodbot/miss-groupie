import * as winston from 'winston'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
require('winston-syslog').Syslog // eslint-disable-line

export let logger = null

const { format, createLogger, transports } = winston.default
const { timestamp, combine, errors, json } = format

function buildDevLogger () {
  return createLogger({
    level: process.env.LOG_LEVEL || 'info',
    transports: [
      new transports.Console()
    ]
  })
}

function buildProdLogger () {
  return createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: { service: process.env.npm_package_name },
    transports: [
      new transports.Syslog({
        host: process.env.SYSLOG_HOST,
        type: 'RFC5424'
      }),
      new transports.Console()
    ]
  })
}

if (process.env.NODE_ENV === 'development') {
  logger = buildDevLogger()
  logger.info('Logging in development mode', { env: 'Development' })
} else {
  logger = buildProdLogger()
  logger.info('Logging in production mode')
}
