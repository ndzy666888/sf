import { log } from '../logger.js';

// 选择排序
function sort(nums) {
  const n = nums.length;
  // sortedIndex 是一个分割线
  // 索引 < sortedIndex 的元素都是已排序的
  // 索引 >= sortedIndex 的元素都是未排序的
  // 初始化为 0，表示整个数组都是未排序的
  let sortedIndex = 0;
  log('green', `sortedIndex = ${sortedIndex} ${nums[sortedIndex]}`);
  while (sortedIndex < n) {
    // 找到未排序部分 [sortedIndex, n) 中最小值的索引
    let minIndex = sortedIndex;
    for (let i = sortedIndex + 1; i < n; i++) {
      if (nums[i] < nums[minIndex]) {
        minIndex = i;
      }
    }
    log('red', `最小值的索引：minIndex = ${minIndex} 值：${nums[minIndex]}`);

    // 交换最小值和 sortedIndex 处的元素
    [nums[sortedIndex], nums[minIndex]] = [nums[minIndex], nums[sortedIndex]];

    log('green', `sortedIndex = ${sortedIndex} ${nums[sortedIndex]}`);

    // sortedIndex 后移一位
    sortedIndex++;
  }
}

let nums = [3, 4, 1, 5, 9, 2, 1, 6];

console.time('选择排序耗时');
sort(nums);
console.timeEnd('选择排序耗时');
