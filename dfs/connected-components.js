class AdjMatrix {
  constructor(n) {
    this.size = n;
    this.arr = new Array(n).fill(0).map(_ => new Array(n).fill(0));
  }

  printArray() {
    this.arr.forEach(row => {
      console.log(row.join(' '));
    });
  }

  addEdge(s, e) {
    this.arr[s][e] = this.arr[e][s] = 1;
  }
}

const n = 18;
const adjMatrix = new AdjMatrix(n);
adjMatrix.addEdge(0, 4);
adjMatrix.addEdge(0, 8);
adjMatrix.addEdge(0, 14);
adjMatrix.addEdge(0, 13);
adjMatrix.addEdge(4, 8);
adjMatrix.addEdge(8, 14);
adjMatrix.addEdge(14, 13);
adjMatrix.addEdge(6, 7);
adjMatrix.addEdge(7, 11);
adjMatrix.addEdge(6, 11);
adjMatrix.addEdge(1, 5);
adjMatrix.addEdge(5, 17);
adjMatrix.addEdge(5, 16);
adjMatrix.addEdge(3, 9);
adjMatrix.addEdge(15, 9);
adjMatrix.addEdge(15, 2);
adjMatrix.addEdge(15, 10);
adjMatrix.addEdge(9, 2);


const start = 0;
const visited = new Array(n).fill(false);
const path = [];
let count = 0;
let components = new Array(n).fill(null);


const getConnectedComponents = () => {
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return { count, components }
};

const dfs = (at) => {
  if (visited[at]) return;

  visited[at] = true;

  components[at] = count;
  const row = adjMatrix.arr[at];

  row.forEach((_, index) => {
    if (row[index] === 1) {
      dfs(index);
    }
  })
};

getConnectedComponents();

console.log('Number of connected components ', count);
console.log('Components ', components);