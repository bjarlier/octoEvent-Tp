const servicePersons = require('./servicePersons')

module.exports.getAllPersons = function(request, reply) {
	reply(servicePersons.getAllPersons());
}

module.exports.getPersonById = function (request, reply) {

	const person = servicePersons.getPersonById(request.params.id);

	if (!person.length) {
		return reply().code(404)
	}
	reply(person[0])
}
