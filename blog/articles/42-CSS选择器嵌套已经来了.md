---
title: "CSS 选择器嵌套已经来了🤯🤯🤯 ！"
date: 2021-08-23
tags: [CSS]
categories: [🌏 翻译校对]
---

之前 CSS 有了变量，现在也支持嵌套了！似乎在 Sass 和 Less 这样的预处理器中的功能正在慢慢地被引入到 CSS 中。这有点类似于 JavaScript 和 TypeScript 之间发生的事情。如果你有留意过的话，当前的一些 JavaScript 功能在几年前并不存在，但在 TypeScript 中有此实现。
<!-- more -->

我并不是说这是一件坏事，实际上它非常棒！这减少了对 CSS/JavaScript 预处理器的需求。

话虽如此，选择器嵌套仍然只存在于未来。目前尚无浏览器支持它，但我希望这会有所改善。有关更多信息，请查看 [CSS 工作小組的草稿](https://drafts.csswg.org/css-nesting-1/)。

## 嵌套到底是什么？

为了有效地解释这一点，我将对比两个代码示例。

**无嵌套**：

```css
button.btn {
  color: blue;
  background: white;
  transition: .2s all ease-in;
  /* 更多关于 button 的样式。 */
}

button.btn:hover {
  color: white;
  background: blue;
}

button.btn:focus {
   /* 添加更多样式。 */
}

button.btn-group {
  /* 一些样式。 */ 
}

button.btn-primary {
  /* 我保证，这是最后一个了。 */ 
}
```

现在让我展示与上方相同的**带嵌套**的代码：

```css
.btn {
  color: blue;
  background: white;
  transition: .2s all ease-in;

  &:hover {
    color: white;
    background: blue;
  }

  &:focus {
   /* 添加更多样式。 */
  }

  &-group {
    /* 一些样式。 */ 
  }

  &-primary {
    /* 你知道我在说什么，对吧？ */ 
  }
}
```

就像在 Sass 中一样，`&` 用于引用父选择器（在本例中为 `.btn`）。不止这样，它也支持多层嵌套。

```css
.btn {
  color: white;
  background: cyan;

  &-container {
    margin: 10px 20px;

    &:hover {
      /* 一些花哨的动画。 */ 
    }

    & .overlay {
       /* 嵌套选择器中总有一个“&”。 */
    }
  }
}
```

## @nest

这是一个新的 `at-rule`，它帮助我们克服了使用 `&` 嵌套的一些限制。看看下面的代码：

```css
.section {
    /* etc…… */
}

.section {
    /* etc…… */

    .blog {
        /* 我们想引用 .section 内的 blog 容器。 */
    }
}
```

为此，我们可以使用 `@nest` 规则。 此规则将 `&` 的引用转移到我们指定的另一个选择器。

```css
.main {
    /* etc…… */

    .blog {
        @nest .section & {
            /* “&”指的是 .blog */
            background: red;
        }
    }
}
```

## 嵌套式媒体查询

对于熟悉 Sass 的人来说，“正常”的代码是这样的：

```css
.section {
  @media(/* 一些媒体查询 */) {
    /* 样式…… */
  }
}
```

但是，这在 CSS 里略有不同。在 CSS 中，样式必须用 “&” 括起来。

```css
  @media(/* 一些媒体查询 */) {
    & {
      /* 样式…… */
    }
  }
```

* 一般情况下的代码

```css
.table.xyz > th.y > p.abc {
  font-size: 1rem;
  color: white;
}

.table.xyz > th.y > p.abc-primary {
  font-size: 1.4rem;
}
```

* 嵌套的力量 💪💪💪

```css
.table.xyz > th.y > p.abc {
  font-size: 1rem;
  color: white;

  &-primary {
    font-size: 1.4rem;
  }
}
```

### 提升代码可读性

在你查看代码时，你就会说“啊哈，这些外花括号之间的任何东西都与按钮或 `.btn` 有关！不关我的事！”

## 一个陷阱

要记住的一件事是，嵌套选择器之后的任何 CSS 样式都会被完全忽略。但是，它之后的任何嵌套都是完全有效的。

```css
.x {
  &-y {
    /* 样式…… */
  }

  a {
    /* 无效 */
  }

  &-z {
    /* 有效 */
  }
}
```

就这些了，大家！感谢你阅读这篇文章。

> * 原文地址：[Selector Nesting Has Come to CSS](https://dev.to/akashshyam/selector-nesting-has-come-to-css-532i)
> * 原文作者：[Akash Shyam](https://dev.to/akashshyam)
> * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
> * 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/selector-nesting-has-come-to-css.md](https://github.com/xitu/gold-miner/blob/master/article/2021/selector-nesting-has-come-to-css.md)
> * 译者：[jaredliw](https://github.com/jaredliw)
> * 校对者：[Kim Yang](https://github.com/KimYangOfCat)、[nia3y](https://github.com/nia3y)