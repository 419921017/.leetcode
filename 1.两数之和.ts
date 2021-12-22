/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// function twoSum(nums: number[], target: number): number[] {
//   let map: Record<number, number> = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (map[target - nums[i]] == undefined) {
//       map[nums[i]] = i;
//     } else {
//       return [map[target - nums[i]], i];
//     }
//   }
// }
function twoSum(nums: number[], target: number): number[] {
  let map: Record<number, number> = {};
  for (let i = 0; i < nums.length - 1; i++) {
    if (map[target - nums[i]] == undefined) {
      map[nums[i]] = i;
    } else {
      return [map[target - nums[i]], i];
    }
  }
}
// @lc code=end
