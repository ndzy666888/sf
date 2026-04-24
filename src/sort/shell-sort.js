// 希尔排序算法代码
function sort(nums) {
  let n = nums.length;

  // gap 表示分组间隔，每轮缩小一半
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // 对每个分组做插入排序
    for (let i = gap; i < n; i++) {
      for (let j = i; j >= gap; j -= gap) {
        if (nums[j] < nums[j - gap]) {
          [nums[j], nums[j - gap]] = [nums[j - gap], nums[j]];
        } else {
          break;
        }
      }
    }
  }

  console.log(nums);
}

let nums = [3, 1, 4, 1, 5, 9, 2, 6];

sort(nums);
