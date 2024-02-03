# Stack

### RULE

LIFO (last in first out) principle like Tower meaning the last element added to the stack is the first one to be removed. Think like a tower - you added new stone on top and when remove a stone from top.

### two primary operations

- Push : adds an element to the top of the stack
- Pop : removes an element from the top of the stack

### common operations

Peeks or Top : return the element at the top of the stack without removing it

### use of stacks?

- undo/redo feature of the text editors
- moving back/forward through browser history
- backtracking algorithms ( maze, file directories)
- calling function ( call stack)

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return "Underflow, Stack is Empty";
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.isEmpty()) return "Stack is Empty";
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log(this.items);
  }
}
```

### Practise Problems

- https://leetcode.com/problems/valid-parentheses/description/
