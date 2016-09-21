const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
chai.use(sinonChai);


const servicePersons = require('./servicePersons')

const persons = require('../../../res/persons.json');

describe('handlersPersons', () => {
	describe('.getAllPersons()', () => {
		it('should return list of persons', () => {

			var personList = servicePersons.getAllPersons();

			expect(personList).to.have.been.deep.equals(persons);
		})
	})

	describe('.getPersonById()', () => {
		it('should return a persons', () => {

			var personTest = servicePersons.getPersonById(10);

			expect(personTest[0]).to.have.been.deep.equals(persons[0]);
		})
	})
})
