class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const root = buildTree(preorder, inorder);
console.log(root);
