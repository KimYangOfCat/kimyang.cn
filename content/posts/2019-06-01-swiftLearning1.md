---
title: "Introduction to iOS11, Xcode 9 and Swift 4"
date: 2019-06-01T23:23:09+08:00
draft: false
tags: ["Swift","iOS"]
categories: ["iOS 开发"]
---

这是学习swift的笔记系列，学习的课程是[斯坦福  iOS11 swift语言](https://www.bilibili.com/medialist/play/ml148451180)。

今天学习的是课程的第一集：[**introduction to iOS11, Xcode 9 and Swift 4**](https://www.bilibili.com/video/av16339375/?p=1)

#### What's in iOS ?

我们可以将 iOS 分为 Core OS、Core Services、Media 和 Cocoa Touch 四层，最前面一层最接近硬件，最后面一层最接近用户。下面详细解释每一层的作用：

+ Core OS：iOS 系统其实是 Unix 系统，它是BSD版本的Unix，在其中运行的程序大多都是C语言写的。

![Core OS](https://blog-img-1256389522.cos.ap-chengdu.myqcloud.com/SwiftLearning/p1.png)
其中 OSX Kernel 指的是苹果美国苹果公司(Apple .Inc)于 WWDC 2013 公布的 OS X 操作系统，名称Mavericks；Mach 3.0 指的是一个由卡内基梅隆大学开发的用于支持操作系统研究的操作系统内核；BSD 指的是伯克利软件套件(Berkeley Software Distribution)是 Unix 的衍生系统，1970 年代由加州大学伯克利分校开创，其特点是稳定和安全。

+ Core Services：是对 Core OS 层面向对象的封装

![Core Services](https://blog-img-1256389522.cos.ap-chengdu.myqcloud.com/SwiftLearning/p2.png)

+ Media: 媒体处理层

![Media](https://blog-img-1256389522.cos.ap-chengdu.myqcloud.com/SwiftLearning/p3.png)

+ Cocoa Touch：负责用户界面UI交互

![Cocoa Touch](https://blog-img-1256389522.cos.ap-chengdu.myqcloud.com/SwiftLearning/ppng.png)

所以第一节课的重点部分就只有这么一点点儿了，当然每张图里面还有许多的内容值得去挖掘。然后后面就是实际的代码演示啦！跟着做就好！冲冲冲！
