---
title: "16px 或更大的字体大小可以避免 iOS 的表单缩放问题"
date: 2021-05-21
tags: [CSS,前端]
categories: [🌏 翻译校对]
---

[“今天我已经学到的” —— 我从乔什·科莫（Josh W. Comeau）的推特中学习到](https://twitter.com/joshwcomeau/status/1379782931116351490?s=12) 的东西真的是太棒了！！！如果 `<input>` 的 `font-size` 被设定为 `16px` 或更大，那么 iOS 上的 Safari 将正常聚焦到输入表单中。但是，一旦 `font-size` 等于或小于 `15px`，视图窗口就会放大并聚焦到该 `<input>`（或许是因为苹果认为字体太小，因此它会放大以帮助你更清楚地看到自己在做什么）。这个设计是用来增强可访问性的，如果你不想要，请确保 `<input>` 的字体足够大。<!-- more -->

如果你想自己试试，请打开[乔什的 `codepen`](https://codepen.io/joshwcomeau/pen/VwPMPZo)。

总的来说，我还挺喜欢这个功能。它可以帮助人们了解自己在做什么，并且也表了态 —— 苹果不建议开发者在 UI 中使用过小的字体。让人略感遗憾的是（我在这里并没责怪任何人），在不同字体大小的可读性上，并非所有字体都是一样的。比如说，下图是字体大小为 16px 的 *San Francisco* 与 *Caveat* 的对比：

![](https://picbed.kimyang.cn/202109050831146.png)

<small>左边是 *San Francisco*，右边是 *Caveat*。即使 `font-size` 相同，*Caveat* 在外观上看起来也要小得多。</small>

你可以在 Safari 浏览器中打开[调试模式](https://cdpn.io/chriscoyier/debug/MWJxXWz) ，查看[该示例](https://codepen.io/chriscoyier/pen/MWJxXWz)，并更改字体大小以查看会自动放大聚焦与不会放大聚焦的具体表现。

---

> 🔥 将表单输入设置为 1rem（16px）或更大的字体，以防止在点击时 iOS Safari 浏览器自动放大并聚焦到 `input` 元素上。
> 
> 从用户体验的角度来看有很大的不同！
> 
> [comment]: <> "Original Video Link: https://video.twimg.com/tweet_video/EyX2MSaXMAExyQA.mp4"
> 
> ![](https://picbed.kimyang.cn/202109050831477.gif)
> 
> —— Josh W. Comeau @JoshWComeau 9:07, Apr 7, 2021
> 
> ---
>
> 当 Safari 放大时，它似乎希望让该 input 控件的实际字体大小为 16px。在下面两张图中，用户在输入文本时看到的字体大小其实都是 16px。因此更改后，输入文本的阅读体验实际上并没有变得更差！！
> 
> 另外，人们始终可以根据需要手动放大。
> 
> ![](https://picbed.kimyang.cn/202109050831884.png)
> 
> ![](https://picbed.kimyang.cn/202109050831246.png)
> 
> —— Josh W. Comeau @JoshWComeau 9:07, Apr 7, 2021

> * 原文地址：[16px or Larger Text Prevents iOS Form Zoom](https://css-tricks.com/16px-or-larger-text-prevents-ios-form-zoom/)
> * 原文作者：[Chris Coyier ](https://css-tricks.com/author/chriscoyier/)
> * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
> * 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/.md](https://github.com/xitu/gold-miner/blob/master/article/2021/.md)
> * 译者：[霜羽 Hoarfroster](https://github.com/PassionPenguin)
> * 校对者：[Kim Yang](https://github.com/KimYangOfCat)、[Chorer](https://github.com/Chorer)