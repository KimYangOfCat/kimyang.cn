---
title: "不经测试的 Python 代码就已离崩溃不远了"
date: 2021-08-20
tags: [Python, 测试]
categories: [🌏 翻译校对]
---

![](https://picbed.kimyang.cn/202109050842373.jpeg)

<!-- more -->

我的第一位导师极其的令人难以置信。他向我展示了编码、日志记录、文档编制的最佳实践和其带来的收益。但有一件事他一直无法灌输给我，那就是测试。他的测试代码方式很复杂，包括说先写测试程序，然后编码实现！他的方式与我的编码风格对立，这让我觉得："**如果我在写函数前就写好了测试，那么我还不如不写测试。**”…… 这样想让我感觉好多了。

可问题在于：你的代码需要测试。因为所有代码，即便是好的代码，都与 bug 只有一线之隔。对于新手来说：bug 是代码中意外的功能或错误。你可能对自己的代码及其局限性非常了解，但是新队友呢？或者，在一年后，你想为一个你已经基本忘记的项目添加一个功能，该怎么办？测试就好比保龄球道上的保险杠，让你每次都可以对提交的代码获得满分充满信心。

本文将重用我的 Python 学习系列中[第 3 部分](https://python.plainenglish.io/build-a-fast-food-order-taker-in-python-87188efcbbdd)的代码，并使用我在[此处](https://python.plainenglish.io/stop-making-excuses-and-use-make-9da448efed12)介绍的 `Makefile`。如果你是 Python 新手，为何不先来看看[第 1 部分](https://python.plainenglish.io/create-your-own-dice-roller-with-python-40d65c16eb84)和[第 2 部分](https://python.plainenglish.io/draw-a-random-playing-card-in-python-848393d6d868)？此外，如果你没有自己的 Python 工作环境，请在[此处](https://python.plainenglish.io/new-python-developers-need-these-tools-979a17cdffc9)查看你所需要的教程。

讨论的课题：

- 单元测试
- 继承
- Mocking 和 patch
- Makefile
- 什么时候进行测试？

由于这需要一些代码，我已经创建了一个 [Github Project](https://github.com/Tigenzero/medium_test_with_order_taker) 来帮助我们开始这个话题。获取它最简单的方法是通过 Github Desktop 克隆它，或将其下载为 ZIP 文件。文件夹中包含 `order_up.py`、一个 `Makefile` 和一个 `Pipfile`，还有一个 `Solutions` 文件夹，但我们暂时先不管它。

创建一个名为 `tests` 的 Python 包。那如何创建？这有些复杂 —— 首先创建一个文件夹，在里面创建一个名为 `__init__.py` 的空文件。是的，这样就完成了。然后在新的 `tests` 文件夹中，再创建一个名为 `test_order_up.py` 的文件。现在我们可以开始了。注意：unittest（和 pytest）根据以 “test” 开头的文件确定测试的代码，因此在命名非测试文件时请避免这一点！

## 测试是什么？

简而言之，测试回答了“程序的执行结果是否符合我们的期望？”这个问题。要想回答这个问题，我们可以通过使用预选输入来运行一个函数并检查输出是否符合我们的预期。你可以通过运行一个函数并验证输出，确保它不会抛出错误，或者确保它**确实**抛出错误，以此来保证代码已被全面的测试。一组好的测试应包含正常用例、边缘用例和有创意的用例。你不仅要确保你的代码按原样运行，而且还要确保你的**测试将捕获你或其他人将来所做的任何愚蠢行为**。

## Unittest

Unittest 是 Python 的内置测试框架，所以我们将从这里开始。将此代码放入你的测试文件中：

```python
import unittest
import order_up


class TestOrderUp(unittest.TestCase):
    def test_get_order_one_item(self):
        order = ["fries"]

        result = order_up.get_order(order)

        self.assertEqual(order, result)
```

首先，我们 `import unittest`，它是一个用于测试代码的 Python 内置包，然后我们导入 `order_up.py` 文件（注意我们省略了 `.py` 扩展名）。

> **注**：如果你使用的是 PyCharm 并在 `order_up` 下看到了红色的下划线，这表示找不到此包。你可以重新在 Github 项目的根目录下打开这个项目或右键单击项目文件夹并选择 “Mark Directory as” -> “Sources Root” 来解决此问题。

接下来，我们创建一个名为 `TestOrderUp` 的类，它的名称和我们的文件名相匹配，这样一来我们能更容易找到失败的测试。哦，但是括号里有个东西，`unittest.TestCase`，这意味着我们的类继承了 `TestCase` 类。

### 继承

继承表示一个类从父类接收函数和变量。对于我们的这种情况来说，我们从 `TestCase` 继承了丰富的功能以方便我们的测试工作。继承了什么函数和变量？我们之后会探讨这个问题。

## 创建一个测试

在我们的类下面有个名为 `test_output_order_one_item` 的函数，它应该大致地解释我们在测试中所做的事情。我们将用其于测试 `get_order()` 函数并检查输出是否符合我们的预期。让我们运行它，看看会发生什么！你可以在终端中执行 `python -m unittest`，或者点击 PyCharm 中函数旁边的绿色箭头。你也可以选择执行 `make unit-test`，让代码在虚拟环境中运行 ( 我們將會在之後提到 `Makefile`）。看看结果：

![漂亮，你成功地执行了你的第一个测试！](https://picbed.kimyang.cn/202109050842162.png)

### 断言（assert）

我们从 `unittest.TestCase` 中继承的函数包括断言，它能保函数的结果在我们的预期之内。在 Pycharm 中，输入 `self.assert`，代码完成功能将显示所有不同的选项。这有很多，但我主要使用是 `self.assertEqual`，它检查两个对象是否相同，以及 `self.assertTrue`/`self.assertFalse`，功能不言自明。

现在，`order_up` 的主要功能是获取订单，删除不在菜单上的项目，以及允许重复项目。因此，让我们添加测试以确保我们在代码中保留这些功能。

```python
# 确保这些函数在类中缩进。
def test_get_order_duplicate_in_list(self):
    order = ["fries", "fries", "fries", "burger"]

    result = order_up.get_order(order)

    self.assertEqual(order, result)

def test_get_order_not_on_menu(self):
    order = ["banana", "cereal", "cookie"]
    expected_result = ["cookie"]

    result = order_up.get_order(order)

    self.assertEqual(expected_result, result)
```

现在我们正在检查我们的函数是否可以处理重复项目和不在菜单上的项目。运行这些测试并确保它们通过！旁注：最好的做法是在写测试时让执行的代码和验证的代码之间隔开一行。这样，你和你的队友就可以很容易地分辨哪个是哪个。

## Patch

我必须承认：我作了一点弊。如果你将[第 3 部分](https://python.plainenglish.io/build-a-fast-food-order-taker-in-python-87188efcbbdd)中的代码与当前的 `order_up.py` 进行比较，你将我会注意到我添加了一个功能来容纳一个新变量：`test_order`。有了这个新变量，我们可以绕过引入 `input()`，这样我们就不会在每次运行测试时让程序要求用户输入。但是现在我们已经掌握了测试的基础知识，我们可以开始尝试使用 mock。Mock 能模仿并创造函数/对象，使得我们的测试可以专注于逻辑方面。在这种情况下，我们将“补缀” `input()` 函数，或者暂时重写它，以简单地返回我们想要的输出。看看：

```python
@patch("builtins.input", return_value="yes")
def test_is_order_complete_yes(self, input_patch):
    self.assertEqual(builtins.input, input_patch)

    result = order_up.is_order_complete()

    self.assertFalse(result)
```

首先，在测试文件的开头添加 `from unittest.mock import patch`。一开始，我们正在补缀 `builtins.input()` 函数并告诉它返回 “yes”。然后，我们执行断言以检查从补丁中获得的参数是否与 `input` 的完全一致！注意到 `builtins.input` 没有括号了吗？我们可以引用函数的签名进行验证，而不是执行函数。之后，我们回到正常的测试协议：运行函数，获取结果，并断言结果。在这种情况下，因为我们的 `input()` 返回值是 “yes”，我们預期 `is_order_complete()` 返回 `False`。将它添加到你的测试类中，单击运行，获得红色 OK 或绿色复选标记，让我们继续前进！

### Side Effect

现在我们已经学会了 patch，我们可以解决 `get_output()` 中的输入问题！嗯，差不多。首先，我们需要了解 `side_effect`，当我们需要为同一个函数提供不同的返回值时，它是我们的救星。在 `get_output()` 中，通过 `input()`，我们被问到“你想要什么？”和“你完成了吗？”。因此，我们需要让 `input()` 返回的不仅仅是一个而是多个输出以适应每种情况。看看：

```python
@patch("builtins.input", side_effect=["banana", "cookie", "yes", "fries", "no"])
def test_get_order_valid(self, input_patch):
    self.assertEqual(builtins.input, input_patch)
    expected_result = ["cookie", "fries"]

    result = order_up.get_order()

    self.assertEqual(expected_result, result)
```

为此，我们不赋值 `return_value`，而是為 `side_effect` 分配一个列表。

> **备注**：你也可以在测试函数中赋值 `side_effect` 或 `return_value`。

`side_effect` 将获取列表中的每个项目，并在每次调用 patch 函数时单独提供它。添加该代码并点击测试按钮/命令！最后一件事：在 “banana” 和 “cookie” 中没有是/否，因为如果 `MENU` 中不存在该项目，`get_order()`不会询问“你想订购更多吗？”。如果你想自己玩弄这个列表，请记住这件事情。

## Makefile

说完了测试的基础知识，我们来看一看 `Makefile`。 我不会复制/粘贴代码到这里，因为你可以在项目中看到它。主要方法是`unit-test`和 `run`。`unit-test` 需要 `venv` 来执行，根据我们的 `Pipfile` 配置启动一个虚拟环境。注意在`unit-test`的末尾，我们执行了 `python3 -m pipenv run python3 -m unittest;`，这就是测试魔法发生的地方，即使你忘记如何运行测试，你也能在那里找到它！

## 什么时候编写测试？

那么什么时候编写测试呢？**这不重要**。重点是所写的测试能涵盖大部分代码以及它可能遇到的潜在用例。如果你不能正确地测试你的代码或者说需要 8 个不同的测试来覆盖一个函数，那么你很有可能需要重构你的代码。这并不会让你成为一个糟糕的程序员，这只是编程过程/经验的一部分。

### 测试驱动开发（TDD）

让我谈谈测试驱动开发（TDD）的问题吧。TDD 是一种开发实践，先编写失败的测试程序再编写函数来通过它。**故事时间**：我加入了一家初创公司，该初创公司将 Robert C. Martin（《代码整洁之道》和其他书籍的作者）的 TDD 和反面模式概念，或要避免的不良编码实践，作为信仰。 有一次，我们召开了一次关于 TDD 及其好处的会议来鼓励团队以领导认为更“有效”的方式进行编码。 不幸的是，大部分时间都花在争论 TDD 的定义和正确用法上。会议组织者，一位高级工程师，认为我们“编码编得太快”，并没有通过编写"聪明"的测试或功能超过测试的函数来正确实现 TDD 的原则。

我带着一个想法离开那次会议：让你的哲学辩论从我的工作中**消失**。

本篇的重点是：**找到一种合适的方法将测试囊括到项目中**。我没有具体的给出实现它们的方法或何时实现，只要它们能阻止你的代码在下一次提交后进入排水沟就算成功了。再见！

---

- 原文地址：[Untested Python Code is Already Broken](https://python.plainenglish.io/untested-python-code-is-already-broken-934cb40b547b)
- 原文作者：[Matthew Hull](https://medium.com/@tigenzero)
- 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
- 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/untested-python-code-is-already-broken.md](https://github.com/xitu/gold-miner/blob/master/article/2021/untested-python-code-is-already-broken.md)
- 译者：[jaredliw](https://github.com/jaredliw)
- 校对者：[ItzMiracleOwO](https://github.com/ItzMiracleOwO)、[Kim Yang](https://github.com/KimYangOfCat)
