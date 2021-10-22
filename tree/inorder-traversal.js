class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const inorderTraversal = (root, result = []) => {
  if (!root) return;

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);

  return result;
};

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);

const sortedArr = inorderTraversal(root);
console.log(sortedArr);
