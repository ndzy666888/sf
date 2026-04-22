export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class DoublyListNode {
  constructor(element, prev, next) {
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

const createDoublyLinkedList = function (arr) {
  if (arr === null || arr.length === 0) {
    return null;
  }

  const head = new DoublyListNode(arr[0], null, null);
  let p = head;

  // for 循环迭代创建双链表
  for (let i = 1; i < arr.length; i++) {
    const newNode = new DoublyListNode(arr[i], null, null);
    p.next = newNode;
    newNode.prev = p;
    p = p.next;
  }

  return head;
};

/**
 * @description 遍历单链表
 * @param {ListNode} head 单链表的头节点
 */
function traverseLinkedList(head) {
  let res = '';
  for (let p = head; p != null; p = p.next) {
    res += p.val + ' -> ';
  }
  res += 'null';
  console.log(res);
}

/**
 * @description 在单链表头部插入新节点
 * @param {Number} val 新节点的值
 * @returns {ListNode} 头节点
 */
function insertAtHead(val) {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  const newNode = new ListNode(val);
  newNode.next = head;
  return newNode; // 返回新的头节点
}

/**
 * @description 在单链表尾部插入新节点
 * @param {Number} val 新节点的值
 * @returns {ListNode} 头节点
 */
function insertAtTail(val) {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  const newNode = new ListNode(val);
  if (head === null) {
    return newNode; // 如果链表为空，新节点就是头节点
  }
  let p = head;
  while (p.next !== null) {
    p = p.next;
  }
  p.next = newNode; // 在最后一个节点后面插入新节点
  return head; // 返回原来的头节点
}

/**
 * @description 在单链表中间插入新节点
 * @param {Number} index 插入位置的索引（从0开始）
 * @param {Number} val 新节点的值
 * @returns {ListNode} 头节点
 */
function insertAfterNode(index, val) {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  let p = head;

  for (let i = 0; i < index; i++) {
    p = p.next;
  }

  const newNode = new ListNode(val);
  newNode.next = p.next; // 新节点的 next 指向当前节点的 next
  p.next = newNode; // 当前节点的 next 指向新节点
  return head; // 返回原来的头节点
}

/**
 * @description 删除单链表中的节点
 * @param {Number} index 要删除的节点的索引（从0开始）
 * @returns {ListNode} 头节点
 */
function deleteNode(index) {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  if (index === 0) {
    return head.next; // 删除头节点，返回新的头节点
  }
  let p = head;
  for (let i = 0; i < index - 1; i++) {
    p = p.next;
  }
  p.next = p.next.next; // 跳过要删除的节点
  return head; // 返回原来的头节点
}

/**
 * @description 删除单链表头节点
 * @returns {ListNode} 头节点
 */
function deleteHead() {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  return head.next; // 删除头节点，返回新的头节点
}

// 删除单链表尾节点
function deleteTail() {
  let head = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
  if (head === null || head.next === null) {
    return null; // 如果链表为空或只有一个节点，删除后链表为空
  }
  let p = head;
  while (p.next.next !== null) {
    p = p.next;
  }
  p.next = null; // 删除最后一个节点
  return head; // 返回原来的头节点
}

// 测试插入和删除操作
const h = createLinkedList(Array.from({ length: 5 }, (_, i) => i + 1));
traverseLinkedList(h);
// const newHead = insertAtHead(0);
// traverseLinkedList(newHead);

// const newTail = insertAtTail(6);
// traverseLinkedList(newTail);

// const newMiddle = insertAfterNode(3, 66);
// traverseLinkedList(newMiddle);

// const newDeleted = deleteNode(2);
// traverseLinkedList(newDeleted);

// const newDeletedHead = deleteHead();
// traverseLinkedList(newDeletedHead);

// const newDeletedTail = deleteTail();
// traverseLinkedList(newDeletedTail);
