/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight1 = function (head, k) {
  if (k == 0 || !head || !head.next) {
    return head;
  }
  let n = 1;
  let cur = head;
  while (cur && cur.next) {
    cur = cur.next;
    n++;
  }

  // 然后我们找到新链表的最后一个节点
  //（即原链表的第 (n - 1) - (k \bmod n)(n−1)−(k % n) 个节点）
  let add = n - (k % n);

  if (add == n) {
    return head;
  }
  // 闭合链表
  cur.next = head;

  while (add) {
    cur = cur.next;
    add--;
  }

  const ret = cur.next;
  cur.next = null;
  return ret;
};

var rotateRight = function (head, k) {
  let n = 1;
  let cur = head;
  while (cur.next) {
    cur = cur.next;
    n++;
  }
  console.log(n);
  let num = n - (k % n);
  if (num == 0) {
    return head;
  }
  cur.next = head;
  while (num > 0) {
    cur = cur.next;
    num--;
  }
  let ret = cur.next;
  cur.next = null;
  return ret;
};

// @lc code=end
