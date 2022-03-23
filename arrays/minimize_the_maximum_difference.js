
const { equal } = require('assert');

function minimizeDiff(a = [], n = 0, k = 0) {
  // we have to minimize the difference between the minimum and maximum elements
  // we can solve this problem by greedy
  // first we sort the array
  // so now the maximum diff is difference between the first and last element in that array
  // 1. we can only minimize the difference if we increase the minimum and decrease the maximum
  // 2. so we have to consider that we can increase the smaller elements in the sorted array and decrease 
  //    the larger elements in the array
  // 3 a------------x----y------------b  (before modification)
  //   
  //   max = b
  //   min = a
  //   diff = |b - a|
  //   
  //   after modifying
  //   a+k ........x+k   y-k .........b-k (after modification)
  //   
  //   max = x+k
  //   min = y-k
  //   so we check that the current minimum is less that previous minimum i.e. min = Math.min(a + k, y - k)
  //   or the current maximum is greater that previous maximum i.e. max = Math.max(b - k, x + k)
  //   
  //   so the current diff = max - min;
  //   and if we get the current difference less that the previous difference then we modify the latest minimum difference

  a.sort((x, y) => x - y); // sort the array
  let min = a[0], max = a[n - 1];
  let diff = max - min;

  for (let i = 1; i < n; i++) {
    min = Math.min(a[0] + k, a[i] - k);
    max = Math.max(a[n - 1] - k, a[i - 1] + k);
    if (min > 0) {
      diff = Math.min(diff, Math.abs(max - min));
    }
  }
  return diff;
}


function test(tcs, fn) {
  tcs.forEach(tc => {
    const res =  fn(...tc.input);
    equal(res, tc.exp);
  })
  console.log("Passed");
}

const tcs = [
  {
    input: [[1, 5, 8, 10], 4, 2],
    exp: 5
  },
  {
    input: [[3, 9, 12, 16, 20], 5, 3],
    exp: 11
  },
  {
    input: [[1, 15, 10], 3, 6],
    exp: 5
  },
  {
    input: [[1, 5, 15, 10], 4, 3],
    exp: 8
  },
  {
    input: [[6, 10], 2, 3],
    exp: 2
  },
  {
    input: [[1, 10, 14, 14, 14, 15], 6, 6],
    exp: 5
  }
]

const tcs2 = [
  {
    input: [[ 7, 4, 8, 8, 8, 9], 6, 6],
    exp: 5
  }
]

test(tcs, minimizeDiff)
test(tcs2, minimizeDiff)
