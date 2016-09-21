const hapi = require('hapi');
const logger = require('./../logger');

const server = new hapi.Server();
const routes = require('./routes')

server.connection({port: 3000});

server.route(routes)

server.start(function (err) {
	if (err) throw err
	logger.info('server listening on port 3000')
})

module.exports = server;
