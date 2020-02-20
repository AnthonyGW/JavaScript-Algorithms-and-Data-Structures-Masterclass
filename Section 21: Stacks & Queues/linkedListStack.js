class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the beginning of the list
  push(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }

  // remove from the beginning of the list
  // if we were working from the end of the list,
  // we would lose time having to traverse to the end of the list,
  // and designate the second to last as the new end
  pop() {
    if (this.size === 0) return null;
    var removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removedNode.val;
  }
}

var newStack = new Stack();
console.log(newStack.push('FIRST'));
console.log(newStack.push('SECOND'));
console.log(newStack.push('THIRD'));
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());