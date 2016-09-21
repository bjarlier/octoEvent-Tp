const handlers = require('./handlers')
const handlersPersons = require('./api/persons/handlersPersons')
const handlersEvents = require('./api/events/handlersEvents')

module.exports = [
	{
		method: 'GET',
		path: '/',
		config: {
			handler: handlers.isAlive,
			tags: ['api']
		}
	},
	{
		method: 'GET',
		path: '/persons',
		config: {
			handler: handlersPersons.getAllPersons,
			tags: ['api']
		}
	},
	{
		method: 'GET',
		path: '/events',
		config: {
			handler: handlersEvents.getAllEvents,
			tags: ['api']
		}
	}
]