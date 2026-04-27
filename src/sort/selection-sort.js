// 选择排序 —— 双层 for 循环版本
// 每次从未排序部分选出最小值，放到已排序部分的末尾
function sort(nums) {
  const n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    // 假设当前 i 位置是未排序部分的最小值
    let minIndex = i;

    // 在未排序部分 [i+1, n) 中寻找更小的值
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }

    // 如果最小值不是当前位置，交换
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
}

const nums = [3, 4, 1, 5, 9, 2, 1, 6];

sort(nums);

console.log(nums);
