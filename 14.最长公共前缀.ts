/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs || strs.length === 0) {
    return '';
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    while (!str.startsWith(prefix)) {
      if (prefix == '') {
        return '';
      }
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

console.log(
  'longestCommonPrefix',
  longestCommonPrefix(['flower', 'flow', 'flight'])
);

// @lc code=end
