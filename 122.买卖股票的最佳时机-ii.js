/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = [[0, -prices[0]]];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [0, 0];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][i], dp[i - 1][0] + prices[i]);
  }
  return dp[prices.length - 1][0];
};
// @lc code=end
