const mongoose = require('mongoose');
const Job = require('../models/Job');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

async function processJobs() {
    try {
        const jobs = await Job.find({ status: 'pending' }).sort('priority');
        for (const job of jobs) {
            job.status = 'completed';
            job.completedAt = new Date();
            await job.save();
        }
    } catch (error) {
        throw new Error('Error processing jobs: ', error.message);
    }
}

module.exports = { processJobs };