'use strict';

function arrangeNum(arr) {
  let i = 0;
  let j = arr.length;
  let t = 0;

  while (i < j) {
    if (arr[i] % 2 != 0) {
      t = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
      j -= 1;
    } else {
      ++i;
    }
  }
}

function disp(arr) {
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }
}

let arr = [12, 31, 1, 4, 2387, 23, 4, 1, 23, 2];

arrangeNum(arr);
disp(arr);
