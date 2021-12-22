/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let addon = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += addon;
    addon = 0;
    if (i == digits.length - 1) {
      digits[i]++;
    }
    if (digits[i] == 10) {
      digits[i] %= 10;
      addon = 1;
    }
  }
  if (addon == 1) {
    // return (digits = [addon, ...digits]);
    digits.unshift(1);
  }
  return digits;

  // let res = [];
  // let add = 0;
  // let i = digits.length - 1;
  // debugger;
  // while (i >= 0 || add !== 0) {
  //   let sum = digits[i] || 0;
  //   if (i == digits.length - 1) {
  //     sum += 1;
  //   }
  //   if (add > 0) {
  //     sum += add;
  //   }
  //   res.push(Math.floor(sum % 10));
  //   add = Math.floor(sum / 10);
  //   i--;
  // }
  // return res.reverse();
};

plusOne([1, 2, 3]);
// @lc code=end
