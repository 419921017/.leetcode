/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let res = [];
  while (stack.length) {
    let bit = stack.pop();
    bit.left && stack.push(bit.left);
    bit.right && stack.push(bit.right);
    bit.val && res.push(bit.val);
  }
  return res.reverse();
};
// @lc code=end
