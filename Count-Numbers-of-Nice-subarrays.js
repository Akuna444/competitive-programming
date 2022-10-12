/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  // similar to Question https://leetcode.com/problems/subarray-sum-equals-k/
  let map = new Map();
  map.set(0, 1);
  let sum = 0;
  let counter = 0;
  let len = nums.length;
  for (let g = 0; g < len; g++) {
    let curNumModified = nums[g] % 2 == 0 ? 0 : 1;
    sum = sum + curNumModified;
    if (map.has(sum - k)) counter = map.get(sum - k) + counter;
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  return counter;
};
