
const { deepEqual } = require('assert')

function rotate(arr, n) {
  let low = 0, high = n - 1;
  let curr = arr[low];
  do {
    let next = arr[(low + 1)%n];
    arr[(low+1)%n] = curr;
    curr = next;
    low++;
  } while(low <= high);
  return arr
}


function rotateKthTime(arr, n, k) {
  do {
    arr = rotate(arr, n);
    k--;
  } while(k > 0);
  return arr;
}


const tcs = [
  {
    name: 'should rotate the array by 1 element',
    input: [[1, 2, 3, 4, 5], 5, 1],
    exp: [5, 1, 2, 3, 4]
  },
  {
    name: 'should rotate the array by 2 element',
    input: [[1, 2, 3, 4, 5], 5, 2],
    exp: [4, 5, 1, 2, 3]
  }
]

function test(fn) {
  tcs.forEach(tc => {
    console.log("Running: " + tc.name);
    const res = fn(...tc.input);
    console.log(`Output[${tc.name}]: ` + res)
    deepEqual(res, tc.exp);
    console.log("✔ Passed: " + tc.name);
  })
}

test(rotateKthTime)
