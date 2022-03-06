/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//   if (nums.length < 1) {
//     return 0;
//   }
//   let dp = new Array(nums.length).fill(1);
//   let result = 1;

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) dp[i] = Math.max(dp[j] + 1, dp[i]);
//     }
//     result = Math.max(result, dp[i]);
//   }
//   console.log('dp', dp);
//   return result;
// };
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

function lengthOfLIS(nums) {
  if (nums.length < 1) {
    return 0;
  }

  const dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i]);
      }
    }
  }
  return Math.max(...dp);
}

// @lc code=end
