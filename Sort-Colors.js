/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var start = 0;
  var end = nums.length - 1;
  var temp = null;
  var i = 0;
  while (i <= end) {
    if (nums[i] === 0) {
      temp = nums[i];
      nums[i] = nums[start];
      nums[start++] = temp;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      temp = nums[i];
      nums[i] = nums[end];
      nums[end--] = temp;
    }
  }
};
