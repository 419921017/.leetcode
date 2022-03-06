/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  if (triangle.length < 1) {
    return 0;
  }
  if (triangle.length == 1) {
    return triangle[0][0];
  }
  const dp = new Array(triangle.length).fill([]);
  triangle.forEach((item, i) => {
    dp[i] = new Array(item.length).fill([]);
  });

  dp[0][0] = triangle[0][0];
  dp[1][0] = triangle[0][0] + triangle[1][0];
  dp[1][1] = triangle[0][0] + triangle[1][1];

  for (let i = 2; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j == 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j == triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  return Math.min(...dp[dp.length - 1]);
};
// @lc code=end
