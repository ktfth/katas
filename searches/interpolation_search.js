'use strict';

const assert = require('assert');

function interpolationSearch(sortedCollection, item) {
  let left = 0;
  let right = sortedCollection.length - 1;

  while(left <= right) {
    if (sortedCollection[left] === sortedCollection[right]) {
      if (sortedCollection[left] === item) {
        return left;
      } else {
        return null;
      }
    }
    let point = Math.floor(((item - sortedCollection[left]) * (right - left)) / (
      sortedCollection[right] - sortedCollection[left]
    ));
    if (point < 0 || point >= sortedCollection.length) {
      return null;
    }
    let currentItem = sortedCollection[point];
    if (currentItem === item) {
      return point
    } else {
      if (point < left) {
        right = left;
        left = point;
      } else if (point > right) {
        left = right;
        right = point;
      } else {
        if (item < currentItem) {
          right = point - 1;
        } else {
          left = point + 1;
        }
      }
    }
  }
  return null;
}
assert.equal(interpolationSearch([10, 30, 40, 45, 50, 66, 77, 93], 45), 3);
