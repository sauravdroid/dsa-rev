class AdjMatrix {
  constructor(n) {
    this.size = n;
    this.arr = new Array(n).fill(0).map((_) => new Array(n).fill(0));
  }

  printArray() {
    this.arr.forEach((row) => {
      console.log(row.join(' '));
    });
  }

  addEdge(s, e) {
    this.arr[s][e] = this.arr[e][s] = 1;
  }
}

const n = 12;
const adjMatrix = new AdjMatrix(n);
adjMatrix.addEdge(0, 1);
adjMatrix.addEdge(0, 9);
adjMatrix.addEdge(1, 8);
adjMatrix.addEdge(9, 8);
adjMatrix.addEdge(8, 7);
adjMatrix.addEdge(7, 10);
adjMatrix.addEdge(7, 11);
adjMatrix.addEdge(7, 6);
adjMatrix.addEdge(7, 3);
adjMatrix.addEdge(10, 11);
adjMatrix.addEdge(3, 2);
adjMatrix.addEdge(3, 4);
adjMatrix.addEdge(3, 5);
adjMatrix.addEdge(5, 6);

const dfs = (start) => {
  const path = [];
  const stack = [];
  const visited = new Array(n).fill(false);
  stack.push(start);

  while (stack.length > 0) {
    const node = stack.pop();

    if (!visited[node]) {
      visited[node] = true;
      path.push(node);
    }

    const neighbours = adjMatrix.arr[node];

    neighbours.forEach((val, neighbour) => {
      if (val === 1) {
        if (!visited[neighbour]) {
          stack.push(neighbour);
        }
      }
    });
  }

  return path;
};

console.log(dfs(0));
