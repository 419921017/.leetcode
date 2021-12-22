/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [root];

  while (stack.length) {
    let bit = stack.pop();
    bit.val && res.push(bit.val);
    bit.right && stack.push(bit.right);
    bit.left && stack.push(bit.left);
  }
  return res;
};

// @lc code=end
