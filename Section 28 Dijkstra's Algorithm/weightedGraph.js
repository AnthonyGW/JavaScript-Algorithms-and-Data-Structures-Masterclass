
// Find the shortest path from A to E
//                        4
//               A --------------- B
//               |                 |
//             2 |                 | 3
//               |   2         3   |
//               C------- D -------E
//                \       |       /
//                 \      |      /
//                  \     | 1   /
//                 4 \    |    / 1
//                    \   |   /
//                     \  |  /
//                      \ | /
//                       \|/
//                        F

// THE APPROACH:
// 1. Every time we look to visit a new node,
//    we pick the node with the smallest known distance to visit first.
// 2. Once we've moved to the node we're going to visit,
//    we look at each of its neighbors.
// 3. For each neighboring node, we calculate the distance
//    by summing the total edges that lead to the node we're checking
//    *from the starting node.*
// 4. If the new total distance to a node is less than the previous total,
//    we store the new shorter distance for that node.

// DIJKSTRA'S PSEUDOCODE:
// 1. The function should accept a starting and ending vertex
// 2. Create an object (distances) and set each key to be every vertex
//    the adjacency list with a value of infinity,
//    except for the starting vertex which should have a value of 0.
// 3. After setting a value in the distances object,
//    add each vertex with a priority of Infinity to the priority queue,
//    except the starting vertex which should have a priority of 0
//    because that's where we begin.
// 4. Create another object called previous and set each key to be
//    every vertex in the adjacency list with a value of null.
// 5. Start looping as long as there is anything in the priority queue
//    - Dequeue a vertex from the priority queue
//    - If that vertex is the same as the ending vertex, we are done!
//    - Otherwise loop through each value in the adjacency list at that vertex
//      + Calculate the distance to that vertex from the starting vertex
//      + If the distance is less than what is currently stored in our distances object
//        # Update the distances object with new lower distance
//        # Update the previous object to contain that vertex
//        # Enqueue the vertex with the total distance from the start node

// TEMPORARY PRIORITY QUEUE USED TO QUICKLY TRY OUT DIJKSTRA'S ALGORITHM
//
// class PriorityQueue {
//   constructor() {
//     this.values = [];
//   }
//   enqueue(val, priority) {
//     this.values.push({val, priority});
//     this.sort();
//   }
//   dequeue() {
//     return this.values.shift();
//   }
//   sort() {
//     this.values.sort((a, b) => a.priority - b.priority);
//   }
// }

// OPTIMIZED PRIORITY QUEUE COPIED FROM SECTION 24: BINARY HEAPS
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
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
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight }); // because undirected
  }

  shortestPath(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = []; // to return at the end
    let smallest;
    
    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while(nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // DONE, build path to return
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find the neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to the neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - how we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const g = new WeightedGraph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'E', 3);
g.addEdge('C', 'D', 2);
g.addEdge('C', 'F', 4);
g.addEdge('D', 'E', 3);
g.addEdge('D', 'F', 1);
g.addEdge('E', 'F', 1);

console.log(g.shortestPath('A', 'E')); // A, C, D, F, E