/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (a, len, arr = [], max = a.length) {
  while (max > 1) {
    flip(a.indexOf(max));
    max--;
  }
  function flip(indx) {
    if (indx) {
      for (let q = 0; q < indx / 2; q++) {
        [([a[q], a[indx - q]] = [a[indx - q], a[q]])];
      }
      arr.push(indx + 1);
    }
    len = max - 1;
    for (let q = 0; q < len / 2; q++) {
      [([a[q], a[len - q]] = [a[len - q], a[q]])];
    }
    arr.push(max);
  }
  return arr;
};
