/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let m = num1.length,
    n = num2.length;

  let res = [];

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; i >= 0; j--) {
      let index1 = i + j;
      let index2 = i + j + 1;
      let mul =
        (num1.charAt(i) - '0') * (num2.charAt(j) - '0') + (res[index2] || 0);
      res[index1] = Math.floor(mul / 10) + (res[index1] || 0);
      res[index2] = mul % 10;
    }
  }

  let result = res.join('').replace(/^0+/, '');
  return !result ? '0' : result;
};
// @lc code=end
