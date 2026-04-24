// 计数排序
var sort = function (nums) {
  // 找到最大和最小元素
  // 计算索引偏移量和 count 数组大小
  let min = Infinity,
    max = -Infinity;
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  // 根据最大值和最小值，将元素映射到从 0 开始的索引值
  const offset = -min;
  const count = new Array(max - min + 1).fill(0);

  // 统计每个元素出现的次数
  for (const num of nums) {
    count[num + offset]++;
  }

  // 累加 count 数组，得到的是 nums[i] 在排序后的数组中的结束位置
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // 根据每个元素排序后的索引位置，完成排序
  // 这里注意，我们从后往前遍历 nums，是为了保证排序的稳定性
  const sorted = new Array(nums.length);
  // @visualize shape sorted rect
  for (let i = nums.length - 1; i >= 0; i--) {
    let index = nums[i] + offset;
    sorted[count[index] - 1] = nums[i];
    // @visualize color *sorted[count[index]-1] #7cd930
    count[index]--;
  }
  return sorted;
};

let nums = [2, 3, 2, 0, 2, -3, -1, 3, 0];
// @visualize shape nums rect
let result = sort(nums);
