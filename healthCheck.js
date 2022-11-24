// TODO Make this actually check that the service is working
// EXAMPLE = https://patrickleet.medium.com/effective-docker-healthchecks-for-node-js-b11577c3e595

import { serverStatus } from './src'

process.exit(serverStatus)
