let goodNodeCount = 0;
const tree = [3,1,4,3,null,1,5];

const isEmptyNode = (index) => {
  return tree[index] === null || tree[index] === undefined;
}

const countGoodNodes = (index, max = -Infinity) => {
  let goodNodeCount = 0;

  if (isEmptyNode(index)) return 0;

  if (tree[index] >= max) {
    goodNodeCount += 1;
    max = tree[index];
  }

  goodNodeCount += countGoodNodes(index * 2 + 1, max);
  goodNodeCount += countGoodNodes(index * 2 + 2, max);

  return goodNodeCount;
};

console.log('Good Node Count ', countGoodNodes(0));