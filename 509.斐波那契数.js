/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib1 = function(n) {
  if (n == 0 || n == 1) return n
  return fib1(n - 1) + fib1(n - 2)
};

var fib = function(n) {
  if (n < 2) return n
  let p = 0, q = 0, r = 1
  for (let i = 2; i <=n; i++) {
    p = q
    q = r
    r = p + q
  }
  return r
}
// @lc code=end

