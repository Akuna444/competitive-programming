/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  const stack = new Array();

  for (var i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      stack.unshift(tokens[i]);
    } else {
      var val1 = parseInt(stack.shift());
      var val2 = parseInt(stack.shift());

      switch (tokens[i]) {
        case "+":
          var ans = val1 + val2;
          stack.unshift(ans);
          break;
        case "-":
          var ans = val2 - val1;
          stack.unshift(ans);
          break;
        case "*":
          var ans = val1 * val2;
          stack.unshift(ans);
          break;
        case "/":
          var ans = Math.trunc(val2 / val1);
          stack.unshift(ans);
          break;
        default:
          throw new Error("Invalid Token", i);
      }
    }
  }

  return stack.shift();
};
