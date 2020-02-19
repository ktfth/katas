'use strict';

const assert = require('assert');

function primes(n) {
  let primes = [2];
  let attempt = 3;
  while (primes.length < n) {
    for (let i = 0; i < primes.length; i += 1) {
      if (attempt % primes[i] != 0) {
        primes.push(attempt);
      } else {
        break;
      }
    }
    attempt += 2;
  }
  return primes[primes.length - 1];
}
assert.equal(primes(20), 13);

console.log(primes(10001));
