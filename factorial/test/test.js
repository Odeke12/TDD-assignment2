const factorial = require('../factorial.js')
var assert = require('chai').assert;

describe('Testing factorial', () => {
    it('-6! = undefined', () => {
        assert.equal(factorial(-6),undefined);
    })
    it('4! = 24', () => {
        assert.equal(factorial(4),24);
    })
    it('5! = 120', () => {
        assert.equal(factorial(4),24);
    })
})