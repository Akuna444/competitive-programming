/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const count = new Array(n + 1).fill(0);

  for (const [start, end, seats] of bookings) {
    count[start] += seats;
    count[end + 1] -= seats;
  }

  const res = [];
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += count[i];
    res.push(sum);
  }

  return res;
};
