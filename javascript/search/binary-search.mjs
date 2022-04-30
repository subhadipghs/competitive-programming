import { equal } from 'assert';

function binarySearch(a, m, key) {
  let low = 0;
  let high = m;
  while (low <= high) {
    let mid = Math.ceil((low + high)/2);
    if (a[mid] == key) {
      return mid;
    } else if (key > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

function* range(low, high) {
  while(low <= high) {
    yield low++;
  }
}

const tcs = [
  {
    name: 'first',
    ip: [
      [...range(1, 5)],
      5,
      3
    ],
    exp: 2
  },
  {
    name: 'second',
    ip: [
      [...range(1, 1000)],
      1000,
      Math.floor(Math.random()*1000)
    ],
  },
  {
    name: 'third',
    ip: [
      [...range(1, 1e4)],
      1e4,
      Math.floor(Math.random()*1e4)
    ],
  }
]

function test(tcs, fn) {
  tcs.forEach(tc => {
    console.time(tc.name)
    const res = fn(...tc.ip)
    console.timeLog(tc.name)
    if (tc.exp) {
      equal(res, tc.exp);
    }
  })
}

test(tcs, binarySearch);
