/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 *
 *
 */

// @lc code=start
function maxProfit1(prices: number[]): number {
  // 下标为 i 的这一天，持股状态为 j 时，我们手上拥有的最大现金数
  // dp[i][0] 表示交易完后没有股票的最大利润
  // dp[i][1] 表示交易完后手里有一支股票的最大利润

  // 第一维 i 表示下标为 i 的那一天（ 具有前缀性质，即考虑了之前天数的交易 ）；
  // 第二维 j 表示下标为 i 的那一天是持有股票，还是持有现金。这里 0 表示持有现金（cash），1 表示持有股票（stock）。

  if (!prices || prices.length < 2) return 0;

  // 0: 持有现金
  // 1: 持有股票

  let dp: [number, number][] = [];

  for (let i = 0; i < prices.length; i++) {
    dp.push([0, 0]);
  }

  // 确定初始值
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  //   console.log(dp[0][0]);
  //   console.log(dp[0][1]);

  for (let i = 1; i < prices.length; i++) {
    dp[i] = [0, 0];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
  }
  //   return 0;
  return dp[prices.length - 1][0];
}

function maxProfit(prices: number[]): number {
  if (!prices || prices.length < 2) return 0;

  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) res += diff;
  }
  return res;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit1([7, 1, 5, 3, 6, 4]));
// @lc code=end
