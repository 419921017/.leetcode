/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let arr = new Array(26);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - a;
    arr[index] = i;
  }
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt(0) - a;
    if (i == arr[index]) {
      return i;
    } else {
      arr[index] = -1;
    }
  }

  return -1;
};

// @lc code=end
