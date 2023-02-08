'use strict'

// Readonly file. Add config in jest.config.js
var config = require('./jest.config')
config.testRegex = '\\.ispec\\.(ts|tsx)$'
//eslint-disable-next-line no-console
console.log('RUNNING INTEGRATION TESTS')

module.exports = config
