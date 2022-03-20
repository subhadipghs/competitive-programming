const assert = require("assert");

function segregateElements(arr, n) {
  let pos = [],
    neg = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i]);
    } else {
      pos.push(arr[i]);
    }
  }
  arr = pos.concat(neg);
  return arr;
}

function segEl2(arr, n) {
  let low = 0,
    high = n - 1;
  while (low <= high) {
    if (arr[low] > 0) {
      low++;
    } else {
      const [neg] = arr.splice(low, 1);
      arr.push(neg);
      high--;
    }
  }
  return arr;
}

const t = [1, -1, 3, 2, -7, -5, 11, 6];
assert.deepEqual(
  segEl2(t, t.length),
  "1 3 2 11 6 -1 -7 -5".split(" ").map((x) => parseInt(x, 10))
);

console.time("one");
segregateElements(t, t.length),
  assert.deepEqual(
    segregateElements(t, t.length),
    "1 3 2 11 6 -1 -7 -5".split(" ").map((x) => parseInt(x, 10))
  );
console.timeEnd("one");
console.log("Passed");
