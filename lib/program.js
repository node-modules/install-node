'use strict';

const path = require('path');
const Program = require('common-bin').Program;

class InstallNodeProgram extends Program {
  constructor() {
    super();
    this.version = require('../package.json').version;

    this.addCommand('install', path.join(__dirname, 'install_command.js'));
  }
}

module.exports = InstallNodeProgram;
