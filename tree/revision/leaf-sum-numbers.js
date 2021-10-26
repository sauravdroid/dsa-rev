class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var sumNumbers = function (root) {
  // let sum = 0;

  const helper = (root, val = 0) => {
    if (!root) return 0;

    if (!root.left && !root.right) {
      console.log('Leaf ', val + root.val);
      return val + root.val;
    }

    const value = (val + root.val) * 10;
    console.log(`Node: ${root.val}, value: ${value}`);

    return helper(root.left, value) + helper(root.right, value);
  };

  return helper(root);
};

// const root = new TreeNode(4);
// root.left = new TreeNode(9);
// root.right = new TreeNode(0);
// root.left.left = new TreeNode(5);
// root.left.right = new TreeNode(1);

const root = new TreeNode(1);
root.left = new TreeNode(0);

const sum = sumNumbers(root);
console.log('Sum ', sum);
