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

function sort012Dutch(arr, n) {
  let low = 0,
    mid = 0,
    high = n - 1;
  // we have three elements 0, 1, 2
  // we have a cursor check each elements
  // the idea is if we see 0 then we send it to the first 
  // if we see 1 then go to next
  // if we see 2 then we send it to the last portion of the array
  while (mid <= high) {
    if (arr[mid] == 0) {
      let temp = arr[mid];
      arr[mid] = arr[low];
      arr[low] = temp;
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      let temp = arr[mid];
      arr[mid] = arr[high];
      arr[high] = temp;
      high--;
    }
  }
  return arr;
}

//assert.deepEqual(inplaceSort012([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);
//assert.deepEqual(sort012([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);
//const tc = [1, 0, 1, 1, 2, 1, 2, 0, 0, 0, 2]
assert.deepEqual(sort012Dutch([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);
assert.deepEqual(inplaceSort012([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);
assert.deepEqual(sort012([0, 2, 1, 2, 0], 5), [0, 0, 1, 2, 2]);
const tc = [1, 0, 1, 1, 2, 1, 2, 0, 0, 0, 2];
assert.deepEqual(sort012Dutch(tc, tc.length), sort012(tc, tc.length));
console.log("✅ Test cases passed");
