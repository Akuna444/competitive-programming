/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  var n = position.length;
  var cars = [];
  for (var i = 0; i < n; i++) {
    cars.push([position[i], speed[i]]);
  }
  cars.sort((a, b) => a[0] - b[0]);
  var lastCar = cars[n - 1];
  var cnt = n;
  for (var i = n - 2; i >= 0; i--) {
    var t1 = (target - cars[i][0]) / cars[i][1];
    var t2 = (target - lastCar[0]) / lastCar[1];
    if (t1 <= t2) {
      // collide
      cnt--;
    } else {
      // not collide, then cur car will be the last car
      lastCar = [...cars[i]];
    }
  }
  return cnt;
};
