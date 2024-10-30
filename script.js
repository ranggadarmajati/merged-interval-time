require('dotenv').config();
const axios = require('axios');
const { DateTime } = require('luxon');

const TOKEN = process.env.GITHUB_ACCESS_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY;

// Get PR_NUMBER from input argument
const PR_NUMBER = process.argv[2];

if (!PR_NUMBER) {
    console.error("Error: Please provide a pull request number as an argument.");
    process.exit(1);
}

// Retrieving pull request information from GitHub
const url = `https://api.github.com/repos/${REPO}/pulls/${PR_NUMBER}`;

const headers = {
    "Accept": "application/vnd.github+json",
    "Authorization": `Bearer ${TOKEN}`,
    "X-GitHub-Api-Version": "2022-11-28"
};

axios.get(url, { headers })
    .then(response => {
        const prData = response.data;

        // Get pull request url, created_at time and merged_at time
        const createdAt = prData.created_at;
        const mergedAt = prData.merged_at;
        const htmlUri = prData.html_url;

        // Calculating time intervals
        const createdTime = DateTime.fromISO(createdAt, { zone: 'utc' });
        const mergedTime = mergedAt ? DateTime.fromISO(mergedAt, { zone: 'utc' }) : null;

        if (mergedTime) {
            console.log(`Pull Request: ${htmlUri}`);
            console.log(`Created At: ${createdAt}`);
            console.log(`Merged At: ${mergedAt}`);

            const interval = mergedTime.diff(createdTime);
            console.log(`Interval Time: ${interval.toFormat('hh:mm:ss')}`);
        } else {
            console.log("Pull request has not been merged yet.");
        }
    })
    .catch(error => {
        console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
    });
