const chai = require('chai');
const expect = chai.expect;
const server = require('./../src/index');
const persons = require('./../res/persons')

describe('Server', () => {
    describe('/', () => {
        it('should return hello world', (done) => {
            server.inject('/', (res) => {
                expect(res.result).to.equal('OctoEvent is alive');
                done()
            })
        })
    })

    describe('/persons', () => {
        describe('GET', () => {
            it('should return a list of persons', (done) => {
                server.inject('/persons', (res) => {
                    expect(res.result).to.deep.equal(persons);
                    done();
                });
            });
        });
    });

})


