/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(1);
  console.log('Initial ', dp);

  for (let i = 2; i <= n; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      sum += dp[j] * dp[i - j - 1];
    }
    dp[i] = sum;
    console.log(dp);
  }

  return dp[n];
};

console.log(numTrees(3));
