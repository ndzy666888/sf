class DoublyListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  // 虚拟头尾节点
  constructor() {
    this.head = new DoublyListNode(null);
    this.tail = new DoublyListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  // ***** 增 *****

  addLast(e) {
    const x = new DoublyListNode(e);
    const temp = this.tail.prev;
    temp.next = x;
    x.prev = temp;
    // temp <-> x

    x.next = this.tail;
    this.tail.prev = x;
    // temp <-> x <-> tail
    this.size++;
  }

  addFirst(e) {
    const x = new DoublyListNode(e);
    const temp = this.head.next;
    // head <-> temp
    temp.prev = x;
    x.next = temp;

    this.head.next = x;
    x.prev = this.head;
    // head <-> x <-> temp
    this.size++;
  }

  add(index, element) {
    this.checkPositionIndex(index);
    if (index === this.size) {
      this.addLast(element);
      return;
    }

    // 找到 index 对应的 Node
    const p = this.getNode(index);
    const temp = p.prev;
    // temp <-> p

    // 新要插入的 Node
    const x = new DoublyListNode(element);

    p.prev = x;
    temp.next = x;

    x.prev = temp;
    x.next = p;

    // temp <-> x <-> p

    this.size++;
  }

  // ***** 删 *****

  removeFirst() {
    if (this.size < 1) {
      throw new Error('No elements to remove');
    }
    // 虚拟节点的存在是我们不用考虑空指针的问题
    const x = this.head.next;
    const temp = x.next;
    // head <-> x <-> temp
    this.head.next = temp;
    temp.prev = this.head;

    // head <-> temp

    this.size--;
    return x.val;
  }

  removeLast() {
    if (this.size < 1) {
      throw new Error('No elements to remove');
    }
    const x = this.tail.prev;
    const temp = x.prev;
    // temp <-> x <-> tail

    this.tail.prev = temp;
    temp.next = this.tail;

    // temp <-> tail

    this.size--;
    return x.val;
  }

  remove(index) {
    this.checkElementIndex(index);
    // 找到 index 对应的 Node
    const x = this.getNode(index);
    const prev = x.prev;
    const next = x.next;
    // prev <-> x <-> next
    prev.next = next;
    next.prev = prev;

    this.size--;

    return x.val;
  }

  // ***** 查 *****

  get(index) {
    this.checkElementIndex(index);
    // 找到 index 对应的 Node
    const p = this.getNode(index);

    return p.val;
  }

  getFirst() {
    if (this.size < 1) {
      throw new Error('No elements in the list');
    }

    return this.head.next.val;
  }

  getLast() {
    if (this.size < 1) {
      throw new Error('No elements in the list');
    }

    return this.tail.prev.val;
  }

  // ***** 改 *****

  set(index, val) {
    this.checkElementIndex(index);
    // 找到 index 对应的 Node
    const p = this.getNode(index);

    const oldVal = p.val;
    p.val = val;

    return oldVal;
  }

  // ***** 其他工具函数 *****

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  getNode(index) {
    this.checkElementIndex(index);
    let p = this.head.next;
    // TODO: 可以优化，通过 index 判断从 head 还是 tail 开始遍历
    for (let i = 0; i < index; i++) {
      p = p.next;
    }
    return p;
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

  display() {
    console.log(`size = ${this.size}`);
    let p = this.head.next;
    let str = '';
    while (p !== this.tail) {
      str += `${p.val} <-> `;
      p = p.next;
    }
    console.log(str + 'null');
  }
}

// Testing the DoublyList class
const list = new DoublyList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);
list.addFirst(0);
list.add(2, 100);
list.removeFirst();
list.removeLast();
list.remove(2);
list.set(1, 200);

list.display();
