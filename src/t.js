// #region 逻辑1
new Promise((resole) => {
  // var 换成 let 就不会有闭包问题了
  for (var i = 0; i <= 3; i++) {
    setTimeout(() => {
      resole(i);
      console.log(i);
    }, 1000);
  }
}).then((res) => {
  console.log('最终结果', res);
});
// #endregion

// #region 逻辑2
Promise.resolve()
  .then(() => {
    console.log(0); // 第1轮：输出 0
    /**
     * 返回一个 thenable 时，规范要求执行 Promise 解包流程，多出 2个额外微任务 tick：
     * tick+1：调用返回 Promise 的 .then(resolve, reject)
     * tick+2：resolve 被触发，外层 Promise 才真正 fulfilled
     */
    // return Promise.resolve(4);

    // 直接返回一个普通值，外层 Promise 立即 fulfilled，不会有额外的微任务 tick
    return 4;
  })
  .then((res) => {
    console.log(res);
  });

Promise.resolve()
  .then(() => {
    console.log(1); // 第1轮：输出 1
  })
  .then(() => {
    console.log(2); // 第2轮：输出 2
  })
  .then(() => {
    console.log(3); // 第3轮：输出 3
  })
  .then(() => {
    console.log(5); // 第4轮：输出 5
  });
// #endregion
