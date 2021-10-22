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

const queue = [];
const visited = new Array(n).fill(false);
const prev = new Array(n).fill(null);

queue.push(0);

const bfs = () => {
  while (queue.length > 0) {
    const node = queue.shift();
    const row = adjMatrix.arr[node];

    row.forEach((_, index) => {
      if (row[index] === 1 && !visited[index]) {
        visited[index] = true;
        queue.push(index);
        prev[index] = node;
      }
    });
  }
};

bfs();
console.log(prev);
