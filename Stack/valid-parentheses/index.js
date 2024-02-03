/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let leftParent = ["{", "(", "["];
  let obj = {
    "{": "}",
    "(": ")",
    "[": "]",
  };

  const myStack = new Stack(); // can use array const myStack = []

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (leftParent.includes(cur)) {
      myStack.push(obj[cur]);
    } else {
      const lastValue = myStack.pop();
      if (lastValue !== cur) return false;
    }
  }
  return myStack.isEmpty();
};

class Stack {
  constructor() {
    this.items = [];
  }

  pop() {
    if (this.isEmpty()) return -1;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    return this.items.push(element);
  }

  peek() {
    if (this.isEmpty()) return -1;
    return this.items[this.items.length - 1];
  }
}
