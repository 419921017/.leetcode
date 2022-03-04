/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let queue1 = [], queue2 = []
  if (root) {
    queue1.push(root)
  }
  let result = []
  let max = -Infinity
  while (queue1.length) {
    let node = queue1.shift()
    max = Math.max(max, node.val)
    if (node.left) {
      queue2.push(node.left)
    }
    if (node.right) {
      queue2.push(node.right)
    }
    if (!queue1.length) {
      result.push(max)
      max = -Infinity
      queue1 = queue2
      queue2 = []
    }
  }
  return result
};
// @lc code=end

