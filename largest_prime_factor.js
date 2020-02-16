'use strict';
const assert = require('assert');

function largestPrimeFactor(n, i=1) {
  let out = null;
  let cache = primeFactors(n);
  out = cache.sort().reverse()[0];
  return out;
}
assert.equal(largestPrimeFactor(10), 5);
// console.log(largestPrimeFactor(600851475143));
// assert.deepEqual(largesPrimeFactor(600851475143), );

function primeFactors(n) {
  let out = [];
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      out.push(d);
      n /= d;
    }
    d += 1
    if (d*d > n) {
      out.push(n);
      break;
    }
  }
  return out;
}
assert.deepEqual(primeFactors(13195), [5, 7, 13, 29]);
