// https://mochajs.org/#asynchronous-code

const request = require('supertest');
const assert = require('assert');
const random_test = require('./random_test.js');

describe('#random_test()', () => {
  it('random_test result', (done) => {
    assert.equal(random_test(), 'random test')
    done()
  });
});


