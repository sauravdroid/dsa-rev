/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const arr = new Array(n + 1).fill(1);
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let sum = 0;

    for (let j = 0; j < i; j++) {
      sum += arr[j] * arr[i - j - 1];
    }

    arr[i] = sum;
  }

  return arr[n];
};

console.log(numTrees(3));
