'use strict';

const assert = require('assert');

function divisors(n) {
  let small = [];
  let large = [];
  let end = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= end; i += 1) {
    if (n % i === 0) {
      small.push(i);
      if (i * i != n) {
        large.push(n / i);
      }
    }
  }
  large.reverse();
  return small.concat(large);
}
assert.deepEqual(divisors(1), [1]);
assert.deepEqual(divisors(5), [1, 5]);
assert.deepEqual(divisors(12), [1, 2, 3, 4, 6, 12]);

function generateSequence(n=0, m=10, s=1) {
  let out = [];
  for (let i = n; i < m; i += s) {
    out.push(i);
  }
  return out;
}
assert.deepEqual(generateSequence(1, 4), [1, 2, 3]);
assert.deepEqual(generateSequence(2, 6, 2), [2, 4]);

function triplet() {
  let out = {};
  let gs = generateSequence(2, 550, 2);
  for (let i = 0; i < gs.length; i += 1) {
    let r = gs[i];
    let st = r * r / 2;
    divisors(st).reduce((s, t) => {
      let x = (r + s) + (r + t) + (r + s + t);
      if (parseInt(x) > 0) {
        out[x] = (r + s) + (r + t) + (r + s + t);
      }
    });
  }
  return out;
}
console.log(triplet(1000));
