const handlersEvents = require('./handlersEvents')


const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');

const events = require('../../../res/events.json');

describe('handlersEvents', () => {
	describe('.getAllEvents()', () => {
		it('should call reply' , () => {
			const replySpy = sinon.spy();
			handlersEvents.getAllEvents(null, replySpy);
			expect(replySpy).to.have.been.calledWith(events);
		});
	});

});