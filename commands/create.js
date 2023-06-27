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
    .arguments('<title> <description> [priority]')
    .action(async (title, description, priority) => {
        try {
            const job = new Job({
                title,
                description,
                priority: priority || 'low',
                status: 'pending'
            });
            await job.save();

            console.log(`Job ${job._id} created.`);
            process.exit(0);
        } catch (error) {
            console.error('Error creating job:', error);
            process.exit(1);
        }
    });

module.exports = createCommand;