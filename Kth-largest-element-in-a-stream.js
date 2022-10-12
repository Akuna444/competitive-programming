/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.arr = nums.sort((a, b) => b - a);
  this.arr.length = this.arr.length > k ? k : this.arr.length;
};

KthLargest.prototype.add = function (val) {
  const insert = () => {
    if (this.arr[this.arr.length - 1] < val || this.arr.length < this.k) {
      this.arr.push(val);
      this.arr = this.arr.sort((a, b) => b - a);
      this.arr.length = this.arr.length > this.k ? this.k : this.arr.length;
    }
  };
  insert();
  return this.arr[this.arr.length - 1];
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
