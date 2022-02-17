---
title: "双指针到底有什么用？"
date: "2022-02-17"
tags: [LeetCode, Algorithm]
categories: [📝 算法题解]
publish: true
---

双指针一般与链表、数组等线性数据结构配合出现，其主要目的是帮助定位链表中的结点，根据用法不同可分为两种：

-   左右指针: 常用于定位链表的中间结点，或者逆序数组，参考[876. 链表的中间结点](https://leetcode-cn.com/problems/middle-of-the-linked-list/)
-   快慢指针：利用快慢指针之间的位置差值或者移动速率的差值，快速根据逆序值定位到链表中的任何结点。参考[19. 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

