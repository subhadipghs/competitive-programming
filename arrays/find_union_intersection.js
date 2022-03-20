"use strict";

const assert = require("assert");

function findUnion(a, n, b, m) {
  const map = new Map();
  const union = [];
  while (n-- > 0) {
    map.set(a[n], 1);
  }
  while (m-- > 0) {
    map.set(b[m], 1);
  }
  map.forEach((_, k) => union.push(k));
  return union;
}

function findUnionUsingSet(a, n, b, m) {
  const union = new Set();
  while (n-- > 0) {
    union.add(a[n]);
  }
  while (m-- > 0) {
    union.add(b[m]);
  }
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
    const res = fn(...tc.input);
  tcs.forEach((tc) => {
    res.forEach((x) => {
      const f = tc.expected.indexOf(x),
        l = tc.expected.lastIndexOf(x);
      assert.notEqual(f, -1);
      assert.notEqual(l, -1);
      assert.strictEqual(f, l);
    });
  });
}

runTest(findUnion);
runTest(findUnionUsingSet);


console.log("passed");
