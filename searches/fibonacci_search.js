'use strict';

const assert = require('assert');

function fibonacciSearch(arr, val) {
  let fibN2 = 0;
  let fibN1 = 1;
  let fibNext = fibN1 + fibN2;
  let length = arr.length;
  if (length === 0) {
    return -1;
  }
  while (fibNext < arr.length) {
    fibN2 = fibN1;
    fibN1 = fibNext;
    fibNext = fibN1 + fibN2;
  }
  let index = -1;
  while (fibNext > 1) {
    let i = Math.min(index + fibN2, (length - 1));
    if (arr[i] < val) {
      fibNext = fibN1;
      fibN1 = fibN2;
      fibN2 = fibNext - fibN1;
      index = i;
    } else if (arr[i] > val) {
      fibNext = fibN2;
      fibN1 = fibN1 - fibN2;
      fibN2 = fibNext - fibN1;
    } else {
      return i;
    }
  }
  if ((fibN1 && index < length - 1) && (arr[index + 1] === val)) {
    return index + 1;
  }
  return -1;
}
assert.equal(fibonacciSearch([1, 6, 7, 0, 0], 6), 1);
assert.equal(fibonacciSearch([1, -1, 5, 2, 9], 10), -1);
assert.equal(fibonacciSearch([], 9), -1);
