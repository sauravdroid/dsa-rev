class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const dfs = (root, n) => {
  const visited = new Array(n + 1).fill(false);
  const path = [];
  const stack = [];

  stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();

    if (!node) {
      continue;
    }

    if (!visited[node.val]) {
      visited[node.val] = true;
      path.push(node.val);
    }

    if (node.right && !visited[node.right.val]) {
      stack.push(node.right);
    }

    if (node.left && !visited[node.left.val]) {
      stack.push(node.left);
    }
  }

  return path;
};

const dfsRecursive = (root, path = []) => {
  if (!root) return path;

  path.push(root.val);

  dfsRecursive(root.left, path);
  dfsRecursive(root.right, path);

  return path;
};

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

console.log(dfs(root, 6));
console.log(dfsRecursive(root));
