// 从小到大排序数组
let nums = [3, 2, 5, 1, 6, 7, 4];
// @visualize shape nums rect

// 这个 init 方法会把数组可视化成一棵完全二叉树，但不会自动维护堆的性质
// 下面我将利用 sink 和 swim 手动展示原地建堆及排序的过程
let heap = Heap.init(nums);

// 大顶堆的比较函数。如果想从小到大排序数组，需要创建大顶堆
const maxComp = (a, b) => (a > b ? -1 : 1);

// 第一步，在数组上原地建堆
// 有两种方法可以建堆，你可以取消下面代码的注释尝试运行

// 简单的建堆方法，对每个元素调用 swim 即可完成建堆
for (let i = 0; i < nums.length; i++) {
  Heap.swim(heap, i, maxComp, '#blue');
}

// 优化的建堆方法，从最后一个非叶子节点开始，对每个节点调用 sink 完成建堆
// let n = nums.length;
// for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//     Heap.sink(heap, i, n, maxComp);
// }

// 第二步，在数组上原地排序
let heapSize = nums.length;
while (heapSize > 0) {
  Heap.swap(heap, 0, heapSize - 1);
  heapSize--;
  // @visualize bind nums[heapSize]
  // @visualize color *nums[heapSize] #7cd930
  // 由于实在数组原地建堆，所以用 heapSize 标识堆的边界
  // 即 nums[0..heap) 是二叉堆，nums[heap..n) 是已排序的部分
  Heap.sink(heap, 0, heapSize, maxComp, '#orange');
}
// @visualize unbind nums[heapSize]

console.log('sorted', nums);
