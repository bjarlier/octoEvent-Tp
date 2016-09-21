const handlers = require('./handlers');

const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');


describe('handlers', () => {
	describe('.isAlive()', () => {
		it('should reply is alive' , () => {
			const replySpy = sinon.spy();
			handlers.isAlive(null, replySpy);
			expect(replySpy).to.have.been.calledWith('OctoEvent is alive');
		});
	});
});