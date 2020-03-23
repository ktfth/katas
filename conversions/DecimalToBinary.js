'use strict';
function decimalToBinary(num) {
  let bin = [];
  while (num > 0) {
    bin.unshift(num % 2);
    num >>= 1;
  }
  console.log('The decimal in binary is ' + bin.join(''));
  return bin.join('');
}

decimalToBinary(2);
decimalToBinary(7);
decimalToBinary(35);
