'use strict';

const assert = require('assert');

function sentinelLinearSearch(sequence, target) {
  sequence.push(target);

  let index = 0;
  while (sequence[index] !== target) {
    index += 1;
  }

  sequence.pop();

  if (index === sequence.length) {
    return -1;
  }

  return index;
}
assert.equal(sentinelLinearSearch([0, 5, 7, 10, 15], 0), 0);
assert.equal(sentinelLinearSearch([0, 5, 7, 10, 15], 15), 4);
assert.equal(sentinelLinearSearch([0, 5, 7, 10, 15], 5), 1);
assert.equal(sentinelLinearSearch([0, 5, 7, 10, 15], 6), -1);
