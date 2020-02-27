'use strict';

const assert = require('assert');

function swap(arr, i, j) {
  let t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
assert.deepEqual(bubbleSort([4, 3, 5, 2, 1].slice()), [1, 2, 3, 4, 5]);
