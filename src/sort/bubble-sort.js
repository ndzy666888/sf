// 能够提前终止的冒泡排序
function sort(nums) {
  let n = nums.length;
  let sortedIndex = 0;

  while (sortedIndex < n) {
    // 加一个布尔变量，记录是否进行过交换操作
    let swapped = false;
    for (let i = n - 1; i > sortedIndex; i--) {
      if (nums[i] < nums[i - 1]) {
        [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]];
        swapped = true;
      }
    }

    // 如果一次交换操作都没有进行，说明数组已经有序，可以提前终止算法
    if (!swapped) {
      break;
    }

    sortedIndex++;
  }
  console.log(nums);
}

let nums = [3, 1, 4, 1, 5, 9, 2, 6];

sort(nums);
