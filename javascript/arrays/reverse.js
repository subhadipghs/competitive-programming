"use strict"

const assert = require('assert')


function reverse1(a) {
  const res = []
  for (let i = a.length - 1; i >= 0; i--) {
    res.push(a[i]) 
  }
  return res
}

function reverse2(a) {
  let j = a.length - 1
  for (let i = 0; i < (a.length/2); i++) {
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
    j++
  }
  return a
}

/**
 * Always giving maximum call stack error
 *
function reverseRec(a, start, end) {
  if (start >= end) return;
  let temp = a[start]
  a[start] = a[end]
  a[end] = temp
  return reverseRec(a, start + 1, end - 1)
}
*/


const t = [1, 2, 3, 4],
  t2 = [1, 2, -3, 4, -5];

const tc = [t, t2]

const fns = [reverse1, reverse2]


tc.forEach(c => {
  fns.forEach(f => {
    assert.deepEqual(f.call(this, c), c.reverse())
  })
})



console.log("OK")
