const adjList = {
  0: [1, 2, 3],
  1: [4, 5],
  2: [6, 7],
  3: [8],
  4: [],
  5: [9],
  6: [],
  7: [],
  8: [],
  9: []
};

const dfs = node => {
  if (adjList[node].length === 0) {
    return '()';
  }

  const children = adjList[node];
  let childNodeEncoding = '';

  children.forEach(child => {
    childNodeEncoding += dfs(child);
  });

  return `(${childNodeEncoding})`
};

const encoding = dfs(0);
console.log('Encoding ', encoding);