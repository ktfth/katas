'use strict';

const assert = require('assert');

function binarySearch(aList, item) {
  if (aList.length === 0) {
    return false;
  }
  let midpoint = Math.floor(aList.length / 2);
  if (aList[midpoint] === item) {
    return true;
  } if (item < aList[midpoint]) {
    return binarySearch(aList.slice(0, midpoint), item);
  } else {
    return binarySearch(aList.slice(midpoint + 1), item);
  }
}
assert.ok(!binarySearch([0, 1, 2, 8, 13, 17, 19, 32, 42], 3))
assert.ok(binarySearch([0, 1, 2, 8, 13, 17, 19, 32, 42], 13))
