/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1) return s;
  let arr = new Array(numRows).fill('');
  let chars = s.split('');
  let len = chars.length;
  let period = numRows * 2 - 2;
  for (let i = 0; i < len; i++) {
    let mod = i % period;
    if (mod < numRows) {
      arr[mod] += chars[i];
    } else {
      arr[period - mod] += chars[i];
    }
  }
  console.log('arr', arr);
  return arr.reduce((a, b) => a + b, '');
};
let s = 'PAYPALISHIRING',
  numRows = 4;

const str = convert(s, numRows);
console.log('str', str);
// @lc code=end
