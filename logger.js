const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
    name: 'logger',
    level: 'debug',
    streams: [
        { stream: process.stdout },
        { path: 'octoEvent.log' }
    ]
});