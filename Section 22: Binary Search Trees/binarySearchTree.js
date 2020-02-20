/**
 * This file includes work for both Section 22 'Binary Search Trees' and Section 23 'Tree Traversal'
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while(true) {
        if (val === current.val) return undefined; // or you can keep track of its frequency in the node
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    if (val === undefined || val === null) return false;
    var current = this.root;
    while(current) {
      if (val === current.val) return true;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    return false;
  }

  find2(val) { // Teacher's solution
    if (!this.root) return false;
    var current = this.root;
    var found = false;
    while(current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  BFS() {
    var data = [];
    var queue = [];
    var node = this.root;
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Recursive algos ahead

  // For each node, visit each child node all the way into the left side,
  // then go back to the last branch and visit all nodes on the right side
  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  // For each node, check if there is a child node
  // After the deepest child node on the left or right,
  // go back up the tree and record each node
  // visiting the nodes first left, then right on the same level
  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node);
    }

    traverse(this.root);

    return data;
  }

  // Find the lowest child node on the left,
  // then visit each node back up the tree.
  // If there is a branch, visit the child nodes,
  // but always start from the left for new branches
  DFSInOrder() {
    var data = [];

    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node);
      node.right && traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(13);
tree.insert(5);
tree.insert(7);
tree.insert(11);
tree.insert(2);
tree.insert(16);

console.log(tree.find(7));
console.log(tree.find(2));
console.log(tree.find(13));
console.log(tree.find(3));
console.log(tree.find());
console.log('BFS', tree.BFS());
console.log('DFS PreOrder', tree.DFSPreOrder());
console.log('DFS PostOrder', tree.DFSPostOrder());
console.log('DFS InOrder', tree.DFSInOrder());

// Notes for better visualization
// Google this bastard's middle finger in action: https://en.wikipedia.org/wiki/Aye-aye
//
// DFS Pre-order and Post-order is that finger reaching the deepest left nodes first
// then retracting slightly each time to check out nodes on the same level on the right.
//
// The difference is that in pre-order, we register the nodes as soon as we find them
// while in post-order we register the nodes as we retreat away from them.
//
// The visualization for DFS In-order won't fuel nightmares, thankfully.
// If the tree is arranged such that each node has its own nice little vertical partition,
// in-order traversal is a scanner that sweeps across the tree, left to right
//
// Pros and Cons
// Apparently, you should consider using BFS and DFS depending on how 'shallow' or 'wide'
// the tree is, to save on space complexity.
// e.g use DFS for a wide but shallow tree (you're thinking about that finger aren't you? :D)
// and BFS for a deep but narrow tree (imagine the finger getting longer as it digs in :D)
//
// DFS Pre-order can be useful if you want to clone a tree. You can flatten it (hint hint, I used it in the exercise to flatten nested arrays)
// for storage in a file, then reconstruct the tree in a convenient order (the first element is always the root).
//
// In-order might be useful with a binary search tree,
// because the act of sweeping from left to right results in going through the nodes
// from the lowest value to the highest value (in order, get it?). Pretty convenient.