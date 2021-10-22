const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

const minimumTotal = (triangle = []) => {
  const dp = new Array(triangle.length + 1).fill(0);

  for (let row = triangle.length - 1; row >= 0; row--) {
    triangle[row].forEach((item, index) => {
      dp[index] = item + Math.min(dp[index], dp[index + 1]);
    });
  }

  return dp[0];
};

console.log(minimumTotal(triangle));
