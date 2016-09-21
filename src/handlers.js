const persons = require('./../res/persons')

module.exports.isAlive = function(request, reply){
	reply('OctoEvent is alive')
}

module.exports.getAllPersons = function(request, reply) {
	reply(persons);
}