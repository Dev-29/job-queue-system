const { program, Command } = require('commander');
const mongoose = require('mongoose');
const Job = require('../models/Job');
const jobProcessor = require('../workers/jobProcessor');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const processCommand = new Command('process');
processCommand
    .action(async () => {
        try {
            await jobProcessor.processJobs();
            console.log('Jobs processed successfully');
            process.exit(0);
        } catch (error) {
            console.error('Error processing jobs:', error);
            process.exit(1);
        }
    });

module.exports = processCommand;