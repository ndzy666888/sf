// 插入排序算法代码
function sort(nums) {
  let n = nums.length;
  // 维护 [0, sortedIndex) 是有序数组
  let sortedIndex = 0;
  while (sortedIndex < n) {
    // 将 nums[sortedIndex] 插入到有序数组 [0, sortedIndex) 中
    for (let i = sortedIndex; i > 0; i--) {
      if (nums[i] < nums[i - 1]) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
      } else {
        break;
      }
    }
    sortedIndex++;
  }
}

let nums = [3, 1, 4, 1, 5, 9, 2, 6];
sort(nums);
