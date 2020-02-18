'use strict';

const assert = require('assert');

function generateSequence(n, m) {
  let out = [];
  for (let i = n; i <= m; i += 1) {
    out.push(i);
  }
  return out;
}

function squareSum(n, m) {
  let out = [];
  out = generateSequence(n, m);
  out = out.map(v => Math.pow(v, 2)).reduce((a, b) => a + b);
  return out;
}
assert.equal(squareSum(1, 10), 385);

function sumSquare(n, m) {
  let out = [];
  out = generateSequence(n, m);
  out = Math.pow(out.reduce((a, b) => a + b), 2);
  return out;
}
assert.equal(sumSquare(1, 10), 3025);

function difference(a, b) {
  return Math.max(a, b) - Math.min(a, b);
}
assert.equal(difference(squareSum(1, 10), sumSquare(1, 10)), 2640);

console.log('Square sum of 1 to 100: ', squareSum(1, 100));
console.log('Sum quare of 1 to 100: ', sumSquare(1, 100));
console.log('Difference between: ', difference(squareSum(1, 100), sumSquare(1, 100)));
