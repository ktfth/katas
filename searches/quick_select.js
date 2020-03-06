'use strict';

const assert = require('assert');

function _partion(data, pivot) {
  let less = [];
  let equal = [];
  let greater = [];
  for (let i = 0; i < data.length; i += 1) {
    let element = data[i];
    if (element < pivot) {
      less.push(element);
    } else if (element > pivot) {
      greater.push(element);
    } else {
      equal.push(element);
    }
  }
  return [less, equal, greater];
}

function quickSelect(items, index) {
  if (index >= items.length || index < 0) {
    return null;
  }

  let pivot = Math.max(0, Math.floor(Math.random() * items.length - 1));
  pivot = items[pivot];
  let count = 0;
  let _cache = _partion(items, pivot);
  let smaller = _cache[0];
  let equal = _cache[1];
  let larger = _cache[2];
  count = equal.length;
  let m = smaller.length;

  if (m <= index < m + count) {
    return pivot;
  } else if (m > index) {
    return quickSelect(smaller, index);
  } else {
    return quickSelect(larger, index - (m + count));
  }
}
assert.equal(quickSelect([2, 4, 5, 7, 899, 54, 32], 5), 54);
