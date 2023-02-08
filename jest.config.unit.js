'use strict'

// Readonly file. Add config in jest.config.js
var config = require('./jest.config')
config.testRegex = '\\.spec\\.(ts|js)$'
//eslint-disable-next-line no-console
console.log('RUNNING UNIT TESTS')

module.exports = config
