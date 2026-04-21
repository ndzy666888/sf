export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Node {
  constructor(prev, element, next) {
    this.val = element;
    this.next = next;
    this.prev = prev;
  }
}

export const createLinkedList = function (arr) {
  if (arr == null || arr.length == 0) {
    return null;
  }
  const head = new ListNode(arr[0]);
  let p = head;
  for (let i = 1; i < arr.length; i++) {
    p.next = new ListNode(arr[i]);
    p = p.next;
  }
  return head;
};
