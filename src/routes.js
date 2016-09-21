const handlers = require('./handlers')
const joi = require('joi')
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
		path: '/persons/{id}',
		config: {
			handler: (request, reply) => {
				handlersPersons.getPersonById(request.params.id, reply)
			},
			tags: ['api'],
			validate: {
				params: {
					id : joi.number()
						.required()
						.description('the id for the person'),
				}
			}
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