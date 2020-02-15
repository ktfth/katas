'use strict';
const assert = require('assert');

let expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function generateSequence(n=10, i=0) {
  let out = [];
  for (; i < n ; i += 1) {
    out.push(i + 1);
  }
  return out;
}
assert.deepEqual(generateSequence(), expectation);

function filterMultiples(arr=generateSequence()) {
  let out = [];
  out = arr.filter(v => {
    if (v % 3 === 0 || v % 5 === 0) {
      return v;
    }
  });
  return out;
}
assert.deepEqual(filterMultiples(), expectation.filter(v => {
  if (v % 3 === 0 || v % 5 === 0) {
    return v;
  }
}));
assert.deepEqual(filterMultiples(generateSequence(9)),
                                 expectation.slice(0, 9).filter(v => {
                                   if (v % 3 === 0 || v % 5 === 0) {
                                     return v;
                                   }
                                 }));
