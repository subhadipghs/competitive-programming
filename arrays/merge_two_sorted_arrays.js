/*
 * Method 1:
 * Merge sort type merging
 *
 * we check each element from the both arrays then merge copy the smallest(for increasing order)
 * and merge it in the other element
 *
 * Time complexity: O(m + n)
 * Space complexity: O(m + n)
 */
var m1 = function (arr1, arr2, M, N) {
  var i = 0,
    j = 0,
    k = 0,
    merged = [];
  while (i < M && j < N) {
    if (arr1[i] < arr2[j]) {
      merged[k++] = arr1[i++];
    } else {
      merged[k++] = arr2[j++];
    }
  }
  while (i < M) {
    merged[k++] = arr1[i++];
  }
  while (j < N) {
    merged[k++] = arr2[j++];
  }
  return merged;
};

// Running tests
var tests = [
  {
    input: [[1, 5, 9, 10, 15, 20], [2, 3, 8, 13], 6, 4, []],
    output: "1 2 3 5 8 9 10 13 15 20".split(" ").map((x) => parseInt(x, 10)),
  },
  {
    input: [[5, 8, 9], [4, 7, 8], 3, 3, []],
    output: [4, 5, 7, 8, 8, 9],
  },
];

tests.forEach((t) => {
  var sol = m1(...t.input);
  console.dir({
    input: t.input,
    output: t.output,
    ans: sol,
  });
});
