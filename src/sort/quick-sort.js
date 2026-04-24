// 快速排序算法
// 你可以多次点击 let p = ... 这部分代码，即可看到快排的递归过程和排序效果
var quickSort = function (nums) {
  // @visualize status(nums.slice(lo, hi + 1))
  // @visualize return(nums.slice(lo, hi + 1))
  var sort = function (nums, lo, hi) {
    // @visualize bind nums[lo]
    // @visualize bind nums[hi]
    if (lo >= hi) {
      return;
    }
    // 切分数组，并获取切分点索引
    // @visualize bind nums[p]
    let p = partition(nums, lo, hi);

    // 递归排序左侧和右侧子数组
    // @visualize choose(`partition nums[${lo}, ${p - 1}]`)
    sort(nums, lo, p - 1);
    // @visualize unchoose()

    // @visualize choose(`partition nums[${p + 1}, ${hi}]`)
    sort(nums, p + 1, hi);
    // @visualize unchoose()
  };

  const partition = function (nums, lo, hi) {
    // 选择 nums[lo] 作为切分点元素
    let pivot = nums[lo];
    let i = lo + 1,
      j = hi;
    while (i <= j) {
      while (i < hi && nums[i] <= pivot) i++;
      while (j > lo && nums[j] > pivot) j--;
      if (i >= j) break;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    // 将切分点元素放到正确的位置
    [nums[lo], nums[j]] = [nums[j], nums[lo]];
    // @visualize color *nums[j] #7cd930
    return j;
  };

  // 对整个数组进行递归排序
  sort(nums, 0, nums.length - 1);

  console.log(nums);
};

// 对输入的 nums 进行原地排序
let nums = [3, 1, 7, 5, 9, 2, 8, 4, 1, 6, 5];

quickSort(nums);
