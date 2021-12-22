/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null) {
    return false;
  }
  let fast = head.next;
  while (fast != null && head != null && fast.next != null) {
    if (fast == head) {
      return true;
    }
    fast = fast.next.next;
    head = head.next;
  }
  return false;
};
// 哈希表
var hasCycle1 = function (head) {
  let map = new Map();
  while (head != null) {
    if (map.has(head)) {
      return true;
    }
    map.set(head, 1);
    head = head.next;
  }
  return false;
};

// JSON.stringify
var hasCycle2 = function (head) {
  try {
    JSON.stringify(head);
  } catch {
    return true;
  }
  return false;
};
// @lc code=end
