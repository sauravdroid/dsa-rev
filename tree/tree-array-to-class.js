// const tree = [4,2,7,1,3,6,9];
// const tree = [3,9,20,null,null,15,7];
// const tree = [1,2,2,3,3,null,null,4,4];
// const tree = [3,1,4,3,null,1,5];
const tree = [2, 1, 3];

class Node {
  constructor(value, left, right) {
    this.val = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const isEmpty = (index) => {
  return tree[index] === null || tree[index] === undefined;
};

const buildTree = (index, root) => {
  if (isEmpty(index)) {
    return;
  };

  const leftIndex = index * 2 + 1;
  const rightIndex = index * 2 + 2;
  
  if (tree[leftIndex] !== undefined) {
    root.left = new Node(tree[leftIndex]);
  }
  
  if (tree[rightIndex] !== undefined) {
    root.right = new Node(tree[rightIndex]);
  }

  buildTree(leftIndex, root.left);
  buildTree(rightIndex, root.right);

  return root;
};

const buildTreeArray = (root, arr = []) => {
  const queue = [];
  const path = [];

  queue.push(root);
  path.push(root.val);

  while(queue.length > 0) {
    const node = queue.shift();

    if (node.left) {
      queue.push(node.left);
      path.push(node.left.val);
    }

    if (node.right) {
      queue.push(node.right);
      path.push(node.right.val);
    }
  }

  return path;
};

const invertTree = root => {
  if (!root) return;

  const temp = root.left;

  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const dfs = root => {
  if (!root) return;

  if (root.val === null) return;

  dfs(root.left);
  dfs(root.right);
}

const root = buildTree(0, new Node(tree[0]));
const invertedTreeRoot = invertTree(root);
// dfs(root);
console.log(buildTreeArray(invertedTreeRoot));