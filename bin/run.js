#!/usr/bin/env node

'use strict';

const run = require('common-bin').run;

if (process.argv.length === 2) {
  // default command is install
  process.argv.push('install');
}

run(require('../lib/program'));
