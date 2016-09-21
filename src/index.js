const hapi = require('hapi');
const swagger = require('hapi-swagger');
const vision = require('vision');
const inert = require('inert');
const logger = require('./../logger');

const server = new hapi.Server();
const routes = require('./routes')

server.connection({port: 3000});

server.route(routes)


server.register(
	[
		{
			register: swagger,
			options: {
				swaggerUIPath : '/documentation/swaggerui/',
				jsonPath : '/documentation/swagger.json/',
				schemes : ['http'],
				host : 'localhost:3000',
			}
		},
		vision,
		inert
	],
	(err) => {
		if (err) {
			logger.error(err);
		}
	});


server.start(function (err) {
	if (err) throw err
	logger.info('server listening on port 3000')
})

module.exports = server;
