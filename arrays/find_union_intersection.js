"use strict";

const assert = require("assert");

function findUnion(a, n, b, m) {
  console.time('map')
  const map = new Map();
  const union = [];
  while (n-- > 0) {
    map.set(a[n], 1);
  }
  while (m-- > 0) {
    map.set(b[m], 1);
  }
  map.forEach((_, k) => union.push(k));
  console.timeLog('map')
  return union;
}

function findUnionUsingSet(a, n, b, m) {
  console.time('set')
  const union = new Set();
  while (n-- > 0) {
    union.add(a[n]);
  }
  while (m-- > 0) {
    union.add(b[m]);
  }
  const toArray = Array.from(union)
  console.timeLog('set')
  return toArray;
}

function findUnionNaive(a, n, b, m) {
  console.time('naive')
  const c = a.concat(b);
  const union = [] 
  for (let i = 0; i < c.length; i++) {
    const firstIdx = c.indexOf(c[i]);
    const lastIdx = c.lastIndexOf(c[i]);
    if (firstIdx === lastIdx) {
      union.push(c[i])
    } else if (union.indexOf(c[i]) == -1) {
      union.push(c[i])
    } 
  }
  console.timeLog('naive')
  return union;
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
];

function runTest(fn) {
  tcs.forEach((tc) => {
    let res = fn(...tc.input);
    tc.expected.forEach((x) => {
      const f = res.indexOf(x),
        l = res.lastIndexOf(x);
      assert.notEqual(f, -1);
      assert.notEqual(l, -1);
      assert.strictEqual(f, l);
    });
  });
}

runTest(findUnion);
runTest(findUnionUsingSet);
runTest(findUnionNaive);

console.log("passed");
