const factorial = require('../factorial_iter')
var assert = require('chai').assert;

describe('Testing iterative factorial', () => {
    it('"Hello"! = undefined', () => {
        assert.equal(factorial("Hello"),undefined);
    })
    it('0! = 1', () => {
        assert.equal(factorial(0),1);
    })
    it('-6! = undefined', () => {
        assert.equal(factorial(-6),undefined);
    })
    it('4! = 24', () => {
        assert.equal(factorial(4),24);
    })
    it('5! = 120', () => {
        assert.equal(factorial(5),120);
    })
    it('10! = 3628800', () => {
        assert.equal(factorial(10),10*9*8*7*6*5*4*3*2);
    })

})