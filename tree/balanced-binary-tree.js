class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isBalanced = function (root) {
  return isBalancedHelper(root)[0];
};

const isBalancedHelper = (root) => {
  if (!root) return [0, true];

  if (!root.left && !root.right) {
    return [1, true];
  }

  const [leftBalanced, leftHeight] = isBalancedHelper(root.left);
  const [rightBalanced, rightHeight] = isBalancedHelper(root.right);

  const isNodeBalanced =
    leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) < 2;
  const nodeHeight = Math.max(leftHeight, rightHeight) + 1;

  return [isNodeBalanced, nodeHeight];
};

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

console.log(isBalanced(root));
