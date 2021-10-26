class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;

  let currentNodeValid = min < root.val && root.val < max;
  console.log(`${min} < ${root.val} < ${max} = ${currentNodeValid}`);

  return (
    currentNodeValid &&
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
};

const root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(isValidBST(root));
// [5,1,4,null,null,3,6]
