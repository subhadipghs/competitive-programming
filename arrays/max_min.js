"use strict";

const assert = require("assert");

// Input format:
// -------------
// number of test case 
// array length
// array elements 


let input = ''

process.stdin.resume()
  .on('data', d => {
    input += d;
  })
  .on('end', () => {
    const formatted = input.trim()
      .split("\n")
      .map(i => i.trim())

    main(formatted)
  })


function main(inputs) {
  let curr = 1, tc = parseInt(inputs[0], 10);
  while (tc > 0) {
    let i = 0
    while (i < 2 && curr < inputs.length - 1) {
      const length = inputs[curr++]
      const a = inputs[curr++].trim().split(" ").map(x => parseInt(x, 10))
      const res = getMaxMin(a, length)
      console.log(res)
      i++
    }
    tc--
  }
}



function getMaxMin(arr, n) {
  let max = Number.NEGATIVE_INFINITY,
    min = Number.POSITIVE_INFINITY;

  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [min, max];
}

const tc = [
  {
    inp: [1, 2, 3, 4, -24, 238],
    expect: [-24, 238],
  },
  {
    inp: [-4, 42, 4213, 8284, -24],
    expect: [-24, 8284],
  },
];


tc.forEach(c => assert.deepEqual(getMaxMin(c.inp, c.inp.length), c.expect))
console.log("OK")
