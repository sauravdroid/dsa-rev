const tree = [4,2,7,1,3,6,9];

const isEmpty = index => {
  return tree[index] === null || tree[index] === undefined;
};

const invertTree = (index, leftOld = 0, leftNew = 0, rightOld = 0, rightNew = 0) => {
  console.log('Index ', index);
  if (isEmpty(index)) return;
  

  const leftIndex = index * 2 + 1;
  const rightIndex = index * 2 + 2;
  
  console.log(tree[leftIndex], tree[rightIndex]);

  if (leftIndex < tree.length) {
    const temp = tree[leftIndex];
    tree[leftIndex] = tree[rightIndex];
    tree[rightIndex] = temp;
    console.log(tree);
  }

  invertTree(leftIndex);
  invertTree(rightIndex);
};

invertTree(0);
console.log(tree);

