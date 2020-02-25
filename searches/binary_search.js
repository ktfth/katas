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
assert.equal(bisectLeft([0, 5, 7, 10, 15], 15, 1, 3), 3);
assert.equal(bisectLeft([0, 5, 7, 10, 15], 6, 2), 2);

function bisectRight(sortedCollection, item, lo=0, hi=null) {
  if (!hi) {
    hi = sortedCollection.length;
  }

  while(lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (sortedCollection[mid] <= item) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
}
assert.equal(bisectRight([0, 5, 7, 10, 15], 0), 1);
assert.equal(bisectRight([0, 5, 7, 10, 15], 15), 5);
assert.equal(bisectRight([0, 5, 7, 10, 15], 6), 2);
assert.equal(bisectRight([0, 5, 7, 10, 15], 15, 1, 3), 3);
assert.equal(bisectRight([0, 5, 7, 10, 15], 6, 2), 2);

function insortLeft(sortedCollection, item, lo=0, hi=null) {
  let cache = sortedCollection.map(v => v);
  let point = bisectLeft(sortedCollection, item, lo, hi);
  sortedCollection.splice(point, item, item);
  if (point < cache.length && (!lo && !hi)) {
    cache
      .reverse()
      .slice(0, point + 1)
      .reverse()
      .map(v => sortedCollection.push(v));
  } if (point < cache.length && lo > 0 && hi > 0) {
    cache
      .reverse()
      .slice(0, point - 1)
      .reverse()
      .map(v => sortedCollection.push(v));
  }
  return sortedCollection;
}
assert.deepEqual(insortLeft([0, 5, 7, 10, 15], 6), [0, 5, 6, 7, 10, 15]);
assert.deepEqual(insortLeft([0, 5, 7, 10, 15], 20), [0, 5, 7, 10, 15, 20]);
assert.deepEqual(insortLeft([0, 5, 7, 10, 15], 15, 1, 3), [0, 5, 7, 15, 10, 15]);

function insortRight(sortedCollection, item, lo=0, hi=null) {
  let cache = sortedCollection.map(v => v);
  let point = bisectRight(sortedCollection, item, lo, hi);
  sortedCollection.splice(point, item, item);
  if (point < cache.length && (!lo && !hi)) {
    cache
      .reverse()
      .slice(0, point + 1)
      .reverse()
      .map(v => sortedCollection.push(v));
  } if (point < cache.length && lo > 0 && hi > 0) {
    cache
      .reverse()
      .slice(0, point - 1)
      .reverse()
      .map(v => sortedCollection.push(v));
  }
  return sortedCollection;
}
assert.deepEqual(insortRight([0, 5, 7, 10, 15], 6), [0, 5, 6, 7, 10, 15]);
assert.deepEqual(insortRight([0, 5, 7, 10, 15], 20), [0, 5, 7, 10, 15, 20]);
assert.deepEqual(insortRight([0, 5, 7, 10, 15], 15, 1, 3), [0, 5, 7, 15, 10, 15]);

function binarySearch(sortedCollection, item) {
  let left = 0;
  let right = sortedCollection.length - 1;

  while (left <= right) {
    let midpoint = Math.floor(left + (right - left) / 2);
    let currentItem = sortedCollection[midpoint];
    if (currentItem === item) {
      return midpoint;
    } else if (item < currentItem) {
      right = midpoint - 1
    } else {
      left = midpoint + 1;
    }
  }

  return -1;
}
assert.deepEqual(binarySearch([0, 5, 7, 10, 15], 0), 0);
assert.deepEqual(binarySearch([0, 5, 7, 10, 15], 15), 4);
assert.deepEqual(binarySearch([0, 5, 7, 10, 15], 5), 1);
assert.deepEqual(binarySearch([0, 5, 7, 10, 15], 6), -1);

function binarySearchLib(sortedCollection, item) {
  let index = d3.bisectLeft(sortedCollection, item);
  if (index !== sortedCollection.length && sortedCollection[index] === item) {
    return index;
  }
  return -1;
}
assert.deepEqual(binarySearchLib([0, 5, 7, 10, 15], 0), 0);
assert.deepEqual(binarySearchLib([0, 5, 7, 10, 15], 15), 4);
assert.deepEqual(binarySearchLib([0, 5, 7, 10, 15], 5), 1);
assert.deepEqual(binarySearchLib([0, 5, 7, 10, 15], 6), -1);

// function binarySearchRecursion(sortedCollection, item, left, right) {
//   if (right < left) {
//     return -1;
//   }
//
//   let midpoint = Math.floor(left + (right - left) / 2);
//
//   if (sortedCollection[midpoint] === item) {
//     return midpoint;
//   } else if (sortedCollection[midpoint] > item) {
//     return binarySearchRecursion(sortedCollection, item, left, midpoint - 1);
//   } else {
//     return binarySearchRecursion(sortedCollection, item, midpoint + 1, right);
//   }
// }
// assert.deepEqual(binarySearchRecursion([0, 5, 7, 10, 15], 0), 0);
// assert.deepEqual(binarySearchRecursion([0, 5, 7, 10, 15], 15), 4);
// assert.deepEqual(binarySearchRecursion([0, 5, 7, 10, 15], 5), 1);
// assert.deepEqual(binarySearchRecursion([0, 5, 7, 10, 15], 6), -1);
