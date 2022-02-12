---
title: "「LCP22.黑白方格画」题解"
date: 2021-04-08
tags: [LeetCode, Algorithm]
categories: [📝 算法题解]
---

# [LCP22.黑白方格画](https://leetcode-cn.com/problems/ccw6C7/)

## 题目描述

小扣注意到秋日市集上有一个创作黑白方格画的摊位。摊主给每个顾客提供一个固定在墙上的白色画板，画板不能转动。画板上有 `n * n` 的网格。绘画规则为，小扣可以选择任意多行以及任意多列的格子涂成黑色，所选行数、列数均可为 0。

小扣希望最终的成品上需要有 `k` 个黑色格子，请返回小扣共有多少种涂色方案。

注意：两个方案中任意一个相同位置的格子颜色不同，就视为不同的方案。<!-- more -->

**示例 1：**

> 输入：`n = 2, k = 2`
>
> 输出：`4`
>
> 解释：一共有四种不同的方案：
> 第一种方案：涂第一列；
> 第二种方案：涂第二列；
> 第三种方案：涂第一行；
> 第四种方案：涂第二行。

**示例 2：**

> 输入：`n = 2, k = 1`
>
> 输出：`0`
>
> 解释：不可行，因为第一次涂色至少会涂两个黑格。

**示例 3：**

> 输入：`n = 2, k = 4`
>
> 输出：`1`
>
> 解释：共有 2\*2=4 个格子，仅有一种涂色方案。

**限制：**

- `1 <= n <= 6`
- `0 <= k <= n * n`

**相关信息**：

- 难度：简单
- 标签：无

## 题解

本题所求为不同的方案数，这个方案数由两部分得出，可行的行列选择方案数以及每个行列的选择方案的组合数。这个可行的意思就是你所选择的行列数涂抹的格子数恰好等于 k，即 k=n _ row + n _ col - col \* row

### 方法一：阶乘+组合+双循环

```javascript
/*
执行用时：72 ms, 在所有 JavaScript 提交中击败了 92.94% 的用户
内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了 54.12%的用户
*/
var paintingPlan = function (n, k) {
  //判断边界
  if (k === n * n || k === 0) return 1; //两个if顺序不可乱
  if (k < n || k > n * n) return 0;
  function factorial_recursion(n) {
    //递归阶乘，这里的阶乘函数有一定局限性，可能溢出，但是本题给的范围不会超出的。
    return n < 1 ? 1 : n * factorial_recursion(n - 1);
  }
  function C(n, m) {
    //组合数
    return (
      factorial_recursion(n) /
      (factorial_recursion(m) * factorial_recursion(n - m))
    );
  }
  let out = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (n * i + (n - i) * j === k) {
        //判断所选行列数是否满足k
        out += C(n, i) * C(n, j); //统计方案数
      }
    }
  }
  return out;
};
```

### 方法二：阶乘+组合+单循环

前面方法的双循环可以通过反向计算所选的行列数值是否符合要求，来变为单循环，减少空间和时间消耗。简单来说就是由 k=n _ row + n _ col - col * row 公式，在给定 k 和 col 的基础上，可以计算出 row = (k-n*col)/(n-col)，可以通过判断 row 是否合法来减少一层循环。

```javascript
/*
执行用时：76 ms, 在所有 JavaScript 提交中击败了87.06%的用户
内存消耗：37.6 MB, 在所有 JavaScript 提交中击败了63.53%的用户
*/
var paintingPlan = function (n, k) {
  //判断边界
  if (k === n * n || k === 0) return 1; //两个if顺序不可乱
  if (k < n || k > n * n) return 0;
  function factorial_recursion(n) {
    //递归阶乘
    return n < 1 ? 1 : n * factorial_recursion(n - 1);
  }

  function C(n, m) {
    //组合数
    return (
      factorial_recursion(n) /
      (factorial_recursion(m) * factorial_recursion(n - m))
    );
  }
  let out = 0;
  for (let col = 0; col <= n; col++) {
    const row = (k - col * n) / (n - col);
    if (row >= 0 && row % 1 === 0) {
      //判断row 是否为非负整数
      out += C(n, col) * C(n, row); //统计方案数
    }
  }
  return out;
};
```

### 方法三：利用阶乘数组

由于题目给定的 n 的范围是 1 <= n <= 6，比较小，所以有同学将 0-6 的所有阶乘都计算出来了，如： [1, 1, 2, 6, 24, 120, 720]；然后在计算组合数的时候，便使用这个数组来替换计算阶乘的过程，达到提升运行效率的目的。但是这中方法的健壮性不强，一旦题目范围更改，整个方法都将失效，故并不推荐。

```javascript
/*
执行用时：88 ms, 在所有 JavaScript 提交中击败了36.47%的用户
内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了35.29%的用户
*/
//看起这种方法应该能节省部分计算步骤，但是不知为何从结果上看，效率并没有想象中提升，玄学。
var paintingPlan = function (n, k) {
  //判断边界情况
  if (k === n * n || k === 0) return 1;
  if (k > n * n || k < n) return 0;
  //实现存好的阶乘数组
  let arr = [1, 1, 2, 6, 24, 120, 720];
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (n * j + n * i - j * i === k)
        //替换了阶乘计算，但是组合数仍然需要计算
        count +=
          ((arr[n] / (arr[j] * arr[n - j])) * arr[n]) / (arr[i] * arr[n - i]);
    }
  }
  return count;
};
```

```javascript
var paintingPlan = function (n, k) {
  if (k === n * n || k === 0) return 1;
  if (k > n * n || k < n) return 0;
  let arr = [1, 1, 2, 6, 24, 120, 720];
  let count = 0;
  let j;
  for (let i = 0; i < n; i++) {
    j = (k - n * i) / (n - i);
    if (Number.parseInt(j) == j && j < n && j >= 0)
      //其实这里j<n 这个值不必判断，因为j值不可能大于n，除非i取负值
      count +=
        ((arr[n] / (arr[j] * arr[n - j])) * arr[n]) / (arr[i] * arr[n - i]);
  }
  return count;
};
```

------------这两段代码来自[题解：2020.10.20 - 黑白方格画](https://leetcode-cn.com/problems/ccw6C7/solution/20201020-hei-bai-fang-ge-hua-by-vincent-157/), 感谢～

以上就是本题的所有题解啦，感谢你能看到这里，如果本文对你有所帮助的话，别忘了给一个点赞三连嗷～
