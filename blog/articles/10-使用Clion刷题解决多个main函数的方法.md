---
title: "使用 CLion 刷题解决多个main函数问题的终极方法"
date: 2020-06-25
tags: [CLion, LeetCode, C++]
categories: [🔑 奇妙技巧]
---

在写 C++ 的题目的时候经常会遇到这样的问题，写了多个 cpp 文件，在 clion 中编译报错不能同时存在多 main 函数。

如何解决这个问题呢？<!-- more -->

下面列举几种方法：

## 方法 1:重定义 Main

在每个文件中通过重定义的方法来解决，在写某道算法时，对 main 进行重定义，

![20200214091654844](https://picbed.kimyang.cn/202109050806421.jpg)

![20200214091722110](https://picbed.kimyang.cn/202109050806422.jpg)

运行完后再修改回去，这样就能接下去就能再重定义为 main 函数接着运行了。

![20200214091842857](https://picbed.kimyang.cn/202109050806423.jpg)

优点：不需要修改配置文件

缺点：会让源码文件中多出一些奇奇怪怪的代码，降低代码可阅读性！

## 方法 2:手动修改 CmakeList.txt

通过手动添加 add_executable(编译文件名 源码文件地址)

```
cmake_minimum_required(VERSION 3.16)
project(C_AND_C_Plus_Plus_Practise)

set(CMAKE_CXX_STANDARD 14)

add_executable(MAIN main.cpp)

add_executable(CHelloWord ./C_Practise/HelloWord.c)
add_executable(C3test ./C_Practise/3_变量/test.c)
add_executable(DataStructureLove DataStructure/1Introduction/Love.cpp)
add_executable(DataStructureSqList DataStructure/2LinearList/SqList.cpp)
add_executable(DataStructureSqList1 DataStructure/2LinearList/SqList1.cpp)
add_executable(DataStructureLinkList DataStructure/2LinearList/LinkList.cpp)
add_executable(DataStructureLinkList1 DataStructure/2LinearList/LinkList1.cpp)
```

优点：只修改配置文件，不会影响源码的可读性

缺点：每新建一个文件，就得修改配置文件，较为繁琐！

## 方法 3:在 CMake 文件中编写自动生成程序

在 Cmake 文件中编写程序，自动生成编译后的文件名！

###基础版：

```
# 遍历项目根目录下所有的 .cpp 文件
file (GLOB files *.cpp)
foreach (file ${files})
string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
add_executable (${exe} ${file})
message (\ \ \ \ --\ src/${exe}.cpp\ will\ be\ compiled\ to\ bin/${exe})
endforeach ()
```

上边儿这段代码，只会遍历根目录下的 cpp 文件，不会遍历根目录下的二级目录。

###进阶版：

```
# 遍历项目根目录及二级目录下所有的 .cpp 文件
file (GLOB files *.cpp */*cpp)
foreach (file ${files})
string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
add_executable (${exe} ${file})
message (\ \ \ \ --\ src/${exe}.cpp\ will\ be\ compiled\ to\ bin/${exe})
endforeach ()
```

进阶版就是手动添加访问二级目录的规则，同样要访问三级目录就是再添加一个`*/*/*.cpp`

### 最优版：

官方文档提供一个解决方法`GLOB_RECURSE`，它会自动遍历工程文件根目录下的所有文件目录。

```
# 遍历项目根目录下所有的 .cpp 文件
file (GLOB_RECURSE files *.cpp)
foreach (file ${files})
string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
add_executable (${exe} ${file})
message (\ \ \ \ --\ src/${exe}.cpp\ will\ be\ compiled\ to\ bin/${exe})
endforeach ()
```

优点：方便省时

缺点：这种方法要求所有 cpp 文件命名不重复，不能含有中文，不能含有‘/’等字符！因为它就是直接 Copy 你的源码文件名的。

## 参考文章：

[文章 1](https://blog.cugxuan.cn/2019/11/01/Software/multi-main-func-run-in-clion/)

[文章 2](https://blog.csdn.net/li123_123_/article/details/104306643)
