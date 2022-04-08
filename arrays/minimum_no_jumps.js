const { equal } = require("assert");

function minJumps(arr, n) {
  let i = 0;
  let count = 1;
  while (i < n) {
    if ((i + arr[i]) >= n - 1) {
      break;
    } else {
      i += arr[i]; 
    }
    count++; 
  }
  return count;
}

function test(tcs, fn) {
  tcs.forEach((tc, i) => {
    try {
      console.log(`Running Test: ${i + 1}...`);
      const res = fn(...tc.input);
      equal(res, tc.exp);
      console.log(`Passed Test: ${i + 1} ✔`);
    } catch (e) {
      console.log(`Failed ${i + 1} test`);
      console.error(e);
    }
  });
}

const testCase1 = [
  {
    exp: 3,
    input: [[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9], 11],
  },
  {
    input: [[1, 4, 3, 2, 6, 7], 6],
    exp: 2,
  },
];

test(testCase1, minJumps);
