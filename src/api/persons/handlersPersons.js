const persons = require('./../../../res/persons')

module.exports.getAllPersons = function(request, reply) {
	reply(persons);
}
