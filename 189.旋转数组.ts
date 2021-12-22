/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
    newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
    nums[i] = newArr[i];
  }
  //   k %= nums.length;
  //   reverse(nums, 0, nums.length - 1);
  //   reverse(nums, 0, k - 1);
  //   reverse(nums, k, nums.length - 1);
}
// function gcd(x, y) {
//   return y ? gcd(y, x % y) : x;
// }
function rotate1(nums: number[], k: number): void {}

function rotate2(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start += 1;
    end -= 1;
  }
}

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));

// @lc code=end
