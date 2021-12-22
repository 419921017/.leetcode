/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 哨兵元素的指针指向cur
  // let res = new ListNode(null, head);
  // let cur = res;
  // let pre = res;
  // let index = 0;
  // while (head.next) {
  //   head.next = head.next.next;
  //   index++;
  //   if (index == n - 1) {
  //     cur = cur.next;
  //     pre = pre.next;
  //   }
  // }
  // pre.next = pre.next.next;
  // return head;
  //
  // let dummy = new ListNode(-1, head);
  // let slow = head;
  // let fast = head;
  // let index = 0;
  // while (fast != null) {
  //   fast = fast.next;
  //   index++;
  //   if (index > n - 1) {
  //     slow = slow.next;
  //   }
  // }
  // slow.next = slow.next.next;
  // return dummy;
  //
  // let dummy = new ListNode(-1, head);
  // let slow = head,
  //   fast = head,
  //   pre = head;
  // while (n > 0) {
  //   fast = fast.next;
  //   n--;
  // }
  // while (fast != null) {
  //   pre = slow;
  //   slow = slow.next;
  //   fast = fast.next;
  // }
  // pre.next = pre.next.next;
  // return dummy;

  let slow = head,
    fast = head;
  for (let i = 0; i < n; i++) {
    if (fast.next) {
      fast = fast.next;
    } else {
      return head.next;
    }
  }
  while (fast !== null && fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}
// @lc code=end
