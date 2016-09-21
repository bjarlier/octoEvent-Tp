const handlersPersons = require('./handlersPersons')
const servicePersons = require('./servicePersons')

const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const sinon = require('sinon');

const persons = require('../../../res/persons.json');

describe('handlersPersons', () => {
	describe('.getAllPersons()', () => {

		afterEach(() => {
			servicePersons.getAllPersons.restore();
		})

		it('should call reply' , () => {
			const replySpy = sinon.spy();

			sinon.stub(servicePersons,'getAllPersons').returns(persons);

			handlersPersons.getAllPersons(null, replySpy);

			expect(replySpy).to.have.been.calledWith(persons);
		});
	});

	describe('.getPersons(id)', () => {

		afterEach(() => {
			servicePersons.getPersonById.restore();
		})

		describe('when person is not found', () => {
			it('should invoke reply without argument and reply.code with 404', () => {
				const codeSpy = sinon.spy();
				const obj =  {
					reply: () => {
						return {
							code: codeSpy
						};
					}
				};
				const replySpy = sinon.spy(obj,'reply')

				const request = {
					params:{
						id:600
					}
				}

				sinon.stub(servicePersons,'getPersonById').returns([]);

				handlersPersons.getPersonById(request, replySpy);


				expect(replySpy).to.have.been.calledWith();
				expect(codeSpy).to.have.been.calledWith(404);
			})
		})
		describe('when person is found', () => {
			it('should invoke reply with person found' , () => {
				const replySpy = sinon.spy();

				const request = {
					params:{
						id:10
					}
				}

				sinon.stub(servicePersons,'getPersonById').returns(persons);

				handlersPersons.getPersonById(request, replySpy);

				expect(replySpy).to.have.been.calledWith(persons[0]);
			});
		})

	});
});