const { Command } = require('commander');
const mongoose = require('mongoose');
const Job = require('../models/Job');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const listCommand = new Command('list');

listCommand
    .action(async () => {
        try {
            const jobs = await Job.find();
            console.log('Jobs: ', jobs);
            process.exit(0);
        } catch (error) {
            console.error('Error listing jobs: ', error.message);
        }
    });

module.exports = listCommand;