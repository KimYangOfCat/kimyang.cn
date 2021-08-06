---
title: "简述 JavaScript 高阶函数的开发使用"
date: 2021-06-26
tags: [JavaScript]
categories: [🌏 翻译校对]
---
# 简述 JavaScript 高阶函数的开发使用

![](https://cdn-images-1.medium.com/max/2400/1*KQnA_VQkW6DVV-4zLBu_-Q.png)

作为一个 JavaScript 开发者，会经常使用高阶函数，所以你务必对这些函数有正确的理解。目前，我看到部分开发者经常对 `reduce()` 的使用感到困惑。因此，我的这篇文章将会详细说明，你要试着逐步地去理解它，我相信你一定能掌握。

## 高阶函数

简而言之，高阶函数是那些将其他函数作为参数或返回其他函数的函数。在高阶函数中作为参数传递的函数被称为回调。

高阶函数的优势：

* 它们可以帮助我们写出简洁的代码。
* 由于是简洁的代码，调试工作会更加容易。

现在 JavaScript 有一些内置的高阶函数，你可能已经在不知不觉中就使用它们了，例如 `filter()`、`reduce()`、`sort()` 和 `forEach()`。

## filter()

`filter` 方法返回一个新的元素数组，该数组通过一个回调函数提供的特定测试。由于 `filter` 需要一个回调函数，因此 `filter()` 被称为高阶函数。

传入高阶函数 `filter()` 的回调函数参数如下：

* 元素的数值（必须）
* 元素的索引（可选）
* 数组对象（可选）

```js
let arr = [1,2,3,4,5]; 

const resultant Array = arr.filter((element ) => {
    return element > 3; 
})

console.log(resultantArray); // [4, 5]
```

在以上示例中，`arr` 数组中的元素被依次传递到 `filter()` 回调方法中执行一个特定的测试，即 `element > 3`。那些通过测试的元素被推送到 `resultantArray` 中，这就是为何输出结果是 [4,5] ，因为 4 和 5 是通过测试的元素。

参数 `element` 将依次获得 `arr` 数组的元素值，它首先变成 1，然后测试 `1 > 3`，如果为真，1 将被推到结果数组中，否则将跳到下一个元素。

示例：

```js
// 筛选年龄小于 18 岁的人

const ageArray = [10, 12, 35, 55, 40, 32, 15]; 

const filterAgeArray = ageArray.filter((age)=> {
    return age < 18; >
}); 

console.log(filterAgeArray); 
// [10, 12, 15]

-----------------

// 筛选正数

const numArray = [-2, 1, 50, 20, -47, -40]; 

const positiveArray = numArray.filter((num) => {
    return num > 0; 
}); 

console.log(positiveArray);
// [1, 50, 20]

-----------------

// 筛选包含 `sh` 的名字

const namesArray = ["samuel", "rahul", "harsh", "hitesh"]; 

const filterNameArray = namesArray.filter((name) =>{
    return name.includes("sh"); 
}); 

console.log(filterNameArray); 
// ["harsh", "hitesh"]
```

## map()

顾名思义，`map()` 方法用于将现有数组的值映射为新的值，并将新的值推送到一个新的数组中，然后返回这个新的数组。现在 `map()` 也需要一个回调函数，因此它被称为高阶函数。

现在，传入 `map()` 方法的回调函数需要三个参数：

* 元素的数值（必须）
* 元素的索引（可选）
* 数组对象（可选）

```js
const numArray = [1, 5, 3, 6, 4, 7]; 

const increasedArray = numArray.map((element) => {
    return element + 1; 
}); 

console.log(increasedArray);
[2, 6, 4, 7, 5, 8]
```

就像在 `filter()` 中一样，`numArray` 的元素将被依次传递到 `map()` 回调函数中（作为 `element` 参数），它们将被映射成一个 `element + 1` 的新值，然后它们将被放进 `increasedArray`。

首先 `1` 将被作为元素参数传递并被映射到一个新的值，即 `element + 1`，这样 `1 + 1`（因为这里的元素是 `1`），即 `2` 将被推入`increasedArray` 中。接下来对 `5、3、6、4、7` 重复以上过程。

示例：

```js
// 对数组中的每个数字进行指数化处理

const numArray = [2, 3, 4, 5, 15]; 

const poweredArray = numArray.map((number) => {
    return number * number; 
}); 

console.log(poweredArray); 
// [4, 9 ,16, 25, 144, 225]

// 设置学生的分数

const studentsArray = [
    {
        name: "Rahul", 
        marks: 45, 
    }, 
    {
        name: "Samuel", 
        marks: 85, 
    }, 
    {
        name: "Chris", 
        marks: 25, 
    },
]; 

const ScoreArray = studentsArray.map((student) => {
    return student.marks; 
}); 

console.log(scoreArray); 
// [45, 85, 25]
```

## reduce()

`reduce()` 方法用于将数组还原为一个单一的值，就像 `filter()` 和 `map()` 一样，`reduce()` 也需要一个回调函数作为参数，因此它被称为高阶函数。

但是 `reduce()` 除了回调函数之外还需要一个参数，那就是 `initialValue（初始值）`。同样，像 `filter()` 和 `map()` 一样，传递到 `reduce()` 的回调函数需要一些参数，但传递到 `reduce()` 的回调函数需要 `4` 个参数，而不是 `3` 个。

* 初始值（必须）
* 元素的数值（必须）
* 元素的索引（可选）
* 数组对象（可选）

```js
// reduce() 示例

const numArray = [1, 2, 3, 4, 5]; 

const sum = numArray.reduce((total, num) => {
    return total + num; 
}); 

console.log(sum);
```

首先了解什么是 `total argument`。`total argument` 是由 `reduce()` 函数返回的前一个值，现在当 `reduce()` 第一次运行时，将没有前一个返回值，因此第一次的 `total argument` 等于 `initialValue`（传入 `reduce()` 的第二个参数）。

现在示例中也没有使用 `initialValue`，当我们不传递 `initialValue` 时，`reduce()` 方法会跳过 `numArray` 的第一个元素成为 `total argument` 的值，这是什么情况？

在示例中，没有传递 `initialValue`，所以 `numArray` 的第一个元素，如 `1` 将成为 `total argument` 的值，`numArray` 的第二个元素将作为 `num` 参数传递， 函数将返回 `total + num`，如 `1 + 2 = 3`，`3` 将成为 `total` 的新值，现在 `numArray` 的第三个元素将作为 `num` 参数传递到` reduce()` 回调，它将再次返回 `total + num`，即 `3 + 3 = 6`，`6` 将成为 `total` 的新值，以此类推。

上述解释有些混乱难懂，但如果你尝试逐步地学习，就会掌握` reduce()`。

> initialValue（初始值）参数
>
> `initialValue` 是 `total argument` 的初始值，当 `reduce()` 第一次运行时，没有先前的返回值，因此现有数组（在示例中是 `numArray`）的第一个元素成为 `total argument` 的值，所以可以给 ·total argument` 一个初始值，而不是这样做（记住 `initialValue` 将是 `total argument` 的初始值，`total argument` 将成为 `reduce()` 的先前返回值）。

> 注意：当使用 `initialValue` 参数时，`numArray` 不会跳过它的第一个元素，因此每个元素都会被传递到 `reduce()` 回调。

`reduce()` 带有初始值的语法：

```js
const resultantArray = existingArray.reduce((total,element,index.array)=> {
    // 返回某些东西
}, initialValue);
```

---

感谢你的阅读！
> * 原文地址：[All You Need to Know About Higher-Order Functions in JavaScript](https://javascript.plainenglish.io/all-you-need-to-know-about-higher-order-functions-in-javascript-19d30c8cc8e5)
> * 原文作者：[Rahul](https://medium.com/@rahulism)
> * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
> * 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/all-you-need-to-know-about-higher-order-functions-in-javascript.md](https://github.com/xitu/gold-miner/blob/master/article/2021/all-you-need-to-know-about-higher-order-functions-in-javascript.md)
> * 译者：[Zz招锦](https://github.com/zenblo)
> * 校对者：[chzh9311](https://github.com/chzh9311)、[Kim Yang](https://github.com/KimYangOfCat)

