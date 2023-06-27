const { Command } = require('commander');
const Job = require('../models/Job');

const cancelCommand = new Command('cancel');

cancelCommand
    .arguments('<jobID>')
    .action(async (jobID) => {
        try {
            const job = await Job.findById(jobID);
            if (!job) {
                console.log('Job not found');
                return;
            }

            if (!job.cancellable) {
                console.log('Job is not cancellable');
                return;
            }

            if (job.status === 'completed') {
                console.log('Job is already completed');
                return;
            }

            job.status = 'cancelled';
            await job.save();

            console.log('Job cancelled successfully: ', job);
            process.exit(0);
        } catch (error) {
            console.error('Error cancelling job: ', error);
            process.exit(1);
        }
    });

module.exports = cancelCommand;