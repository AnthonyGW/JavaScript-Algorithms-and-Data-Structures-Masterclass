class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() { // Teacher's code
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  pop2() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      const head = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return head;
    }
    let current = this.head;
    for(let i = 0; i < this.length; i++) {
      if (i === this.length - 2) {
        const lastVal = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return lastVal;
      }
      current = current.next;
    }
  }

  shift() {
    if (this.length === 0) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead
  }

  unshift(val) {
    if (this.length === 0) return this.push(val);
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return current;
      current = current.next;
    }
  }

  set(index, val) {
    const item = this.get(index);
    if (item) {
      item.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;
    const newNode = new Node(val);
    newNode.next = afterNode;
    beforeNode.next = newNode;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const beforeNode = this.get(index - 1);
    const removedNode = beforeNode.next;
    beforeNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let node = this.tail;
    let next, prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }
}

var list = new SinglyLinkedList();
list.push("hello");
list.push("how");
list.push("are");
list.push("you");
// list.push(21);

console.log(list.reverse());
console.log(JSON.stringify(list));
