/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var targetIndices = function (nums, target) {
  let ansArr = [];

  function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
      let index = i;
      while (index > 0 && nums[index] < nums[index - 1]) {
        swap(nums, index, index - 1);
        index--;
      }
    }
  }

  function swap(arr, first, second) {
    let tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
  }

  insertionSort(nums);

  for (let i = 0; i < nums.length; i++) if (nums[i] === target) ansArr.push(i);

  return ansArr;
};
