---
title: "使用 GPU.js 让你的 Angular.js 程序提速 10 倍"
date: 2021-05-24
tags: [Angular,前端]
categories: [🌏 翻译校对]
---

![](https://picbed.kimyang.cn/202109050833617.jpeg)

对于开发者来说，提高程序的性能是永恒的目标。但当程序中的计算任务很大时，我们可优化的选项很少，因为这些计算任务主要依赖 CPU 的性能。

那么，如果我们将 GPU 的性能跟 Web 应用程序结合，情况会是怎样的呢？<!-- more -->

在本文中，我会向你展示使用 [GPU.js](https://github.com/gpujs/gpu.js) 将 GPU 性能跟你的 Angular 程序集成的步骤。我也会进行性能的比较，讨论应当在何种情况下利用 GPU 的性能进行程序开发。

## 将 GPU.js 跟 Angular 结合

如果你对 GPU.js 一无所知，不必担忧。我会向你介绍相关的细节。现在我们开始创建一个 Angular 应用程序。

### 1. 初始化 Angular 应用程序

你需要运行带有 `new` 的命令来新建一个 Angular 应用程序：

```bash
ng new <project-name>
```

如果你以前没有在机器上配置过 Angular，建议你参考[Angular 官方文档](https://angular.io/docs)。

接着，运行 `ng serve` 命令，并在浏览器上打开 `[http://localhost:4200/](http://localhost:4200/)` 测试程序是否创建成功。

![](https://picbed.kimyang.cn/202109050833569.png)

### 2. 安装 GPU.js

正如前文所述，GPU.js 是一个具有加速功能的 JavaScript 库，它可以用于开发通用的计算功能。

如果机器中没有运行 GPU，你的应用程序使用了 GPU.js 也可以正常运行。如果设备没有 GPU，它会重新回到常规的 JavaScript 引擎的运行状态。所以，使用 GPU.js 没有任何坏处。

![](https://picbed.kimyang.cn/202109050833987.png)

像其他 JavaScript 库一样，使用 npm 或 yarn 都可以获取到 GPU.js。你可以使用任一命令安装 GPU.js：

```bash
npm install gpu.js — save
```

or 

```bash
yarn add gpu.js
```

现在我们开始使用 GPU.js 开发第一项功能。

### 3. 使用 GPU.js 写内核函数

我会让应用程序编写一个函数，计算两个数的乘积，并提供不同大小的数组，观察它们的执行时间。

我们先编写 GPU 函数：

```JavaScript
 gpuMultiplyMatrix() {
    const gpu = new GPU();
    const multiplyMatrix = gpu.createKernel(function (a: number[][], b: number[][], matrixSize: number) {
      let sum = 0;
      for (let i = 0; i < matrixSize; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
      }
      return sum;
    }).setOutput([this.matrixSize, this.matrixSize])

    const startTime = performance.now();
    const resultMatrix = multiplyMatrix(this.matrices[0], this.matrices[1], this.matrixSize);
    const endTime = performance.now();
    this.gpuTime = (endTime - startTime) + " ms";
    console.log("GPU TIME : "+ this.gpuTime);
    this.gpuProduct = resultMatrix as number[][];
  }
```

起初，对新建的 GPU 对象进行初始化。接着，我创建一个内核函数，名为 `multiplyMatirx`，其中用到了 `gpu.createKernel()` 函数，它是 GPU.js 的一个内置函数。

两个数值类型的数组和矩阵大小作为输入参数传入函数，函数将进行相关运算。

测量性能的 JavaScript 函数用于计算运行时间，`performance.now()` 函数会记录 GPU 开始运行和结束运行的时间。

### 4. 编写 CPU 函数

现在我们需要写一个关于 CPU 运行的等效函数。因此我使用了 `for` 循环编写了这样一个函数：

```JavaScript
 cpuMutiplyMatrix() {
    const startTime = performance.now();
    const a = this.matrices[0];
    const b = this.matrices[1];

    let productRow = Array.apply(null, new Array(this.matrixSize)).map(Number.prototype.valueOf, 0);
    let product = new Array(this.matrixSize);
    for (let p = 0; p < this.matrixSize; p++) {
      product[p] = productRow.slice();
    }

    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        for (let k = 0; k < this.matrixSize; k++) {
          product[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    const endTime = performance.now();
    this.cpuTime = (endTime - startTime) + " ms";
    console.log("CPU TIME : "+ this.cpuTime);
    this.cpuProduct = product;
  }

```

除此以外，我也使用了名为 `generateMatrices()` 的函数，利用随机数创建两个数组：

```JavaScript
  generateMatrices() {
    this.matrices = [[], []];
    for (let y = 0; y < this.matrixSize; y++) {
      this.matrices[0].push([])
      this.matrices[1].push([])
      for (let x = 0; x < this.matrixSize; x++) {
        const value1 = parseInt((Math.random() * 10).toString())
        const value2 = parseInt((Math.random() * 10).toString())
        this.matrices[0][y].push(value1)
        this.matrices[1][y].push(value2)
      }
    }
  }
```

### 5. 创建简单的 UI

现在我要实现一个简单页面，用户在这个页面输入数组大小，然后就可以得到程序执行所花的时间。

![](https://picbed.kimyang.cn/202109050834365.png)

```HTML
<div class="container-fluid">
  <div class="row">
    <div class="col col-3"></div>
    <div class="col col-6">
      <div class="card" style="margin: 5%">
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default"
                >Array Size</span
              >
            </div>
            <input
              type="text"
              [(ngModel)]="matrixSize"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div style="margin: 5%">
            <h5>CPU Execution Time : {{ cpuTime }}</h5>
            <h5>GPU Execution Time : {{ gpuTime }}</h5>
          </div>
          <button
            type="button"
            class="btn btn-success btn-lg"
            (click)="execute()"
          >
            Start Calculation
          </button>
        </div>
      </div>
    </div>
    <div class="col col-3"></div>
  </div>
</div>

```

### 6. 运行程序并观察其性能

现在各部分程序都已完成，最终的代码如下：

```TypeScript
import { Component } from '@angular/core';
import { GPU } from 'gpu.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gpujs-demo';

  gpu: GPU;
  matrices: Array<Array<Array<number>>> = [[], []];
  matrixSize = 1000;

  cpuProduct: number[][];
  gpuProduct: number[][];

  cpuTime = '';
  gpuTime = '';

  constructor() {}

  execute() {
    this.gpu = new GPU();
    this.generateMatrices();
    this.cpuMutiplyMatrix();
    this.gpuMultiplyMatrix();
  }

  generateMatrices() {
    this.matrices = [[], []];
    for (let y = 0; y < this.matrixSize; y++) {
      this.matrices[0].push([]);
      this.matrices[1].push([]);
      for (let x = 0; x < this.matrixSize; x++) {
        const value1 = parseInt((Math.random() * 10).toString());
        const value2 = parseInt((Math.random() * 10).toString());
        this.matrices[0][y].push(value1);
        this.matrices[1][y].push(value2);
      }
    }
  }

  cpuMutiplyMatrix() {
    const startTime = performance.now();
    const a = this.matrices[0];
    const b = this.matrices[1];

    let productRow = Array.apply(null, new Array(this.matrixSize)).map(
      Number.prototype.valueOf,
      0
    );
    let product = new Array(this.matrixSize);
    for (let p = 0; p < this.matrixSize; p++) {
      product[p] = productRow.slice();
    }

    for (let i = 0; i < this.matrixSize; i++) {
      for (let j = 0; j < this.matrixSize; j++) {
        for (let k = 0; k < this.matrixSize; k++) {
          product[i][j] += a[i][k] * b[k][j];
        }
      }
    }
    const endTime = performance.now();
    this.cpuTime = endTime - startTime + ' ms';
    console.log('CPU TIME : ' + this.cpuTime);
    this.cpuProduct = product;
  }

  gpuMultiplyMatrix() {
    const gpu = new GPU();
    const multiplyMatrix = gpu
      .createKernel(function (
        a: number[][],
        b: number[][],
        matrixSize: number
      ) {
        let sum = 0;
        for (let i = 0; i < matrixSize; i++) {
          sum += a[this.thread.y][i] * b[i][this.thread.x];
        }
        return sum;
      })
      .setOutput([this.matrixSize, this.matrixSize]);

    const startTime = performance.now();
    const resultMatrix = multiplyMatrix(
      this.matrices[0],
      this.matrices[1],
      this.matrixSize
    );
    const endTime = performance.now();

    this.gpuTime = endTime - startTime + ' ms';
    console.log('GPU TIME : ' + this.gpuTime);
    this.gpuProduct = resultMatrix as number[][];
  }
}
```

## 我们来看看它们性能上的差异

现在，可以检验使用了 GPU.js 后的性能提升程度，并考察它的通用性和某些限制条件了。

因此，我使用不同大小的数组作为输入参数，执行了多次，结果非常有趣：

![Execution times](https://picbed.kimyang.cn/202109050834528.png)

你可以看到，当任务较小时，CPU 的性能较好。任务大小在 200 以下时，CPU 表现出了最佳性能，而 GPU 却花费了更多时间才完成任务。

所以，CPU 适合执行那些不太复杂、计算量不太大的任务。

但是，当数组大小增加，GPU 的性能就比 CPU 高多了。当数组大小为 1000 时，GPU 的性能比 CPU 好十倍。

当任务巨大且复杂时，GPU 的性能较好。

当使用 GPU 执行某些任务，我们需要留意一下，才能得到最优方案，以便充分利用 GPU 的功能。所以我建议大家在开发下一个 Angular 应用程序时，试着使用 GPU.js 来提高程序性能。

感谢你阅读本文！

> * 原文地址：[Speed Up Your Angular Projects by 10x With GPU.js](https://betterprogramming.pub/speed-up-your-angular-projects-by-10x-with-gpu-js-92c4b2bad4e3)
> * 原文作者：[Chameera Dulanga](https://medium.com/@chameeradulanga)
> * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
> * 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/speed-up-your-angular-projects-by-10x-with-gpu-js.md](https://github.com/xitu/gold-miner/blob/master/article/2021/speed-up-your-angular-projects-by-10x-with-gpu-js.md)
> * 译者：[samyu2000](https://github.com/samyu2000)
> * 校对者：[PassionPenguin](https://github.com/PassionPenguin), [Kim Yang](https://github.com/KimYangOfCat)