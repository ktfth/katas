'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');

let gridFile = fs.readFileSync(path.resolve(process.cwd(), 'largest_product_in_a_grid', 'grid.txt'));
let grid = gridFile.toString().split('\n').map(v => v.split(" ").map(r => parseInt(r, 10)));

assert.ok(grid.length > 0);
assert.ok(grid[0].length > 0);

function largestProduct(grid) {
  let nColumns = grid[0].length;
  let nRows = grid.length;

  let largest = 0;
  let lrDiagProduct = 0;
  let rlDiagProduct = 0;

  for (let i = 0; i < nColumns; i += 1) {
    for (let j = 0; j < nRows; j += 1) {
      let vertProduct = 0;
      let horzProduct = 0;

      if (grid[j] !== undefined && (grid[j + 1] !== undefined && (grid[j + 2] !== undefined && (grid[j + 3] !== undefined)))) {
        vertProduct = grid[j][i] * grid[j + 1][i] * grid[j + 2][i] * grid[j + 3][i];
        horzProduct = grid[i][j] * grid[i][j + 1] * grid[i][j + 2] * grid[i][j + 3];
      }

      if (i < nColumns - 3) {
        lrDiagProduct = (
          grid[i][j] *
          grid[i + 1][j + 1] *
          grid[i + 2][j + 2] *
          grid[i + 3][j + 3]
        )
      } if (i > 2) {
        rlDiagProduct = (
          grid[i][j] *
          grid[i - 1][j + 1] *
          grid[i - 2][j + 2] *
          grid[i - 3][j + 3]
        )
      }

      let maxProduct = Math.max(vertProduct, horzProduct, lrDiagProduct, rlDiagProduct);

      if (maxProduct > largest) {
        largest = maxProduct;
      }
    }
  }

  return largest;
}

assert.equal(largestProduct(grid), 70600674);
