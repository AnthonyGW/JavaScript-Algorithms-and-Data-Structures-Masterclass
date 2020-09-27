class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    // if there is no head, return undefined
    if (this.length === 0) return undefined;
    // store the tail
    var tail = this.tail;
    // if the length of the list is 1
    if (this.length === 1) {
      // set the head and tail to null
      this.head = null;
      this.tail = null;
    } else {
    // else
      // get the second to last item,
      // set it as the tail
      this.tail = this.tail.prev;
      // set the next of the new tail to null
      this.tail.next = null;
    }
    // reduce the size of the list
    this.length--;
    // remove references to the rest of the list
    tail.prev = null;
    // return the stored tail
    return tail;
  }

  shift() {
    if (this.length === 0) return undefined;
    // store the current head
    var head = this.head;
    // if there is no other node
    if (this.length === 1) {
      this.tail === null;
    }
    // set the list's head to the stored node's next
    this.head = head.next;
    // set the new head's prev to null
    this.head.prev = null;
    // set the stored node's next to null
    head.next = null;
    // reduce the size of the list
    this.length--;
    // return the stored node
    return head;
  }

  unshift(val) {
    if (this.length === 0) return this.push(val);
    // create a new node
    var newNode = new Node(val);
    // set the next of the new node to the list's head
    newNode.next = this.head;
    // set the prev of the head to the new node
    this.head.prev = newNode;
    // set the list's head to the new node
    this.head = newNode;
    // increase the size of the list
    this.length++;
    return this;
  }

  get(index) {
    // if the index is negative or greater than/equal to the length, return null
    if (index < 0 || index >= this.length) return null;
    // start at the beginning
    if (index <= this.length / 2) {
      let current = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === index) return current;
        current = current.next;
      }
    } else { // or start at the end
      let current = this.tail;
      for (let i = this.length - 1; i >= index; i--) {
        if (i === index) return current;
        current = current.prev;
      }
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

    const afterNode = this.get(index);
    const beforeNode = afterNode.prev;
    const newNode = new Node(val);
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    beforeNode.next = newNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList();
console.log('push', list.push("hello")); // ["hello"]
list.push("how");
list.push("are");
list.push("you");
list.push("dude"); // ["hello", "how", "are", "you", "dude"]

console.log('pop', list.pop()); // pop: ["dude"], list: ["hello", "how", "are", "you"]
console.log('shift', list.shift()); // shift: ["hello"], list: ["how", "are", "you"]
console.log('unshift', list.unshift("dude")); // list: ["dude", "how", "are", "you"]
console.log('get', list.get(1)); // get: ["how"]
console.log('set', list.set(1, "hi")); // set: true, list: ["dude", "hi", "are", "you"]
console.log('get', list.get(1)); // get: ["hi"]
console.log('insert', list.insert(2, "so")); // insert: true, list: ["dude", "hi", "so", "are", "you"]
console.log('get', list.get(2)); // get: ["so"]
console.log('remove', list.remove(0)); // remove: ["dude"], list: ["hi", "so", "are", "you"]
console.log('get', list.get(2)); // get: ["are"]
// console.log('reverse', list.reverse()); // list: ["you", "are", "so", "hi"]
console.log(list);

// scrambled shit from the exercises
// var removedNode = this.get(index);
// if (!removedNode) return undefined;
// if (this.length === 1) {
//     this.head = null;
//     this.tail = null;
//     this.length--;
//     return removedNode;
// }
// if (index === 0) {
//     this.head = removedNode.next;
//     this.head.prev = null;
//     this.length--;
//     return removedNode;
// }
// if (index === this.length - 1) {
//     this.tail = removedNode.prev;
//     this.tail.next = null;
//     this.length--;
//     return removedNode;
// }
// if (this.length === 1) {
    
// }
// var beforeNode = removedNode.prev;
// var afterNode = removedNode.next;
// beforeNode.next = afterNode;
// afterNode.prev = beforeNode;
// removedNode.prev = null;
// removedNode.next = null;
// this.length--;
// return removedNode;