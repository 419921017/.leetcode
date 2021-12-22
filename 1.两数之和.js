/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[target - num] !== undefined) {
      return [map[target - num], i];
    }
    map[num] = i;
  }
  return result;
};
// @lc code=end
