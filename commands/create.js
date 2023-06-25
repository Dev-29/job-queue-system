const { program, Command } = require('commander');
const mongoose = require('mongoose');
const Job = require('../models/Job');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const createCommand = new Command('create');
createCommand
    .option('-t, --title <title>', 'Job Title')
    .option('-d, --description <description>', 'Job Description')
    .action(async (options) => {
        try {
            const { title, description } = options;
            const job = new Job({ title, description });
            await job.save();
            console.log('Job created successfully');
            process.exit(0);
        } catch (error) {
            console.error(`Error creating job: ${error.message}`);
            process.exit(1);
        }
    });

module.exports = createCommand;