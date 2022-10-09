/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let res = "";
  let k = 1,
    i = 0;
  while (i < s.length) {
    if (Number.isInteger(+s[i])) {
      let len = 1;
      while (Number.isInteger(+s[i + len])) len++;
      k = parseInt(s.substr(i, len));
      i += len;
    } else if (s[i] === "[") {
      let paren = 1;
      let j = i + 1;
      while (paren) {
        paren += (s[j] === "[") - (s[j] === "]");
        j++;
      }
      res += decodeString(s.substring(i + 1, j - 1)).repeat(k);
      k = 1;
      i = j;
    } else {
      res += s[i].repeat(k);
      k = 1;
      i++;
    }
  }
  return res;
};
