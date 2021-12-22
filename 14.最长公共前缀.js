/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length < 1) {
    return '';
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      if (prefix.length == 0) {
        return '';
      }
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};
// @lc code=end
