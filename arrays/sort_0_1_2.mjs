"use strict";

import assert from "assert";

function sort012(arr, n) {
  const map = new Map();
  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      let val = map.get(arr[i]);
      map.set(arr[i], val + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  const sorted = [];
  [0, 1, 2].forEach((x) => {
    const i = map.get(x);
    sorted.push(...Array.from({ length: i }, () => x));
  });
  return sorted;
}

const inplaceSort012 = (arr, n) => {
  let c0 = 0,
    c1 = 0,
    c2 = 0;
  for (let i = 0; i < n; i++) {
    switch (arr[i]) {
      case 0: {
        c0++;
        break;
      }
      case 1: {
        c1++;
        break;
      }
      case 2: {
        c2++;
        break;
      }
    }
  }
  for (let i = 0; i < c0; i++) {
    arr[i] = 0;
  }
  for (let i = c0; i < c0 + c1; i++) {
    arr[i] = 1;
  }
  for (let i = c0 + c1; i < c1 + c2 + c0; i++) {
    arr[i] = 2;
  }
  return arr;
};

assert.deepEqual(inplaceSort012([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);

console.log("✅ Test cases passed");
