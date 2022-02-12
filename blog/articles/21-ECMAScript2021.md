---
title: "有关 ECMAScript 最新版本的所有信息｜ECMAScript 2021"
date: 2021-05-19
tags: [ECMA, 前端]
categories: [🌏 翻译校对]
---

在本文中，我们将通过一些示例代码向大家介绍 ECMAScript 2021 最新版本的功能。

![](https://picbed.kimyang.cn/202109050830831.jpeg)

<!-- more -->

## 新的功能

### 1. String.replaceAll( )

将查找到的目标字符串的所有实例替换为所需的字符串：

```js
const fact =
  "JavaScript is the best web scripting language. JavaScript can be used for both front end and backend";

console.log(fact.replaceAll("JavaScript", "TypeScript"));

// 输出：
// "TypeScript is the best web scripting language. TypeScript can be used for both front end and backend";
```

与之前的 `replace()` 方法（仅将目标字符串的第一个匹配项替换为所需的字符串）相比：

```js
const fact =
  "JavaScript is the best web scripting language. JavaScript can be used for both front end and backend";

console.log(fact.replace("JavaScript", "TypeScript"));

// 输出：
// "TypeScript is the best web scripting language. JavaScript can be used for both front end and backend";
```

### 2. Promise.any( )

只要所提供的`Promise` 中的任何一个得到解决，`Promise.any()` 就会直接被解决，而 `Promise.all()` 则等待所有的 `Promise` 都得到解决后才会标记为解决，基本上与 `Promise.all()` 相反。

如果 **“兑现了一个 `Promise`”**：

```js
const promises = [
  Promise.reject("错误 A"),
  Promise.reject("错误 B"),
  Promise.resolve("结果"),
];

Promise.any(promises).then((result) => assert.equal(result, "结果")); //true
```

如果 **“所有 `Promise` 都是被拒绝的”**：

```js
const promises = [
  Promise.reject("错误 A"),
  Promise.reject("错误 B"),
  Promise.reject("错误 C"),
];

Promise.any(promises).catch((aggregateError) => {
  assert.deepEqual(aggregateError.errors, ["错误 A", "错误 B", "错误 C"]); //true
});
```

### 3. 逻辑赋值操作符

![](https://picbed.kimyang.cn/202109050831375.png)

`a ||= b` 等同于 `a || (a = b)`（短路运算符）

为何不是 `a = a || b`？

好吧，因为对于前一个表达式，只有在 `a` 计算为 `false` 时，赋值才会被执行。因此，前者仅在必要时才会被赋值。相反，后一个表达式始终执行赋值。

`a ||= b` 的一个例子：

```js
var a = 1;
var b = 2;

a ||= b;

console.log(a); // 1
```

`a &&= b` 的一个例子：

```js
var a = 1;
var b = 2;

a &&= b;

console.log(a); // 2
```

`a ??= b` 的一个例子：

```js
var a;
var b = 2;

a ??= b;

console.log(a); // 2
```

### 4. 数字分隔符

现在，我们可以使用 **下划线（`_`）** 作为数字文字和 bigInt 文字的分隔符。这将帮助开发人员提高其数字文字的可读性（“下划线”基本上会充当我们平日生活中书写数字时候所用的“逗号”（用于在不同的数字组之间提供分隔））。

```js
let budget = 1000000000000; // 可以这样写：

let budget = 1_000_000_000_000;

console.log(budget); // 会打印正常数字：

// 输出：
// 1000000000000
```

希望本文能帮助您了解 ECMAScript 的最新版本。感谢您的阅读，如有任何疑问，请随时发表评论。

参考资料：

- [https://dev.to/faithfulojebiyi/new-features-in-ecmascript-2021-with-code-examples-302h](https://dev.to/faithfulojebiyi/new-features-in-ecmascript-2021-with-code-examples-302h)
- [https://2ality.com/2020/09/ecmascript-2021.html](https://2ality.com/2020/09/ecmascript-2021.html)

---

- 原文地址：[Everything about the latest ECMAScript release | ECMAScript 2021](https://levelup.gitconnected.com/everything-about-the-latest-ecmascript-release-ecmascript-2021-c011e817f41a)
- 原文作者：[Kritika Sharma](https://medium.com/@kritikasharmablog)
- 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
- 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/everything-about-the-latest-ecmascript-release-ecmascript-2021.md](https://github.com/xitu/gold-miner/blob/master/article/2021/everything-about-the-latest-ecmascript-release-ecmascript-2021.md)
- 译者：[霜羽 Hoarfroster](https://github.com/Hoarfroster)
- 校对者：[Kim Yang](https://github.com/KimYangOfCat)、[Tong-H](https://github.com/Tong-H)
