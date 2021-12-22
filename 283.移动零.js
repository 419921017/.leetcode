/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i];
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
};

var moveZeroes2 = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j++] = temp;
    }
  }
};

var moveZeroes3 = function (nums) {
  let left = 0,
    right = 0,
    len = nums.length;
  while (right < len) {
    if (nums[right] != 0) {
      let res = nums[left];
      nums[left] = res;
      nums[right] = res;
      left++;
    }
    right++;
  }
};
moveZeroes3([0, 1, 0, 3, 12]);
// @lc code=end
