// const tree = [0, 1, 2, null, null, 3, 4, 5];
// const tree = [3, 9, 20, null, null, 15, 7];
const tree = [1,2,2,3,3,null,null,4,4];

const isEmptyNode = index => {
  return (tree[index] === null || tree[index] === undefined);
}

const dfs = index => {
  if (isEmptyNode(index)) return;

  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;
  
  if (isEmptyNode(leftIndex) && isEmptyNode(rightIndex)) {
    return 1;
  }

  return 1 + Math.max(dfs(leftIndex), dfs(rightIndex));
};

const isTreeBalanced = index => {
  if (isEmptyNode(index)) return;

  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;

  if (isEmptyNode(leftIndex) && isEmptyNode(rightIndex)) {
    return { balanced: true, height: 1 };
  }

  const { 
    balanced: leftBalanced, 
    height: leftHeight 
  } = isTreeBalanced(leftIndex);

  const { 
    balanced: rightBalanced, 
    height: rightHeight 
  } = isTreeBalanced(rightIndex);

  return {
    balanced: leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1,
    height: 1 + Math.max(leftHeight, rightHeight)
  };
}

const { balanced, height } = isTreeBalanced(0);

console.log('Tree Height ', height);
console.log('Is Tree Balanced ', balanced);