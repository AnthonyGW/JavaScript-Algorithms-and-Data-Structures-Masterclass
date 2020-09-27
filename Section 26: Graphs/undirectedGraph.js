// BFT
// Accept a starting vertex
// Create a queue and place the starting vertex in it
// Create an array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each object in the adjacency list for the vertex you are visiting
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex

class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1); // because undirected
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v));
      delete this.adjacencyList[vertex];
    }
  }

  // Teacher's solution
  removeVertex2(vertex) {
    while(this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  DFTr(vertex) { // Depth First Traversal recursive
    const searchResult = [];
    const visited = {};
    const helper = (v) => {
      if (!this.adjacencyList[v]) return;
      visited[v] = true;
      searchResult.push(v);
      this.adjacencyList[v].forEach(edge => !visited[edge] && helper(edge));
      // I initially had a for-loop,
      // but then I felt dumb and stole the forEach from the teacher's solution.
      // I reduced it to a one-liner just to recover some confidence.
    };
    helper(vertex);
    return searchResult;
  }

  // Teacher's solution
  DFTr2(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      })
    })(start);
    return result;
  }

  DFTi(start) { // Depth First Traversal iterative
    const result = [];
    const S = [start]; // We use this as a stack (only pushing and popping allowed)
    // I had pushed 'start' to S, but I stole from the teacher again
    // and initialized with it. My confidence ToT
    const visited = {};

    while(S.length !== 0) {
      let vertex = S.pop();
      if (!visited[vertex]) {
        result.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach(N => S.push(N));
      }
    }
    return result;
  }

  // Teacher's solution
  DFTi2(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while(stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFT(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while(queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new UndirectedGraph();
g.addVertex('Mombasa');
g.addVertex('Eldoret');
g.addVertex('Kisumu');
g.addVertex('Lodwar');
g.addVertex('Turkana');
console.log(g.adjacencyList);

g.addEdge('Mombasa', 'Kisumu');
g.addEdge('Kisumu', 'Eldoret');
g.addEdge('Eldoret', 'Turkana');
console.log(g.adjacencyList);

g.removeEdge('Kisumu', 'Eldoret');
console.log(g.adjacencyList);

g.addEdge('Kisumu', 'Eldoret');
console.log(g.adjacencyList);

g.removeVertex('Eldoret');
console.log(g.adjacencyList);

const traverse_example = new UndirectedGraph();
traverse_example.addVertex('A');
traverse_example.addVertex('B');
traverse_example.addVertex('C');
traverse_example.addVertex('D');
traverse_example.addVertex('E');
traverse_example.addVertex('F');

console.log(traverse_example.adjacencyList);

traverse_example.addEdge('A', 'B');
traverse_example.addEdge('A', 'C');
traverse_example.addEdge('B', 'D');
traverse_example.addEdge('C', 'E');
traverse_example.addEdge('D', 'E');
traverse_example.addEdge('D', 'F');
traverse_example.addEdge('E', 'F');

console.log(traverse_example.adjacencyList);

const DFTResult = traverse_example.DFTi2('A');
console.log(DFTResult);

const BFTResult = traverse_example.BFT('A');
console.log(BFTResult);