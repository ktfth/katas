'use strict';

const assert = require('assert');

function countDivisors(n) {
  let nDivisors = 0;
  for (let i = 1; i < parseInt(Math.sqrt(n), 10) + 1; i += 1) {
    if (n % i === 0) {
      nDivisors += 2;
    }
  }
  if (Math.pow(n, 0.5) === parseInt(Math.pow(n, 0.5))) {
    nDivisors -= 1;
  }
  return nDivisors;
}

function solution() {
  let tNum = 1;
  let i = 1;

  while (true) {
    i += 1;
    tNum += 1;

    if (countDivisors(tNum) > 500) {
      break;
    }
  }

  return tNum;
}
assert.equal(solution(), 76576500);
