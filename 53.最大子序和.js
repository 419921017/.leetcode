/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let dp = new Array(nums.length);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = nums[i] + dp[i - 1];
    } else {
      dp[i] = nums[i];
    }
  }
  console.log(dp);
  return Math.max(...dp);
};
var maxSubArray1 = function (nums) {
  let sum = nums[0];
  let arr = [sum];
  for (let i = 1; i < nums.length; i++) {
    arr[i] = sum = Math.max(nums[i], sum + nums[i]);
  }
  return Math.max(...arr);
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// @lc code=end

function maxSubArray2(nums) {
  let sum = nums[0];
  let dp = [sum];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + cur;
    } else {
      dp[i] = cur;
    }
  }
  return Math.max(...dp);
}
