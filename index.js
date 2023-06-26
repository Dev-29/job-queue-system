const { program } = require('commander');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

program.version('1.0.0').description('Job Queue System');

const createCommand = require('./commands/create');
const listCommand = require('./commands/list');
const processCommand = require('./commands/process');
const updateCommand = require('./commands/update');

program.addCommand(createCommand);
program.addCommand(listCommand);
program.addCommand(processCommand);
program.addCommand(updateCommand);

program.parse(process.argv);