const persons = require('./../../../res/persons')

module.exports.getPersonById = function (id) {
	return persons.filter((p) => p.id == id)
}

module.exports.getAllPersons = function () {
	return persons;
}

