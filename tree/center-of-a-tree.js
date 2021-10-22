const adjList = {
  0: [1],
  1: [0, 3, 4],
  2: [3],
  3: [1, 2, 6, 7],
  4: [1, 5, 8],
  5: [4],
  6: [3, 9],
  7: [3],
  8: [4],
  9: [6] 
};

// const adjList = {
//   0: [1],
//   1: [0, 2],
//   2: [1, 9, 6, 3],
//   3: [2, 4, 5],
//   4: [3],
//   5: [3],
//   6: [2, 7, 8],
//   7: [6],
//   8: [6],
//   9: [2] 
// };

const n = Object.keys(adjList).length;
const degrees = new Array(n).fill(0);

const deleteLeafNode = (node) => {
  const child = adjList[node];

  adjList[child] = adjList[child].filter(item => item !== node);
  adjList[node] = [];

  degrees[node] = -1;
  degrees[child] -= 1;
};

const calculateDegrees = () => {
  Object.keys(adjList).forEach(node => {
    degrees[node] = adjList[node].length;
  })
};

const getLeafNodes = () => {
  const arr = [];
  degrees.forEach((degree, node) => {
    if (degree === 1 || degree === 0) {
      arr.push(node);
    }
  });

  return arr;
};

const getCenterOfTree = () => {
  calculateDegrees();
  let leaves = getLeafNodes();
  let count = leaves.length;

  while(count < n) {
    leaves.forEach(leaf => {
      deleteLeafNode(leaf);
    });

    leaves = getLeafNodes();
    count += leaves.length;
  }

  return leaves;
}

console.log(getCenterOfTree());

