/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  let stack = [];
  let result = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let temp = stack.pop();
      result[temp] = i - temp;
    }
    stack.push(i);
  }
  return result;
};
