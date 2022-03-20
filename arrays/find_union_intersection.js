"use strict";

const assert = require("assert");

function findUnion(a1, n, a2, m) {
  const map = new Map();
  const union = [];

  while (n-- > 0) {
    map.set(a1[n], 1) 
  }
  while(m-- > 0) {
    map.set(a2[m], 1)
  }
  map.forEach((_, k) => union.push(k))
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

tcs.forEach((tc) => {
  const res = findUnion(...tc.input);
  res.forEach(x => {
    const f = tc.expected.indexOf(x),
      l = tc.expected.lastIndexOf(x);
    assert.notEqual(f, -1)
    assert.notEqual(l, -1)
    assert.strictEqual(f, l);
  })
});

console.log('passed')
