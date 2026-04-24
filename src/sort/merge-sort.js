// 归并排序算法
// 你可以多次点击 merge(nums, lo, mid, hi) 这一行代码，即可看到归并排序的递归过程和排序效果
var mergeSort = function (nums) {
  // 先给辅助数组开辟内存空间
  let temp = new Array(nums.length);
  // @visualize shape temp rect

  // 定义：将子数组 nums[lo..hi] 进行排序
  // @visualize status(nums.slice(lo, hi + 1))
  // @visualize return(nums.slice(lo, hi + 1))
  var sort = function (nums, lo, hi) {
    // @visualize bind nums[lo]
    // @visualize bind nums[hi]
    if (lo === hi) {
      // 单个元素不用排序
      return;
    }
    // 这样写是为了防止溢出，效果等同于 (hi + lo) / 2
    // @visualize bind nums[mid]
    let mid = lo + Math.floor((hi - lo) / 2);
    // 先对左半部分数组 nums[lo..mid] 排序
    // @visualize choose(`sort nums[${lo}, ${mid}]`)
    sort(nums, lo, mid);
    // @visualize unchoose()
    // 再对右半部分数组 nums[mid+1..hi] 排序
    // @visualize choose(`sort nums[${mid + 1}, ${hi}]`)
    sort(nums, mid + 1, hi);
    // @visualize unchoose()

    // 将两部分有序数组合并成一个有序数组
    merge(nums, lo, mid, hi);
  };

  // 将 nums[lo..mid] 和 nums[mid+1..hi] 这两个有序数组合并成一个有序数组
  var merge = function (nums, lo, mid, hi) {
    // 先把 nums[lo..hi] 复制到辅助数组中
    // 以便合并后的结果能够直接存入 nums
    for (let i = lo; i <= hi; i++) {
      temp[i] = nums[i];
    }

    // 数组双指针技巧，合并两个有序数组
    let i = lo,
      j = mid + 1;
    // @visualize bind temp[i] temp[j] nums[p]
    for (let p = lo; p <= hi; p++) {
      if (i === mid + 1) {
        // 左半边数组已全部被合并
        nums[p] = temp[j++];
      } else if (j === hi + 1) {
        // 右半边数组已全部被合并
        nums[p] = temp[i++];
      } else if (temp[i] > temp[j]) {
        nums[p] = temp[j++];
      } else {
        nums[p] = temp[i++];
      }
      // @visualize color *nums[p] #7cd930
    }
  };

  // 排序整个数组（原地修改）
  sort(nums, 0, nums.length - 1);

  console.log(nums);
};

// 测试代码
let nums = [3, 7, 5, 2, 6, 4, 5, 1];
// @visualize shape nums rect
mergeSort(nums);
