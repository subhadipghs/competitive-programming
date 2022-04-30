"use strict";

/**
 * Input format
 *
 * 1
 * 5 2
 * 82 -4 58 482 84
 *
 */

const assert = require('assert');

function main(inputs) {
  let cursor = 0;
  let tc = parseInt(inputs[cursor++], 10);
  while (tc-- > 0) {
    let i = 0,
      next = 2;
    while (i++ < next && cursor < inputs.length - 1) {
      const [n, k] = inputs[cursor++].split(" ").map((x) => parseInt(x, 10));
      const a = inputs[cursor++].split(" ").map((x) => parseInt(x, 10));
      const ans = kthMax(a, 0, n - 1, k);
      console.log(ans);
    }
  }
}

function takeInput() {
  let input = "";

  process.stdin
    .resume()
    .on("data", (d) => (input += d))
    .on("end", () => {
      const formatted = input
        .trim()
        .split("\n")
        .map((x) => x.trim());
      main(formatted);
    })
    .on("error", (e) => console.log(e));

  return input;
}

/**
 * Find the kth maximum element
 *
 * @param {number[]} a - is the array
 * @param {number} l - is the leftmost index (default = 0)
 * @param {number} r - is the rightmost index (default = a.length - 1)
 * @param {number} k - kth max element
 * @returns {number} the kth maximum element
 */
function kthMax(a, k) {
  const heap = [];
  a.forEach((e) => buildHeap(heap, e));

  let ans;
  while (k-- > 0) {
    ans = extractMax(heap);
  }
  return ans;
}

// Build a max heap
const buildHeap = (heap, key) => {
  heap.push(key);
  let curr = heap.length - 1;
  while (curr != 0) {
    const parent = Math.floor(curr / 2);
    if (heap[curr] > heap[parent]) {
      swap(heap, curr, parent);
      curr = parent;
    } else {
      break;
    }
  }
  return heap;
};

const swap = (heap, i, j) => {
  heap[i] = heap[i] ^ heap[j];
  heap[j] = heap[i] ^ heap[j];
  heap[i] = heap[i] ^ heap[j];
};

// extract the maximum element
// hoping that the passed array should be a heap already
const extractMax = (heap) => {
  if (heap.length <= 0) {
    return;
  }
  const max = heap[0];
  const last = heap.length - 1;
  heap[0] = heap[last];
  heap.pop();
  // readjust the heap
  heapifyIter(heap, 0);
  return max;
};

// recursive method to heapify
const heapify = (heap, i) => {
  // always compare with the left and right child and 
  // swap the larger one with the current node value
  // as we assume every thing is maintaining the max-heap property
  let left = 2 * i + 1,
    right = 2 * i + 2;
  let max;
  if (left < heap.length && heap[left] > heap[right]) {
    max = left;
  }
  if (right < heap.length && heap[right] > heap[left]) {
    max = right;
  }
  if (max != i) {
    swap(heap, max, i);
    return heapify(heap, max);
  }
};

const heapifyIter = (heap, i) => {
  let max, right, left;
  do {
    right = 2 * i + 2;
    left = 2 * i + 1;
    max = heap[left] > heap[right] ? left : right;
    swap(heap, max, i);
    i = max;
    if (left >= heap.length || right >= heap.length) {
      break;
    }
    max = null;
  } while (max != i);
};

console.time('1')
assert.equal(kthMax([20, 10, 4, -4, 48, 85], 3), 20)
assert.equal(kthMax([30, 50, 10, 8430, 1123, 4838, 48838, 920, 843, 29], 5), 920)
console.timeEnd('1')