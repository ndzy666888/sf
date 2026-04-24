class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 构建一棵二叉树
const buildTree = function (arr) {
  if (arr.length === 0) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
};

const tree = buildTree([1, 2, 5, 3, 4, null, 6, null, null, null, null, 7]);

// DFS 深度优先搜索
const traverse = function (root) {
  if (root === null) {
    return;
  }
  // 前序位置
  traverse(root.left);
  // 中序位置
  traverse(root.right);
  // 后序位置
};

traverse(tree);

// BFS 广度优先搜索
const levelOrderTraverse = function (root) {
  if (root === null) {
    return;
  }
  let q = [];
  q.push(root);
  // 记录当前遍历到的层数（根节点视为第 1 层）
  let depth = 1;

  while (q.length !== 0) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      // 访问 cur 节点，同时知道它所在的层数
      console.log('depth = ' + depth + ', val = ' + cur.val);

      // 把 cur 的左右子节点加入队列
      if (cur.left !== null) {
        q.push(cur.left);
      }
      if (cur.right !== null) {
        q.push(cur.right);
      }
    }
    depth++;
  }
};

levelOrderTraverse(tree);
