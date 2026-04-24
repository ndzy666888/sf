// 基数排序
function radixSortLSD(nums) {
  let min = Infinity;
  for (let num of nums) {
    min = Math.min(min, num);
  }

  // 根据最小元素，将所有元素转化为从零开始的非负数
  const offset = -min;
  for (let i = 0; i < nums.length; i++) {
    nums[i] += offset;
  }

  let max = -Infinity;
  for (let num of nums) {
    max = Math.max(max, num);
  }

  // 计算最大元素的位数
  let maxLen = 0;
  while (max > 0) {
    max = Math.floor(max / 10);
    maxLen++;
  }

  // 从低位到高位，依次对每一位进行计数排序
  for (let k = 0; k < maxLen; k++) {
    countSort(nums, k);
  }

  // 将所有元素转化回原来的值
  for (let i = 0; i < nums.length; i++) {
    // @visualize color *nums[i] #7cd930
    nums[i] -= offset;
  }
}

// 基数排序使用的计数排序算法函数
// 已经确保 nums 中的元素都是非负数
// k 是当前需要排序的位数
function countSort(nums, k) {
  // 基数排序中每一位十进制数的取值范围是 0~9
  const count = new Array(10).fill(0);

  // 对每个元素的第 k 位进行计数
  for (let num of nums) {
    const digit = Math.floor(num / Math.pow(10, k)) % 10;
    count[digit]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 按照第 k 位的值对元素进行排序
  const sorted = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const digit = Math.floor(nums[i] / Math.pow(10, k)) % 10;
    sorted[count[digit] - 1] = nums[i];
    count[digit]--;
  }

  // 把排序结果复制回原数组
  for (let i = 0; i < nums.length; i++) {
    // @visualize color *nums[i] #ff??00 k
    nums[i] = sorted[i];
  }
}

let nums = [29, 157, 239, 139, -120, 155, 50];
// @visualize shape nums rect
radixSortLSD(nums);
