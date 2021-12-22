/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    max = 0;
  while (i < j) {
    let minHeight = height[i] > height[j] ? height[j--] : height[i++];
    let area = minHeight * (j - i + 1);
    max = Math.max(max, area);
  }
  return max;
};
// @lc code=end
