'use strict';
const assert = require('assert');

let expected = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function F(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return F(n-1)+F(n-2);
}

function fib(n=10, i=2) {
  let out = [];
  for (; i < n ; i += 1) {
    if (n > 1) {
      out.push(F(i));
    }
  }
  return out;
}
assert.deepEqual(fib(12), expected);
