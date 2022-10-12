/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

var kClosest = function (points, K) {
  return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
};

// we don't need to find square root of c here
// squared length is enough to determine order
var getLength = function ([a, b]) {
  return a * a + b * b;
};
