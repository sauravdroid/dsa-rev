class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var diameterOfBinaryTree = function (root) {
  let max = -Infinity;

  const helper = (root) => {
    if (!root) return 0;

    if (!root.left && !root.right) return 1;

    const leftHeight = helper(root.left);
    const rightHeight = helper(root.right);

    max = Math.max(max, leftHeight + rightHeight);

    const treeHeight = 1 + Math.max(leftHeight, rightHeight);
    console.log(`Node: ${root.val}, height: ${treeHeight}`);

    return treeHeight;
  };

  helper(root);

  return max;
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(diameterOfBinaryTree(root));
