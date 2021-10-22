class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var rightSideView = function (root) {
  const queue = [];
  let currentNodes = 1;
  let nextNodes = 0;
  let result = [];

  queue.push(root);
  let count = 0;

  while (queue.length > 0) {
    count += 1;
    console.log('Step ', count);
    const node = queue.shift();
    if (node.left !== null || node.left !== undefined) {
      queue.push(node.left);
      nextNodes += 1;
    }

    if (node.right !== null || node.right !== undefined) {
      queue.push(node.right);
      nextNodes += 1;
    }

    console.log('Queue ', queue);

    currentNodes -= 1;
    if (currentNodes === 0) {
      currentNodes = nextNodes;
      nextNodes = 0;
      result.push(node.val);
    }
  }

  return result;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root));
