'use strict';

const assert = require('assert');

function jumpSearch(arr, x) {
  let n = arr.length;
  let step = parseInt(Math.floor(Math.sqrt(n)), 10);
  let prev = 0;
  while (arr[Math.min(step, n) - 1] < x) {
    prev = step;
    step += parseInt(Math.floor(Math.sqrt(n)));
    if (prev >= n) {
      return -1;
    }
  }
  while (arr[prev] < x) {
    prev = prev + 1;
    if (prev === Math.min(step, n)) {
      return -1;
    }
  }
  if (arr[prev] === x) {
    return prev;
  }
  return -1;
}
assert.equal(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21,
                         34, 55, 89, 144, 233, 377, 610], 55), 10);
