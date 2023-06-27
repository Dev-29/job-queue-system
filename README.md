# Job Queue System

The Job Queue System is a command-line application built with Node.js and MongoDB that allows you to manage jobs in a queue. It provides commands to create jobs, list all jobs, and process jobs in the queue.

## Features

- Create a new job with a title and description.
- List all jobs in the queue.
- Process jobs in the queue and mark them as completed.

## Prerequisites

- Node.js (version 12 or higher)
- MongoDB (running locally or accessible via connection string)

## Installation

1. Clone the repository:
   ```shell
   git clone github.com/Dev-29/job-queue-system.git
   ```
   ```shell
   cd job-queue-system
    ```

3. Install dependencies:
    ```shell
    npm install
    ```

## Usage

### Create a new job

To create a new job, run the following command:

    node index.js create -t <title> -d <description>


### List all jobs

To list all jobs, run the following command:

    node index.js list


### Process jobs

To process jobs, run the following command:

    node index.js process

