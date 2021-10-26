class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const queue = [];
  let nextNodes = 0;
  let currentNodes = 1;
  const rightNodes = [];

  queue.push(root);

  while (queue.length > 0) {
    const node = queue.shift();
    currentNodes -= 1;

    if (node.left) {
      queue.push(node.left);
      nextNodes += 1;
    }

    if (node.right) {
      queue.push(node.right);
      nextNodes += 1;
    }

    if (currentNodes === 0) {
      rightNodes.push(node.val);
      currentNodes = nextNodes;
      nextNodes = 0;
    }
  }

  return rightNodes;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

console.log(rightSideView(root));
