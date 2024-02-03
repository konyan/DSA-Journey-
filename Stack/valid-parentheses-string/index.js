/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let openStack = [];
  let starStack = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === "(") {
      openStack.push(i);
    } else if (cur === "*") {
      starStack.push(i);
    } else {
      if (openStack.length == 0) {
        if (starStack.length == 0) {
          return false;
        } else {
          starStack.pop();
        }
      } else openStack.pop();
    }
  }

  while (openStack.length > 0) {
    if (starStack.length === 0) return false;
    else if (
      openStack[openStack.length - 1] < starStack[starStack.length - 1]
    ) {
      openStack.pop();
      starStack.pop();
    } else {
      return false;
    }
  }

  return true;
};
