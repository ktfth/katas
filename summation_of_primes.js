'use strict';

const assert = require('assert');

function primes(n) {
  let primes = [2];
  let attempt = 3;
  while (primes.length < n) {
    for (let i = 0; i < primes.length; i += 1) {
      if (attempt % primes[i] != 0 && primes.indexOf(attempt) === -1) {
        primes.push(attempt);
      } else {
        break;
      }
    }
    attempt += 2;
  }
  return primes;
}
console.log(primes(10).slice(0, 4).reduce((a, b) => a + b));
console.log(primes(2000000).slice(0, 4).reduce((a, b) => a + b));
