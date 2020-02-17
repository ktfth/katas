'use strict';

function partition(arr, l, h) {
  let pivot = arr[h];
  let i = l;
  let j = h-1;
  let swap = 0;
  while(i <= j) {
    while(arr[i] < pivot) {
      i += 1;
    }
    while(arr[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      swap = arr[j];
      arr[i] = arr[j];
      arr[j] = swap;
      i += 1;
      j -= 1;
    }
  }
  // swap the pivot element
  swap = arr[h];
  arr[h] = arr[i];
  arr[i] = swap;

  return i;
}

function quickSort(arr, l, h) {
  if (l < h) {
    let p = partition(arr, l, h);
    quickSort(arr, l, p-1);
    quickSort(arr, p + 1, h);
  }
}

function Display(arr, size) {
  for (let i = 0; i < size; ++i) {
    console.log(arr[i]);
  }
}

function sumCheck(arr, sum, size) {
  let i = 0;
  let j = size - 1;

  while (i < j) {
    if (arr[i] + arr[j] < sum) {
      ++i;
    } else if (arr[i] + arr[j] > sum) {
      --j;
    } else if (arr[i] + arr[j] === sum) {
      return true;
    }
  }

  return false;
}

let arr = [22, 1, 4, 3, 6, 76, 4];
let sum = 0;
let size = arr.length;

Display(arr, size);

quickSort(arr, 0, size - 1);
console.log('After sorting:');
Display(arr, size);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  let chunk;
  // Use a loop to make sure we read all available data.
  while ((chunk = process.stdin.read()) !== null) {
    let sum = parseFloat(chunk);
    let result = sumCheck(arr, sum, size);
    if (result) {
      console.log('Sum is there');
    } else {
      console.log('Sum is not there');
    }
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
