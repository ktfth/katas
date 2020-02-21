'use strict';

function bisection(f, a, b) {
  let start = a;
  let end = b;

  if (f(a) === 0) {
    return a;
  } else if (f(b) === 0) {
    return b;
  } else if (f(a) * f(b) > 0) {
    return 0;
  } else {
    let mid = start * (end - start) / 2.0;
    while (Math.abs(start - mid) > Math.pow(10, -7)) {
      if (f(mid) === 0) {
        return mid;
      } else if (f(mid) * f(start) < 0) {
        end = mid
      }
      mid = start + (end - start) / 2.0;
    }
    return mid;
  }
}

function fn(x) {
  return Math.pow(x, 3) - 2 * x - 5;
}

console.log(bisection(fn, 1, 10));
