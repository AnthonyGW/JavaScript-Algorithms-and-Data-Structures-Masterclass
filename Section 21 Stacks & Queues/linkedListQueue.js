class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to the end of the list
  enqueue(val) {
    var newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.size;
  }

  // remove from the beginning of the list
  // if we were working from the end of the list,
  // we would lose time having to traverse to the end of the list,
  // and designate the second to last as the new end
  dequeue() {
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

var newQueue = new Queue();
console.log(newQueue.enqueue('FIRST')); // 1
console.log(newQueue.enqueue('SECOND')); // 2
console.log(newQueue.enqueue('THIRD')); // 3
console.log(newQueue.dequeue()); // FIRST
console.log(newQueue.dequeue()); // SECOND
console.log(newQueue.dequeue()); // THIRD