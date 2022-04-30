
const assert = require('assert')

var findDuplicates = function(nums) {
  var map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const pr = map.get(nums[i]);
      map.set(nums[i], pr + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let [key, value] of map) {
    if (value > 1) {
      return key
    } 
  }
  return null
}


function test(tcs, sol) {
  tcs.forEach(tc => {
    const res = sol(tc.input)
    assert.equal(res, tc.output)
  })
  console.log('ALL PASSED')
}


const tcs = [
  {
    input: [1, 2, 3, 3, 5],
    output: 3
  },
  {
    input: [0, 9, 4, 2, 9],
    output: 9
  }
]


test(tcs, findDuplicates)
