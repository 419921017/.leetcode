/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null) {
    return;
  }
  let middle = getMiddleLinkedList(head);
  let l1 = head;
  let l2 = middle.next;
  middle.next = null;

  l2 = reverseLinkedList(l2);

  mergeLinkedList(l1, l2);
};

function getMiddleLinkedList(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseLinkedList(head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
}
function mergeLinkedList(l1, l2) {
  let l1_temp;
  let l2_temp;
  while (l1 && l2) {
    l1_temp = l1.next;
    l2_temp = l2.next;

    l1.next = l2;
    l1 = l1_temp;

    l2.next = l1;
    l2 = l2_temp;
  }
}
// @lc code=end
