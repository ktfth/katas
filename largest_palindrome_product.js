'use strict';

const assert = require('assert');

function isPalindrome(n) {
  return n.toString() === n.toString().split('').reverse().join('');
}
assert.ok(isPalindrome(1001));

let expectation = [];

for (let i = 1; i <= 101; i += 1) {
  if (isPalindrome(i)) {
    expectation.push(i);
  }
}

function palindrome(n) {
  let out = [];
  for (let i = 1; i <= n; i += 1) {
    if (isPalindrome(i)) {
      out.push(i);
    }
  }
  return out;
}
assert.deepEqual(palindrome(101), expectation);

expectation = [];

for (let i = 100; i <= 999; i += 1) {
  for (let j = 100; j <= 999; j += 1) {
    if (isPalindrome(i * j)) {
      expectation.push(i * j);
    }
  }
}

console.log(expectation.sort().reverse()[0]);
