const persons = require('./../../../res/persons')

module.exports.getAllPersons = function(request, reply) {
	reply(persons);
}

module.exports.getPersonById = function (id, reply) {

	const person = persons.filter(function (p){
		return (p.id == id)
	})

	if (!person.length) {
		return reply().code(404)
	}

	reply(person[0])
}
