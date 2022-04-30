
const { deepEqual } = require('assert')


function rotateClockWise(arr = [], n = 0) {
  const v = arr.pop();
  arr.unshift(v)
  return arr;
}

function rotate(a, n) {
  let low = 0, high = n - 1;
  let curr = a[low];
  do {
    let next = a[(low + 1) % n];
    a[(low + 1) % n] = curr;
    low++;
    curr = next;
  } while(low <= high);
  return a;
}
  /*
function swap(arr, i, j) {
  arr[i] == arr[i] ^ arr[j];
  arr[i] == arr[i] ^ arr[j];
arr[j] == arr[i] ^ arr[j];
}
*/

const tcs = [
  {
    name: 'should rotate the array by 1 element',
    input: [[1, 2, 3, 4, 5], 5],
    exp: [5, 1, 2, 3, 4]
  }
]

function test(fn) {
  tcs.forEach(tc => {
    console.log("Running: " + tc.name);
    const res = fn(...tc.input);
    deepEqual(res, tc.exp);
    console.log("✔ Passed: " + tc.name);
  })
}

test(rotate)
test(rotateClockWise)
