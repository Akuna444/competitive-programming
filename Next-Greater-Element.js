/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      // find the next greater element's index
      while (nums[++found] < n);
      // -1 if not found
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};
