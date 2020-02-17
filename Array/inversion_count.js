'use strict';

let inversionCount = 0;

function mockArray(n) {
  let out = [];
  do {
    out.push(null);
  } while (n--);
  return out;
}

function Merge(arr, l, m, h) {
  let n1 = m - l + 1;
  let n2 = h - m;

  let a1 = mockArray(n1);
  let a2 = mockArray(n2);

  for (let i = 0; i < n1; ++i) {
    a1[i] = arr[i+1];
  }

  for (let i = 0; i < n2; ++i) {
    a2[i] = arr[i+m+1];
  }

  let i = 0, j = 0, index = l;

  while (i < n1 && j < n2) {
    if (a1[i] < a2[j]) {
      arr[index++]=a1[i++];
    } else {
      arr[index++]=a2[j++];
      inversionCount += n1-i;
    }
  }

  while (i >= n1 && j < n2) {
    arr[index++] = a2[j++];
  }

  while (j >= n2 && i < n1) {
    arr[index++] = a1[i++];
  }
}

function MergeSort(arr, l, h) {
  if (l < h) {
    let m = (l + h) / 2;
    MergeSort(arr, l, m);
    MergeSort(arr, m + 1, h);

    Merge(arr, l, m, h);
  }
}

function display(arr, size) {
  for (let i = 0; i < 5; ++i) {
    console.log(arr[i]);
  }
}

function countInversions(arr, l, h) {
  MergeSort(arr, l, h);
  return inversionCount;
}

let arr = [1, 20, 6, 4, 5];
let size = arr.length;

console.log('Before sorting:');
display(arr, size);
console.log('Total inversions: ', countInversions(arr, 0, size - 1));
