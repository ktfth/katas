'use strict';

function checkMoves(arr) {
  let furthest = 0;
  let goal = arr.length - 1;

  for (let i = 0; i < goal; i += 1) {
    if (furthest >= goal) {
      return true;
    } if (furthest === i) {
        if (arr[i] === 0) {
          return false;
        }
        furthest += arr[i];
    } else {
      if (arr[i] + i > furthest) {
        furthest = arr[i] + i;
      }
    }
  }

  if (furthest >= goal) {
    return true;
  } else {
    return false;
  }
}

console.log(checkMoves([3,3,1,0,2,0,1]));
