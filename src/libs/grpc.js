import { server, serverCreds, strings, config, commands } from '@whatagoodbot/rpc'
import { getString, getManyStrings, getAllStrings } from '../controllers/strings.js'
import { getConfig } from '../controllers/config.js'
import { getCommand, getAllCommands } from '../controllers/commands.js'

export default () => {
  server.addService(strings.Strings.service, { getString, getManyStrings, getAllStrings })
  server.addService(config.Config.service, { getConfig })
  server.addService(commands.Commands.service, { getCommand, getAllCommands })
  server.bindAsync('0.0.0.0:50051', serverCreds, () => {
    server.start()
  })
}
