// 节点类
class SinglyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyList {
  constructor() {
    this.head = new SinglyListNode(null);
    this.tail = this.head;
    this.size = 0;
  }

  addFirst(e) {
    const newNode = new SinglyListNode(e);
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (this.size === 0) {
      this.tail = newNode;
    }
    this.size++;
  }

  addLast(e) {
    const newNode = new SinglyListNode(e);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  add(index, element) {
    this.checkPositionIndex(index);

    if (index === this.size) {
      this.addLast(element);
      return;
    }

    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const newNode = new SinglyListNode(element);
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
    }
    const first = this.head.next;
    this.head.next = first.next;
    if (this.size === 1) {
      this.tail = this.head;
    }
    this.size--;
    return first.val;
  }

  removeLast() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
    }

    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next;
    }
    const val = this.tail.val;
    prev.next = null;
    this.tail = prev;
    this.size--;
    return val;
  }

  remove(index) {
    this.checkElementIndex(index);

    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }

    const nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    // 删除的是最后一个元素
    if (index === this.size - 1) {
      this.tail = prev;
    }
    this.size--;
    return nodeToRemove.val;
  }

  // ***** 查 *****

  getFirst() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
    }
    return this.head.next.val;
  }

  getLast() {
    if (this.isEmpty()) {
      throw new Error('NoSuchElementException');
    }
    return this.tail.val;
  }

  get(index) {
    this.checkElementIndex(index);
    const p = this.getNode(index);
    return p.val;
  }

  // ***** 改 *****

  set(index, element) {
    this.checkElementIndex(index);
    const p = this.getNode(index);

    const oldVal = p.val;
    p.val = element;

    return oldVal;
  }

  // ***** 其他工具函数 *****
  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  isElementIndex(index) {
    return index >= 0 && index < this.size;
  }

  isPositionIndex(index) {
    return index >= 0 && index <= this.size;
  }

  // 检查 index 索引位置是否可以存在元素
  checkElementIndex(index) {
    if (!this.isElementIndex(index)) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }
  }

  // 检查 index 索引位置是否可以添加元素
  checkPositionIndex(index) {
    if (!this.isPositionIndex(index)) {
      throw new Error(`Index: ${index}, Size: ${this.size}`);
    }
  }

  // 返回 index 对应的 Node
  // 注意：请保证传入的 index 是合法的
  getNode(index) {
    let p = this.head.next;
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
  }
}

// 示例使用
const list = new SinglyList();
list.addFirst(1);
list.addFirst(2);
list.addLast(3);
list.addLast(4);
list.add(2, 5);

console.log(list);

console.log(list.removeFirst()); // 2
console.log(list.removeLast()); // 4
console.log(list.remove(1)); // 5

console.log(list.getFirst()); // 1
console.log(list.getLast()); // 3
console.log(list.get(1)); // 3
