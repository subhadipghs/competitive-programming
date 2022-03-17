"use strict";

// A binary heap is binary tree with all levels are complete except possibly
// the last level and last level has keys all keys as left as possible
//
//
// There are two types of binary heap
// 1. Min heap, 2. Max heap
// Min heap is a heap where the root node must be smallest among all of the elements
// Max heap is a heap where the root node must be the largest among all of the elements
//
//
//
// Representation:
//
// Array based representation:
//    the root element will be at 0th index and it should be stored in such way that we can access
//    the elements using the following index rules
//
//    1. Parent of any node ->      i/2 where i is the index of the current node
//    2. Left node of any node ->   2*i
//    3. Right node of any node ->  2*i + 1
//
// Application:
//    1. Heap sort
//    2. Priority Queue
//    3. Graph algorithms: Dijkstra's algorithm, Prims algorithm
//    4. K'th largest smallest
//    5. Merge K sorted arrays
//
// Operations:
//    1. insert(): insert a key into the heap O(logN)
//    2. remove(): remove root from the heap
//    3. heapify(): rearranges the heap to maintain the heap propertyy
//    4. extractMax(): return root and delete from the heap
//    5. isEmpty(): true if a heap is empty
//    6. size(): return the size of the heap
//    7. getMax()/getMin(): return the maximum/minimum of the heap
//

class Heap {
  // 0, 1, 2, 3, 4, 5, 6
  // inserting arr[7] = 60
  //         50
  //       /    \
  //      30     20
  //     /  \   /  \
  //   13    5 10   4
  //  /
  // 60
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  min(parent, curr) {
    return parent > curr;
  }

  max(parent, curr) {
    return parent < curr;
  }

  /**
   * Insert in a heap.
   * The strategy to store a new eleemnt in the heap is add to the end of the array and re adjust the element to
   * keep the max heap/min heap spec.
   *
   * Readjusting:
   *    Inserting happens in a bottom up approach. When an element is added, it compares with the parent element if the element is
   *    greater(for max heap)/smaller(for min heap) we swap those to elements. It continues till we hit the root element
   *
   * @param {number} key - is the element to be inserted
   * @param {number} the index of the key where inserted
   */
  insert(key) {
    this.heap.push(key);
    this.length++;
    let index = this.size() - 1;
    let parent = this.getParent(index);
    while (index != 0) {
      // swap the two elements
      if (this.max(this.heap[parent], this.heap[index])) {
        this.swap(parent, index);
        index = parent; // update the element index
        parent = this.getParent(index);
      } else {
        break;
      }
    }
    return index;
  }

  remove() {
    if (this.size() <= 0) {
      return null;
    }
    const last = this.size() - 1;
    this.heap[0] = this.heap[last];
    this.heap = this.heap.filter((_, i) => i !== last);
    this.length--;
    this.heapify(0);
  }

  swap(i, j) {
    if (i < 0 || i >= this.size() || j < 0 || j >= this.size()) {
      let problem = ["Unexpected index found", "i - " + i, "j - " + j].join(
        ". "
      );
      throw new Error(problem);
    }
    this.heap[i] = this.heap[i] ^ this.heap[j];
    this.heap[j] = this.heap[i] ^ this.heap[j];
    this.heap[i] = this.heap[i] ^ this.heap[j];
  }

  isOutboundIndex(i) {
    return i < 0 || i >= this.size();
  }

  heapify(i) {
    // heapify is top down approach
    // we consider the subtree is a maintaining the max-heap/min-heap property
    // always heapify starts from the root element
    let left = this.getLeft(i);
    let right = this.getRight(i);
    let indexOfMax = this.heap[left] > this.heap[right] ? left : right;
    while (indexOfMax != i) {
      this.swap(i, indexOfMax); // swap with root element whichever child element is greater the root
      i = indexOfMax;
      left = this.getLeft(i);
      right = this.getRight(i);
      if (this.isOutboundIndex(left) || this.isOutboundIndex(right)) {
        break;
      }
      indexOfMax = this.heap[left] > this.heap[right] ? left : right;
    }
  }

  heapifyRec(i) {
    let left = this.getLeft(i);
    let right = this.getRight(i);
    let indexOfMax = i;

    if (!this.isOutboundIndex(left) && this.heap[left] > this.heap[right]) {
      indexOfMax = left;
    }

    if (!this.isOutboundIndex(right) && this.heap[right] > this.heap[left]) {
      indexOfMax = right;
    }

    if (indexOfMax != i) {
      this.swap(i, indexOfMax);
      return this.heapifyRec(indexOfMax);
    }
  }

  getParent(i) {
    return Math.floor(i / 2);
  }

  getLeft(i) {
    return 2 * i + 1;
  }

  getRight(i) {
    return 2 * i + 2;
  }

  size() {
    return this.length;
  }

  getHeap() {
    return this.heap;
  }
}

const heap = new Heap();
// const [_, __, ...test] = process.argv;
[30, 20, 10, 13, 6, 50, 80].map((x) => parseInt(x, 10)).forEach((x) => heap.insert(x));
console.log(heap.getHeap());
let r = 3;

while (r-- > 0) {
  heap.remove();
  console.log(heap.getHeap())
}
