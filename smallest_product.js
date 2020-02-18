'use strict';

const assert = require('assert');

function smallestProduct(a, b) {
  let out = [];
  for (let i = a; i <= b; i += 1) {
    out.push(i);
  }
  out = out.reduce((a, b) => {
    let gcd = (a, b) => {
      return b ? gcd(b, a % b) : a;
    };
    return a * b / gcd(a, b);
  });
  return out;
}

assert.equal(smallestProduct(1, 10), 2520);

console.log(smallestProduct(1, 20));
