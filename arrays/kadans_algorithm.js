const { equal } = require("assert");

function findLargestNaive(a, N) {
  //let max = Number.NEGATIVE_INFINITY;
  // [
  //  [1],
  //  [1, 2],
  //  [1, 2, 3],
  //  [2]
  //  [3],
  //  [3, 1],
  //  [3, 1, 2]
  // ]
  let mx = Number.NEGATIVE_INFINITY;
  let sub = [];
  for (let i = 0; i < N; i++) {
    let temp = [];
    for (let j = i; j < N; j++) {
      temp.push(a[j]);
      if (total(temp) > mx) {
        mx = total(temp);
        // we found a new sub array containing the maximum sum
        // so we pop the last item and push the new sub array
        sub.pop();
        sub.push([...temp]);
      }
    }
  }
  return mx;
}

function kadanesAlgorithm(arr, N) {
  let max = Number.NEGATIVE_INFINITY, temp_max = 0;
  for (let i = 0; i < N; i++) {
    temp_max += arr[i];
    if (temp_max > max) {
      max = temp_max;
    }
    if (temp_max < 0) {
      temp_max = 0;
    }
  }
  return max;
}

const total = (arr) => arr.reduce((prev, curr) => prev + curr);

const tcs = [
  {
    name: "should find the largest sum",
    input: [[-2, -3, 4, -1, -2, 1, 5, -3], 8],
    exp: 7,
  },
];
function test(fn) {
  tcs.forEach((tc) => {
    console.log(`Running [${fn.name}]: ${tc.name}`);
    const res = fn(...tc.input);
    equal(res, tc.exp);
    console.log("✔ Passed: " + tc.name);
  });
}

test(findLargestNaive);
test(kadanesAlgorithm);
