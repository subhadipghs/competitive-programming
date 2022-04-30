
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
      const ans = kthMin(a, 0, n - 1, k);
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
 * Find the kth minimum element
 *
 * @param {number[]} a - is the array
 * @param {number} l - is the leftmost index (default = 0)
 * @param {number} r - is the rightmost index (default = a.length - 1)
 * @param {number} k - kth min element
 * @returns {number} the kth minimum element
 */
function kthMin(a, k) {
  let heap = [];
  a.forEach((e) => buildHeap(heap, e));
  let ans, i = 0;
  while (k-- > 0) {
    ans = extractMin(heap);
  }
  return ans;
}


// Build a min heap
const buildHeap = (heap, key) => {
  heap.push(key);
  let curr = heap.length - 1;
  let parent = Math.floor(((curr - 1) / 2));
  while (curr != 0 && heap[curr] < heap[parent]) {
    swap(heap, curr, parent);
    curr = parent;
    parent = Math.floor(((curr - 1) / 2))
  }
  return heap;
};

const swap = (heap, i, j) => {
  if (i < 0 || i >= heap.length || j < 0 || j >= heap.length) {
    throw new Error('oops!');
  }
  heap[i] = heap[i] ^ heap[j];
  heap[j] = heap[i] ^ heap[j];
  heap[i] = heap[i] ^ heap[j];
};

// extract the minimum element
// hoping that the passed array should be a heap already
const extractMin = (heap) => {
  if (heap.length <= 0) {
    return;
  }
  if (heap.length === 1) {
    return heap[0];
  }

  const min = heap[0];
  const last = heap.length - 1;
  heap[0] = heap[last];
  heap.pop();
  // readjust the heap 
  heapifyIter(heap, 0);
  console.log('min', min);
  console.log('heap', heap);
  return min;
};

// recursive method to heapify
const heapify = (heap, i) => {
  // always compare with the left and right child and 
  // swap the larger one with the current node value
  // as we assume every thing is maintaining the min-heap property
  let left = 2 * i + 1,
    right = 2 * i + 2;
  let min = i;
  // there are two conditions
  // 1. left and right index is not outbound 
  // 2. one of them is outbound
  if (left < heap.length && right < heap.length) {
    min = heap[left] < heap[right] ? left : right;
  } else {
    if (left < heap.length && heap[left] < heap[min]) {
      min = left;
    }
    if (right < heap.length && heap[right] < heap[min]) {
      min = right;
    }
  }
  if (min !== i && heap[min] < heap[i]) {
    swap(heap, i, min);
    return heapify(heap, min);
  }
};

const heapifyIter = (heap, i) => {
  let min = i;
  let right = 2 * i + 2, left = 2 * i + 1;
  do {
    if (left < heap.length && right < heap.length) {
      min = heap[left] < heap[right] ? left : right;
    } else {
      if (left < heap.length && heap[left] < heap[i]) {
        min = left;
      }
      if (left < heap.length && heap[right] < heap[i]) {
        min = right;
      }
    }
    if (min === i) {
      break;
    }
    swap(heap, min, i);
    i = min;
  } while (min != i)
};

const heapSort = (arr, n) => {
  const heap = [];
  arr.map(x => buildHeap(heap, x));
  console.log('heap', heap);
  // for the rest
  const sorted = []
  for (let i = 0; i < n; i++) {
    const min = extractMin(heap);
    sorted.push(min);
  }
  return sorted;
}

const c = [
  '7 10 4 3 20 15'.split(" ").map(x => parseInt(x, 10))
]
console.log('c', c[0])
const r = heapSort(c[0], c[0].length);
console.log(r)
