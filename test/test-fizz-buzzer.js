// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer.js
const fizzBuzzer= require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return correct fizz if number is divisible by 3, buzz if number is divisble by 5, and fizz-buzz if divisible by 15 ', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 10, expected: 'buzz'}
		
    ];
    // for each input (num), `fizzBuzzer` should
    // produce the expected response
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not numbers
    const badInputs = [
      ['a'],
      [-2],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});