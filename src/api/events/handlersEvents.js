const events = require('./../../../res/events')

module.exports.getAllEvents = function(request, reply) {
	reply(events);
}