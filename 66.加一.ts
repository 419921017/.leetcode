/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let result: number[] = [];
  let addon = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += addon;
    addon = 0;
    if (i == digits.length - 1) {
      digits[i]++;
    }
    if (digits[i] == 10) {
      addon = 1;
      digits[i] %= 10;
    }
  }

  if (addon == 1) {
    result[0] = 1;
    result = [...result, ...digits];
  } else {
    result = digits;
  }

  return result;
}
// @lc code=end
