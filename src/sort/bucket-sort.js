// 桶排序（Bucket Sort）是一种基于分布的排序算法，适用于输入数据均匀分布在一个范围内的情况。它的基本思想是将输入数据分到几个桶中，每个桶内的数据再分别进行排序，最后再把各个桶中的数据合并起来。
function bucketSort(nums, bucketCount) {
  // 找到最大和最小元素
  let min = Number.MAX_SAFE_INTEGER,
    max = Number.MIN_SAFE_INTEGER;
  for (let num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  let offset = -min;

  // 计算理论上每个桶需要装的元素个数
  let bucketSize = Math.floor((max - min) / bucketCount) + 1;

  // 初始化桶
  let buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // 将元素分配到桶中
  for (let num of nums) {
    // 用除法向下取整的方式计算桶的索引
    let index = Math.floor((num + offset) / bucketSize);
    buckets[index].push(num);
  }

  // 对每个桶中的元素进行排序
  for (let i = 0; i < bucketCount; i++) {
    let curBucket = buckets[i];
    // @visualize shape curBucket rect
    insertSort(curBucket);
    // @visualize shape curBucket cycle
  }

  // 合并有序桶
  let index = 0;
  for (let i = 0; i < bucketCount; i++) {
    for (let num of buckets[i]) {
      // @visualize color *nums[index] #7cd930
      nums[index++] = num;
    }
  }
}

// 插入排序算法，详见前文「插入排序」
function insertSort(nums) {
  let sortedIndex = 0;
  while (sortedIndex < nums.length) {
    for (let i = sortedIndex; i > 0; i--) {
      if (nums[i] < nums[i - 1]) {
        let tmp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = tmp;
      } else {
        break;
      }
    }
    // @visualize color *nums[sortedIndex] #7cd930
    sortedIndex++;
  }
}

let nums = [29, 25, 40, 3, 49, 9, 37, 7, 22, 21, 43, 18];
// @visualize shape nums rect
bucketSort(nums, 4);
