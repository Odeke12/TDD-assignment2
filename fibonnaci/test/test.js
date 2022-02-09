const fibonnaci = require('../fibonnaci.js')
var assert = require('chai').assert;

describe('Testing fibonnaci', () => {
    it('fib("Hello there") = undefined', () => {
        assert.equal(fibonnaci("Hello there"),undefined);
    })
    it('fib(-9) = undefined', () => {
        assert.equal(fibonnaci(-9),undefined);
    })
    it('fib(1) = 0', () => {
        assert.equal(fibonnaci(1),0);
    })
    it('fib(2) = 1', () => {
        assert.equal(fibonnaci(2),1);
    })
    it('fib(5) = 3', () => {
        assert.equal(fibonnaci(5),3);
    })
    it('fib(20) = 4181', () => {
        assert.equal(fibonnaci(20),4181);
    })
})