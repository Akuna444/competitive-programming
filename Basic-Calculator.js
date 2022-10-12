/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  if (s == null || s.length === 0) return null;

  // remove space
  s = s.replace(/\s/g, "");

  let st = [];
  let n = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // number
    if (/\d/.test(c)) n = n * 10 + Number(c); // e.g. '14' -> 1 * 10 + 4

    // sign or last number
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === "-") st.push(-n);
      else if (sign === "+") st.push(n);
      else if (sign === "*") st.push(st.pop() * n);
      else if (sign === "/") st.push(~~(st.pop() / n));

      sign = c;
      n = 0;
    }
  }
  return st.reduce((a, b) => a + b);
};
