/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let preHead = new ListNode();
  let result = preHead;
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      preHead.next = l2;
      l2 = l2.next;
    } else {
      preHead.next = l1;
      l1 = l1.next;
    }
    preHead = preHead.next;
  }
  if (!l1) {
    preHead.next = l2;
  }
  if (!l2) {
    preHead.next = l1;
  }
  return result.next;
};

// @lc code=end
