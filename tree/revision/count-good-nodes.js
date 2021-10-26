class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var goodNodes = function (root) {
  let count = 0;

  const helper = (root, max = -Infinity) => {
    if (!root) return;

    if (root.val >= max) count += 1;

    helper(root.left, Math.max(max, root.val));
    helper(root.right, Math.max(max, root.val));
  };

  helper(root);

  return count;
};

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);
