'use strict';

class T {}

function disp(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}

function incrementNum(arr) {
  let carry = 0;
  let digit = 0;

  let rit = [];

  arr[arr.length - 1] += 1;
  carry = arr[arr.length - 1] / 10;
  arr[arr.length - 1] %= 10;

  rit = arr.reverse()[0];
  rit++;

  for (; rit != arr[0]; rit += 1) {
    rit = rit + carry;
    carry = rit / 10;
    rit = rit % 10;
  }

  if (carry != 0) {
    arr.push(arr[0], carry);
  }

  return arr;
}

let arr = [1, 2, 9];

arr = incrementNum(arr);
disp(arr);
