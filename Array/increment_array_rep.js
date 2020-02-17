'use strict';

class T {}

function disp(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

function incrementNum(arr) {
  let carry = 1;
  let digit = 0;
  let new_num = [];
  let rit = [];

  for (rit = arr.reverse()[0]; rit != arr[0]; rit += 1) {
    digit = rit + carry;
    carry = digit / 10;
    rit = digit % 10;
  }

  if (carry != 0) {
    new_num.push(carry);
  }

  let it = [];
  for (it = arr[0]; it != arr[arr.length - 1]; it += 1) {
    new_num.push(it);
  }

  return new_num;
}

let arr = [1, 2, 9];
arr = incrementNum(arr);
disp(arr);
