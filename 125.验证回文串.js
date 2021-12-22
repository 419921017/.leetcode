/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]+/gi, '').toLocaleLowerCase();
  //   let out = s.length % 2;
  //   let index = s.length / 2;
  //   console.log(index);
  //   let s1 = s.slice(0, index + out);
  //   let s2 = s.slice(index);
  //   console.log(s1, s2);
  //   console.log(s2.split('').reverse().join(''));
  //   return s1 === s2.split('').reverse().join('');
  return s === s.split('').reverse().join('');
};
// let str = 'A man, a plan, a canal: Panama';
let str = 'aa';

console.log(isPalindrome(str));
// @lc code=end
