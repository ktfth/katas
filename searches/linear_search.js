'use strict';

const assert = require('assert');

function linearSearch(sequence, target) {
  let out = -1;
  for (let i = 0; i < sequence.length; i += 1) {
    let item = sequence[i];
    if (item === target) {
      return i;
    }
  }
  return out;
}
assert.equal(linearSearch([0, 5, 7, 10, 15], 0), 0);
assert.equal(linearSearch([0, 5, 7, 10, 15], 15), 4);
assert.equal(linearSearch([0, 5, 7, 10, 15], 5), 1);
assert.equal(linearSearch([0, 5, 7, 10, 15], 6), -1);
