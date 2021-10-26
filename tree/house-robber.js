class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var rob = function (root) {
  const helper = (root) => {
    if (!root) return [0, 0];

    const leftVal = helper(root.left);
    const rightVal = helper(root.right);

    const val = new Array(2);
    val[0] = root.val + leftVal[1] + rightVal[1];
    val[1] = Math.max(...leftVal) + Math.max(...rightVal);

    return val;
  };

  const result = helper(root);

  return Math.max(...result);
};
const root = new TreeNode(4);
root.left = new TreeNode(1);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(3);

console.log(rob(root));
