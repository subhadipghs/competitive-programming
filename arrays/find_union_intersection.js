"use strict";

const assert = require("assert");

function findUnion(a, n, b, m) {
  console.time("map");
  const map = new Map();
  const union = [];
  while (n-- > 0) {
    map.set(a[n], 1);
  }
  while (m-- > 0) {
    map.set(b[m], 1);
  }
  map.forEach((_, k) => union.push(k));
  console.timeEnd("map");
  return union;
}

function findUnionUsingSet(a, n, b, m) {
  console.time("set");
  const union = new Set();
  while (n-- > 0) {
    union.add(a[n]);
  }
  while (m-- > 0) {
    union.add(b[m]);
  }
  const toArray = Array.from(union);
  console.timeEnd("set");
  return toArray;
}

function findUnionNaive(a, n, b, m) {
  console.time("naive");
  const c = a.concat(b);
  const union = [];
  for (let i = 0; i < c.length; i++) {
    const firstIdx = c.indexOf(c[i]);
    const lastIdx = c.lastIndexOf(c[i]);
    if (firstIdx === lastIdx) {
      union.push(c[i]);
    } else if (union.indexOf(c[i]) == -1) {
      union.push(c[i]);
    }
  }
  console.timeEnd("naive");
  return union;
}


function findUsingSort(a, n, b, m) {
  console.time('sorting and search');
  const [union, big] = n >= m ? [b, a] : [a, b];
  union.sort((a, b) => a - b);
  for (let i = 0; i < big.length; i++) {
    const index = binarySearch(union, union.length, big[i]);
    if (index === -1) {
      union.push(big[i])
    }
  }
  console.log(union);
  console.timeEnd('sorting and search');
  return union;
}

function binarySearch(a, m, key) {
  let low = 0, high = m; 
  while (low <= high) {
    let mid = Math.ceil((low + high)/2);
    if (a[mid] == key) {
      return mid;
    } else if (a[mid] > key) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

const tcs = [
  {
    input: [
      "85 25 1 32 54 6".split(" ").map((x) => parseInt(x, 10)),
      6,
      "85 2".split(" ").map((x) => parseInt(x)),
      2,
    ],
    expected: [85, 25, 1, 32, 54, 6, 2],
  },
  {
    input: [
      [
        1, 2, 5, 6, 2, 3, 5
      ], 
      7,
      [
        2, 4, 5, 6, 8, 9, 4, 6, 5
      ], 
      9 
    ],
    expected: '1 2 3 4 5 6 8 9'.split(" ").map(x => parseInt(x, 10))
  },
];


function runTest(fn) {
  tcs.forEach((tc) => {
    let res = fn(...tc.input);
    if (tc.expected.length > 0) {
      tc.expected.forEach((x) => {
        const f = res.indexOf(x),
          l = res.lastIndexOf(x);
        assert.notEqual(f, -1);
        assert.notEqual(l, -1);
        assert.strictEqual(f, l);
      });
    }
  });
}

runTest(findUnion);
runTest(findUnionUsingSet);
runTest(findUsingSort);
//runTest(findUnionNaive);

console.log("passed");
