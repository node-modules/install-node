'use strict';

const Command = require('common-bin').Command;

class InstallCommand extends Command {
  * run(cwd, args) {
    console.log('run install at %s with %j', cwd, args);
  }

  help() {
    return 'Install node';
  }
}

module.exports = InstallCommand;
