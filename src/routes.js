const handlers = require('./handlers')

module.exports = [
	{
		method: 'GET',
		path: '/',
		config: {
			handler: handlers.isAlive
		}
	},
	{
		method: 'GET',
		path: '/persons',
		config: {
			handler: handlers.getAllPersons
		}
	}
]