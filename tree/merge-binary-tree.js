const tree1 = [1, 3, 2, 5];
const tree2 = [2, 1, 3, null, 4, null, 7];

class Node {
  constructor(value, left, right) {
    this.val = value === undefined ? 0 : value;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const isEmpty = (index, tree) => {
  return tree[index] === null || tree[index] === undefined;
};

const buildTree = (index, root, tree) => {
  if (isEmpty(index, tree)) {
    return;
  }

  const leftIndex = index * 2 + 1;
  const rightIndex = index * 2 + 2;

  if (tree[leftIndex] !== undefined && tree[leftIndex] !== null) {
    root.left = new Node(tree[leftIndex]);
  }

  if (tree[rightIndex] !== undefined && tree[rightIndex] !== null) {
    root.right = new Node(tree[rightIndex]);
  }

  buildTree(leftIndex, root.left, tree);
  buildTree(rightIndex, root.right, tree);

  return root;
};

const buildTreeArray = (root, arr = []) => {
  const queue = [];
  const path = [];

  queue.push(root);
  path.push(root.val);

  while (queue.length > 0) {
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

const mergeTree = (root1, root2) => {
  if (root1 && root2) return null;

  if (root1 || root2) return root1 || root2;

  const root = new Node(root1.val + root2.val);

  root.left = mergeTree(root1.left, root2.left);
  root.right = mergeTree(root1.right, root2.right);

  return root;
};

const root1 = buildTree(0, new Node(tree1[0]), tree1);
const root2 = buildTree(0, new Node(tree2[0]), tree2);

// console.log(root1.right.left);
// console.log(root2.right.left);

const mergedRoot = mergeTree(root1, root2);

const mergedTreeArray = buildTreeArray(mergedRoot);

// const tree1Array = buildTreeArray(root1);
// const tree2Array = buildTreeArray(root2);

// console.log(tree1Array);
// console.log(tree2Array);
console.log(mergedTreeArray);
