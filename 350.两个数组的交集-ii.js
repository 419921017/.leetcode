/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = {};
  nums1.forEach((item) => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  });

  let res = [];

  nums2.forEach((item) => {
    if (map[item] > 0) {
      map[item] -= 1;
      res.push(item);
    }
  });
  return res;
};

var intersect1 = function (nums1, nums2) {
  const map = {};
  nums1.forEach((item) => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  });
  nums2.forEach((item) => {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  });
  Object.entries(map)
    .filter(([key, value]) => value > 1)
    .map((item) => item[0]);
};

intersect1([1, 2, 2, 1], [2, 2]);
var intersect2 = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  let x = 0,
    y = 0;
  let res = [];
  while (x <= nums1.length - 1 && y <= nums2.length - 1) {
    let one = nums1[x];
    let two = nums2[y];
    if (one > two) {
      y++;
      continue;
    } else if (one < two) {
      x++;
      continue;
    } else {
      res.push(one);
      x++;
      y++;
    }
  }
  return res;
};
console.log(intersect2([1, 2, 2, 1], [2, 2]));

// @lc code=end
