---
title: "LeetCode editor开箱体验——在 IntelliJ IDE中刷 Leetcode 题目"
date: 2020-07-07
tags: [ LeetCode,LeetCode editor,IntelliJ IDE]
categories: [🛠 高效工具]
---

最近开始在刷 LeetCode 上的题目，在经过一段时间的的网页端上写代码打卡挑战，但是网页端的写代码体验原始得让习惯了强大IDE智能补充的我无比痛苦😖。本着改善工具使用体验，提高个人学习效率（装逼😎是第一生产力）的原则，我开始搜索有没有办法能让我在我自己比较习惯的 IntelliJ IDE中刷 Leetcode上的题目。于是我找到了让我脱离苦海的神奇——LeetCode editor
<!-- more -->

## 简介

[LeetCode editor](https://github.com/shuzijun/leetcode-editor)是一款非常优秀的开源插件👍🏻👍🏻，它支持获取Leetcode [国际版](https://leetcode.com)🌎和[中国版](https://leetcode-cn.com)🇨🇳，但是不能同时登陆两个版本的账号！此外，它支持在所有IntelliJ IDE中安装使用，例如： IntelliJ IDEA、PhpStorm、WebStorm、PyCharm、RubyMine、AppCode、CLion GoLand、DataGrip、Rider MPS、Android Studio等等。

## 安装

Leetcode是发布在官方插件中供所有人免费使用，所以它的安装方式也很简单，直接在IDE的插件库中搜索 leetcode editor，便可以进行安装！插件市场路径如下：

`Preferences >> Plugins >> Marketplace`

安装完成后，默认会询问你是否重启IDE，没有的话，手动重启一下也是可以的，重启之后可以在`Perferences >> Plugins >>Installed`中查看已安装插件的状态，你可以确定一下是否启用了leetcode editor ，一般默认情况下是启用了的。

![image-20200705233708890](https://tva1.sinaimg.cn/large/007S8ZIlly1gggiskssmhj314x0u0qbf.jpg)



## 配置

安装完成之后，可在`Perferences >> Plugins >> Tools >>leetcode plugin`中设置详细账号信息。

![image-20200705235038434](https://tva1.sinaimg.cn/large/007S8ZIlly1gggj6kcnk3j31di0u0wrv.jpg)

如图，详细设置内容解析如下：

*   URL：leetcode-cn.com代表🇨🇳中国版，leetcode.com代表🌎国际版。
*   Code Type：就是选择实现算法的编程语言。
*   LoginName：账户绑定的邮箱或手机号
*   Password：就是你的密码喏
*   TempFilePath：选择你想要把生成的代码文件放在什么位置
*   JCEFFilePath：不需要修改，保持默认就好
*   Custom Template：如果你想自定义生成的代码文件的模版格式，即修改`CodeFileName`和`CodeTemplate`两项内容，那你一定要记得勾选上这个选项，不然你对下面两项内容做任何修改都不会生效的。（我会告诉你我因没有勾选这个傻傻改了无数遍吗？😬）
*   Plugin update：允许插件更新
*   English content：题目内容的描述语言修改为英文
*   CodeFileName：生成的代码文件的命名格式
*   CodeTemplate：生成的代码文件的内容的规范格式
*   TemplateConstant：对相关API的解释说明

上图CodeFileName：`[${question.frontendQuestionId}]${question.title}`是默认的命名模版，但是使用中文命名文件的方式基本是不能在本地编译。如果想在本地编译运行生成的代码文件，可以参考下面的模版：

>   CodeFileName:
>
>   ```LT_${question.frontendQuestionId}_$!velocityTool.camelCaseName(${question.titleSlug})```

上边模版是先获取其英文标题然后通过提供的API转换为驼峰命名法

>   CodeTemplate:
>
>   ```
>   // ${question.frontendQuestionId} ${question.title}
>   // ${question.titleSlug}
>   
>   ${question.content}
>   
>   ${question.code}
>   ```
>

## 使用

参照上文中配置方法配置完成之后,可在项目界面的右下角找到Leetcode图标，点击即可出现小窗。

![image-20200707222906376](https://tva1.sinaimg.cn/large/007S8ZIlly1ggis2d2a82j31gm0u01kx.jpg)

提示：清空生成文件一定要慎重！！不然如果没有使用git版本管理工具的话，很有可能找不回来文件了！！

### 线上测试及提交

![image-20200707225541431](https://tva1.sinaimg.cn/large/007S8ZIlly1ggistz1rs1j30u00ucwue.jpg)



## 本地调试

本地调试，由于环境不一，设定方式也略有不同。且由于每个题目调试用例也不尽相同，所以一般不建议本地调试。但是如果一定想要实现本地调试的模版，可以参考[官方说明文档](https://github.com/shuzijun/leetcode-question)，对CodeTemplate进行自定义(读者：实际上是你不知道怎么写吧？🙄；我：😬🤫)，以此来实现自动生成相关的测试实例，下面给出Java版的官方参考CodeTemplate：

>   ```
>     ${question.content}
>     
>     package com.shuzijun.leetcode.editor.en;
>     public class $!velocityTool.camelCaseName(${question.titleSlug}){
>         public static void main(String[] args) {
>              Solution solution = new $!velocityTool.camelCaseName(${question.titleSlug})().new Solution();
>         }
>         ${question.code}
>     }
>   ```

其实从上面的官方版本中也可以看出，它只是实现了一些比较统一的代码格式，并没有实现自动从网站获取具体的测试用例以方便再本地调试。所以即时按上文实施，具体的测试用例代码还是得自己每一次手动写，较为繁琐。如果开发者大大能看到此文，能在以后的版本实现自动获取测试用例在本地调试就太完美了。

### 特殊注释

需要注意的是，在生成的代码里包含两个注释：

-   `leetcode submit region begin(Prohibit modification and deletion)`:提交到leetcode进行验证的代码开始标记
-   `leetcode submit region end(Prohibit modification and deletion)`:提交到leetcode进行验证的代码结束标记

这两个注释标注了需要提交到leetcode的区域，这两行注释是不能被删除或者修改的，否则无法识别出提交的内容，如果多提交了其他代码，leetcode会出现解答失败，同样区域内不能出现与解题无关的内容。

#### 参考文章

[文章1](https://blog.csdn.net/weixin_40849588/article/details/96934259)

[文章2](https://zhuanlan.zhihu.com/p/60309695)

[文章3](https://github.com/shuzijun/leetcode-question)



