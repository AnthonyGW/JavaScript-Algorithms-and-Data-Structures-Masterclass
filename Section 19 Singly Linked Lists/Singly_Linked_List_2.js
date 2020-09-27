// This list doesn't have a length property

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) { // go through the list until the last node where next is null
      newTail = current; // get the new second to last node
      current = current.next; // get the new last node
    }

    this.tail = newTail; // set tail to be the second to last node
    this.tail.next = null; // set tail's next to null

    if (this.head === this.tail) { // if there is only one node in the list
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    const currentHead = this.head; // store a reference to the head
    this.head = currentHead.next; // set the new head
    currentHead.next = null; // not really necessary, but it prevents returning the whole damn list

    if (!this.head) this.tail = null; // if there was no next node to the previous head

    return currentHead;
  }

  unshift(val) {
    if (!this.head) return this.push(val);

    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;

    return this;
  }

  get(index) {
    let current = this.head;
    let i = 0;
    while(current) {
      if (i === index) return current;
      current = current.next;
      i++;
    }
    return current ? current : false; // return false if we didn't get anything
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
    if (index < 0) return false;
    if (index === 0) return !!this.unshift(val);

    const beforeNode = this.get(index - 1);

    if (!beforeNode) return false;
    if (beforeNode === this.tail) return !!this.push(val);

    const afterNode = beforeNode.next;
    const newNode = new Node(val);

    newNode.next = afterNode;
    beforeNode.next = newNode;

    return true;
  }

  remove(index) {
    if (index < 0) return false;
    if (index === 0) return this.shift();

    const beforeNode = this.get(index - 1);

    if (!beforeNode || !beforeNode.next) return false;

    const removedNode = beforeNode.next;

    if (!removedNode.next) return this.pop();

    beforeNode.next = removedNode.next;

    return removedNode;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let node = this.tail;
    let next = node.next;
    let prev = null;
    while (next) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }
}

var list = new SinglyLinkedList();
console.log('push', list.push("hello")); // ["hello"]
list.push("how");
list.push("are");
list.push("you");
list.push("dude"); // ["hello", "how", "are", "you", "dude"]

console.log('pop', list.pop()); // pop: ["dude"], list: ["hello", "how", "are", "you"]
console.log('shift', list.shift()); // shift: ["hello"], list: ["how", "are", "you"]
console.log('unshift', list.unshift("dude")); // list: ["dude", "how", "are", "you"]
console.log(list.get(1)); // get: ["how"]
console.log(list.set(1, "hi")); // set: true, list: ["dude", "hi", "are", "you"]
console.log(list.insert(2, "so")); // insert: true, list: ["dude", "hi", "so", "are", "you"]
console.log(list.remove(0)); // remove: ["dude"], list: ["hi", "so", "are", "you"]
console.log(list.reverse()); // list: ["you", "are", "so", "hi"]
console.log(JSON.stringify(list));
