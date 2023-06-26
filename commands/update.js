const { Command } = require('commander');
const mongoose = require('mongoose');
const Job = require('../models/Job');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const updateCommand = new Command('update');

updateCommand
    .arguments('<jobID> <status>')
    .action(async (jobID, status) => {
        try {
            const job = await Job.findById(jobID);
            if (!job) {
                console.log('Job not found');
                return;
            }

            job.status = status;
            await job.save();

            console.log(`Job status updated successfully: ${jobID} -> ${status}`);
            process.exit(0);
        } catch (error) {
            console.error('Error updating job: ', error.message);
            process.exit(1);
        }
    });

module.exports = updateCommand; 