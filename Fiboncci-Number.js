/**
 * @param {number} n
 * @return {number}
 */

var fib = function (N) {
  let memo = new Array(N + 1);
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= N; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[N];
};
