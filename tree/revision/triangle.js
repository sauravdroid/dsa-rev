/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const row = triangle[i];

    row.forEach((_, idx) => {
      dp[idx] = row[idx] + Math.max(dp[idx], dp[idx + 1]);
    });
    console.log(dp);
  }

  return dp[0];
};

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));
