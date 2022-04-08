


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

  console.log(map)
}


