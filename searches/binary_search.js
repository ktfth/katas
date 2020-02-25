'use strict';

const d3 = require('d3');
const assert = require('assert');

function bisectLeft(sortedCollection, item, lo=0, hi=null) {
  if (!hi) {
    hi = sortedCollection.length;
  }

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (sortedCollection[mid] < item) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
}
assert.equal(bisectLeft([0, 5, 7, 10, 15], 0), 0);
assert.equal(bisectLeft([0, 5, 7, 10, 15], 6), 2);
assert.equal(bisectLeft([0, 5, 7, 10, 15], 20), 5);