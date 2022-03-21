
const { deepEqual } = require('assert')


function rotateClockWise(arr = [], n = 0) {
  const v = arr.pop();
  arr.unshift(v)
  return arr;
}


const tcs = [
  {
    input: [[1, 2, 3, 4, 5], 5],
    exp: [5, 1, 2, 3, 4]
  }
]

function test(fn) {
  tcs.forEach(tc => {
    const res = fn(...tc.input);
    deepEqual(res, tc.exp);
  })
}

test(rotateClockWise)
