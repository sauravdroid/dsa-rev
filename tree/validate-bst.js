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
 * @return {boolean}
 */

var isValidBST = function (root) {
  return isValidBSTHelper(root)[0];
};

var isValidBSTHelper = function (root) {
  if (!root) return null;

  if (!root.left && !root.right) {
    return [true, root.val, root.val];
  }

  const leftData = isValidBSTHelper(root.left);
  const rightData = isValidBSTHelper(root.right);

  const arr = new Array(3);
  arr[0] =
    (leftData ? leftData[2] : -Infinity) < root.val &&
    (rightData ? rightData[1] : Infinity) > root.val &&
    (leftData ? leftData[0] : true) &&
    (rightData ? rightData[0] : true);

  arr[1] = leftData ? Math.min(leftData[1], root.val) : root.val;
  arr[2] = rightData ? Math.max(rightData[2], root.val) : root.val;

  return arr;
};
