/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween1 = function (head, left, right) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let pre = dummyNode.next;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let rightNode = pre;

  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }

  let leftNode = pre.next;
  let current = rightNode.next;

  pre.next = null;
  rightNode.next = null;

  reverseLinkedList(leftNode);

  pre.next = rightNode;
  leftNode.next = current;

  return dummyNode.next;
};

function reverseLinkedList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
}
var reverseBetween = function (head, left, right) {
  let dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let pre = dummyNode;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let cur = pre.next;

  for (let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }

  return dummyNode.next;
};

// @lc code=end
