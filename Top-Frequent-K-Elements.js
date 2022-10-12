/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
  }
  let ar = [];
  for (let key in obj) {
    if (ar[obj[key]]) {
      ar[obj[key]].push(Number(key));
    } else {
      ar[obj[key]] = [Number(key)];
    }
  }
  let result = [];
  for (let i = ar.length - 1; i > 0; i--) {
    let res = ar[i];
    if (res) {
      for (let j = 0; j < res.length; j++) {
        result.push(res[j]);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
};
