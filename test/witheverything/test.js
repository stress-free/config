const assert = require('assert')
const config = require('../..') // Normally `require('@cardash/config')`

/* eslint-disable no-console */
console.log('Testing basic config')
assert.equal(config.foo, 'bar', 'config is not fubar')

console.log('Testing array config')
assert(config.holyHandGrenadeOrdering instanceof Array)
assert.deepEqual(config.holyHandGrenadeOrdering, [1, 2, 5, 3])

console.log('Testing object and secrets config')
assert(config.mySqlConfig instanceof Object)
assert.deepEqual(config.mySqlConfig, {
  host: 'localhost',
  port: 3306,
  user: 'admin',
  password: 'SECRETPASSWORD',
  database: 'db',
})

console.log('Testing environment config')
assert.equal(config.toBeReplaced, 'thisisthetestenvironment')
