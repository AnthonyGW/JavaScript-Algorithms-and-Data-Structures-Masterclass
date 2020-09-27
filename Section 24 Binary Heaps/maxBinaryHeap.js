class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (isNaN(val)) return false;
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while(this.values[index] > this.values[parentIndex]) {
      [
        this.values[index],
        this.values[parentIndex]
      ] = [
        this.values[parentIndex],
        this.values[index]
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.values;
  }

  // Teacher's solution
  insert2(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    const length = this.values.length;
    if (length > 1) {
      [
        this.values[0], this.values[length - 1]
      ] = [
        this.values[length - 1], this.values[0]
      ];
    }
    const max = this.values.pop();
    // bubble down
    // compare the root with the child elements
    // if one of the child elements is bigger, swap the root with it
    // or if both the child elements are bigger, swap the root with the larger one
    // (I compare the two children first and then the bigger one with the parent)
    let parentIndex = 0;
    let biggerChildIndex;
    while(true) {
      let childIndex_1 = (parentIndex*2) + 1;
      let childIndex_2 = (parentIndex*2) + 2;

      let parent = this.values[parentIndex];
      let child_1 = this.values[childIndex_1];
      let child_2 = this.values[childIndex_2];

      if (child_1 && child_2) {
        biggerChildIndex = child_1 > child_2 ? childIndex_1 : childIndex_2;
      } else if (child_1 && !child_2) {
        biggerChildIndex = childIndex_1;
      } else {
        break;
      }

      if (parent > this.values[biggerChildIndex]) break;
      
      [
        this.values[parentIndex],
        this.values[biggerChildIndex]
      ] = [
        this.values[biggerChildIndex],
        this.values[parentIndex]
      ];

      parentIndex = biggerChildIndex;
    }
    return max;
  }

  // Teacher's solution
  extractMax2() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const newMaxHeap = new MaxBinaryHeap();
console.log(newMaxHeap.insert(1));
console.log(newMaxHeap.insert(32));
console.log(newMaxHeap.insert(4));
console.log(newMaxHeap.insert(11));
console.log(newMaxHeap.insert(9));
console.log(newMaxHeap.insert(31));
console.log(newMaxHeap.insert(3));

console.log(newMaxHeap.extractMax(), newMaxHeap.values);
// 3, 11, 31, 1, 9, 4
// 31, 11, 3, 1, 9, 4
// 31, 11, 4, 1, 9, 3 // return 32

console.log(newMaxHeap.extractMax(), newMaxHeap.values);
// 31, 11, 4, 1, 9, 3
// 3, 11, 4, 1, 9
// 11, 3, 4, 1, 9
// 11, 9, 4, 1, 3 // return 31

console.log(newMaxHeap.extractMax(), newMaxHeap.values);
console.log(newMaxHeap.extractMax(), newMaxHeap.values);
console.log(newMaxHeap.extractMax(), newMaxHeap.values);
console.log(newMaxHeap.extractMax(), newMaxHeap.values);
console.log(newMaxHeap.extractMax(), newMaxHeap.values);
console.log(newMaxHeap.extractMax(), newMaxHeap.values);