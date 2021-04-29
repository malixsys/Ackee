/* eslint-env node */

const execSync = require('child_process').execSync
const { version } = require('./package.json').config

execSync(`git commit -am "Version ${ version }"`, { stdio: [ 0, 1, 2 ] })
