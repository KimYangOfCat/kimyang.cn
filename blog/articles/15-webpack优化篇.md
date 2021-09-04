---
title: "基于 webpack4.x 聊聊前端性能优化"
date: 2021-04-14
tags: [webpack,前端]
categories: [📗 学习笔记]
---

本文的所有前端性能优化，都是基于webpack 的配置优化实现的。其他前端打包器配置可能有所不同，但是其中的优化方向以及优化思路都是一致的，值得学习了解一二。

本文主要从开发环境和生产环境两个方面去优化webpack配置文件，毕竟这两个环境优化的目的有所不同，开发环境优化的目的是尽可能提升编程时的体验，帮助我们尽快定位BUG等等，而生产环境却更在意的是提升生产代码的性能，加快代码编译速度等等。<!-- more -->

## 开发环境优化

### 热模块替换（Hot module replacement）

开发过程中，当一个模块代码发生变化，只会重新打包构建这一个模块，而不是全部重新打包所有模块，以此提升开发时的构建速度，做到代码修改后，预览界面及时响应。幸运的是webpack已经实现了它，只需要在devServer中设置hot为true，就会自动开启HMR功能，但是HMR只能在开发模式下使用。

```javascript
//webpack.config.js 
devServer: {
  contentBase: resolve(__dirname, 'build'),
  compress: true,
  port: 3000,
  open: true,
  // 开启HMR功能
  // 当修改了webpack配置，新配置要想生效，必须重启webpack服务
  hot: true
}
```

但是在webpack中，不是所有的资源文件都能支持HMR，具体情况如下：

+ CSS、SASS 等样式文件，可以使用HMR功能，因为开发环境下使用的style-loader内部默认实现了热模块替换功能。

+ JS 文件：默认不能使用HMR功能，修改一个js模块，所有js模块都会刷新。
  想要让js文件支持HMR，需要添加支持HMR功能的代码：

  ```javascript
  // 绑定
  if (module.hot) {
    // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
    module.hot.accept('./print.js', function() {
      // 方法会监听 print.js 文件的变化，一旦发生变化，只有这个模块会重新打包构建，其他模块不会。
      // 会执行后面的回调函数
      print();
    });
  }
  ```

+ HTML 文件：默认不能使用 HMR 功能，但也不必使用，因为只有一个入口文件 index.html ，不需要再单独优化。
  倘若强行使用HMR会导致html文件不能自动打包构建了。解决办法就是修改entry入口，将html文件引入，这样可以整体修改刷新：

  ```javascript
  entry:['./src/js/index.js', './src/index.html']
  ```

  ### source-map

  这是一种提供修改源代码到构建后代码的映射技术，在构建后代码出错的情况下，可以通过此技术快速追踪到源代码错误。

  **格式**：`devtool: '[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map'`

  **含义**：[生成source-map的位置|给出的错误代码信息的详细程度] 所有前缀都可以自由组合

  - source-map：外部，错误代码准确信息 和 源代码的错误位置
  - inline-source-map：内联，只生成一个内联 source-map，错误代码准确信息 和 源代码的错误位置
  - hidden-source-map：外部，错误代码错误原因，但是没有错误位置（为了隐藏源代码），不能追踪源代码错误，只能提示到构建后代码的错误位置
  - eval-source-map：内联，每一个文件都生成对应的 source-map，都在 eval 中，错误代码准确信息 和 源代码的错误位置
  - nosources-source-map：外部，错误代码准确信息，但是没有任何源代码信息（为了隐藏源代码）
  - cheap-source-map：外部，错误代码准确信息 和 源代码的错误位置，只能把错误精确到整行，忽略列
  - cheap-module-source-map：外部，错误代码准确信息 和 源代码的错误位置，module 会加入 loader 的 source-map

  **内联和外部的区别**：

  1. 外部生成了文件，内联没有 2. 内联构建速度更快

  #### 开发/生产环境的选择建议：

  **开发环境**：需要考虑速度快，调试更友好

  - 速度快( eval > inline > cheap >... )
    1. eval-cheap-souce-map
    2. eval-source-map（完整度高，内联速度快）
  - 调试更友好
    1. souce-map
    2. cheap-module-souce-map（错误提示忽略列但是包含其他信息，内联速度快
    3. cheap-souce-map

  **生产环境**：需要考虑源代码是否隐藏，是否需要调试

  - 内联会让代码体积变大，所以在生产环境不用内联
  - 隐藏源代码
    1. nosources-source-map 全部隐藏
    2. hidden-source-map 只隐藏源代码，会提示构建后代码错误信息

## 生产环境优化

生产环境的优化主要从打包构建速度以及代码运行的性能两个方面去考虑：

### 优化打包速度

#### oneOf

oneOf关键字，匹配到 lodar 之后就不再向后进行匹配，以此减少loader匹配次数，达到优化生产环境的打包构建速度。

```javascript
module: {
  rules: [
    {
      // js 语法检查
      test: /\.js$/,
      exclude: /node_modules/,
      // 优先执行
      enforce: 'pre',
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    },
    {
      // oneOf 优化生产环境的打包构建速度
      // 以下loader只会匹配一个（匹配到了后就不会再往下匹配了）
      // 注意：不能有两个配置处理同一种类型文件（所以把eslint-loader提取出去放外面）
      oneOf: [
        {
          test: /\.css$/,
          use: [...commonCssLoader]
        },
        {
          test: /\.less$/,
          use: [...commonCssLoader, 'less-loader']
        },
        {
          // js 兼容性处理
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {version: 3},
                  targets: {
                    chrome: '60',
                    firefox: '50'
                  }
                }
              ]
            ]
          }
        },
        {
          test: /\.(jpg|png|gif)/,
          loader: 'url-loader',
          options: {
            limit: 8 * 1024,
            name: '[hash:10].[ext]',
            outputPath: 'imgs',
            esModule: false
          }
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          exclude: /\.(js|css|less|html|jpg|png|gif)/,
          loader: 'file-loader',
          options: {
            outputPath: 'media'
          }
        }
      ]
    }
  ]
},
```

#### Babel 缓存

缓存类似于HMR，将资源缓存起来，当模块改变时只更新对应模块，其他内容还是使用之前的缓存，让第二次的打包构建速度更快。

此处主要是使用 babel 来开启 JS 文件的缓存：

```javascript
//webpack.config.js > moudel >rules
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: { version: 3 },
          targets: {
            chrome: '60',
            firefox: '50'
          }
        }
      ]
    ],
    // 开启babel缓存
    // 第二次构建时，会读取之前的缓存
    cacheDirectory: true
  }
},
```

缓存对比更新的主要依据是文件名称，为了区分前后文件的更新情况，可以将hash值加入到文件名中，在webpack中对每一个文件都有三种hash值可选：

1. hash：每次 webpack 打包时都会生成一个唯一的 hash 值。
   注意，即便你只修改了一个文件，重新打包之后，所有文件的 hash 值都会改变，会导致所有缓存失效。
2. chunkhash：根据 chunk 生成的 hash 值，故来源于同一个 chunk 的 hash 值一样。
   注意：js 和 css 来自同一个 chunk，chunkhash 值是一样的，这是因为 css-loader 会将 css 文件内容加载到 js 中，所以同属一个 chunk。
3. contenthash；根据文件内容生成的 hash 值，不同文件 hash 值一定不一样，只有当文件内容修改之后，文件名里的 hash 才会改变。（推荐）
   注意：修改 css 文件内容，打包后的 css 文件名中的hash值也就会更改，而 js 文件没有改变 hash 值就不会改变，这样 css 和 js 缓存就会分开判断要不要重新分配请求资源，由此优化代码上线后的运行缓存。

#### 多线程打包

某个任务消耗的时间较长时会卡顿，多进程可以同时干多件事情，效率更高。由此可以提升打包速度，缺点是每个进程的开启和通信都有一定开销，所以并不是进程越多越好，得根据实际项目需求合理分配。开启多线程打包的主要靠 thread-loader 。

```javascript
//webpack.config.js > moudel >rules
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    /* 
      thread-loader会对其后面的loader（这里是babel-loader）开启多进程打包。 
      进程启动大概为600ms，进程通信也有开销。(启动的开销比较昂贵，不要滥用)
      只有工作消耗时间比较长，才需要多进程打包
    */
    {
      loader: 'thread-loader',
      options: {
        workers: 2 // 进程2个
      }
    },
    {
      loader: 'babel-loader',
      options: {
        presets: [
          [
            '@babel/preset-env',
            {
              useBuiltIns: 'usage',
              corejs: { version: 3 },
              targets: {
                chrome: '60',
                firefox: '50'
              }
            }
          ]
        ],
        // 开启babel缓存
        // 第二次构建时，会读取之前的缓存
        cacheDirectory: true
      }
    }
  ]
},
```

 #### externals

此关键字，可以排除本地某些库，让其不参与打包的过程，而是通过 CND 引入。

```javascript
//webpack.config.js
externals: {
  // 拒绝jQuery被打包进来(通过cdn引入，速度会快一些)
  // 忽略的库名 -- npm包名
  jquery: 'jQuery'
}

```

需要在 index.html 中通过 cdn 引入：

```html
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
```

#### dll

让某些库单独打包，后直接引入到 build 中。可以在 code split 分割出 node_modules 后再用 dll 进行更细致的分割，优化代码的运行性能。

首先将 jquery 单独打包：

```javascript
//webpack.dll.js
/*
  node_modules的库会打包到一起，但是很多库的时候打包输出的js文件就太大了
  使用dll技术，对某些库（第三方库：jquery、react、vue...）进行单独打包
  当运行webpack时，默认查找webpack.config.js配置文件
  需求：需要运行webpack.dll.js文件
    --> webpack --config webpack.dll.js（运行这个指令表示以这个配置文件打包）
*/
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    // 最终打包生成的[name] --> jquery
    // ['jquery] --> 要打包的库是jquery
    jquery: ['jquery']
  },
  output: {
    // 输出出口指定
    filename: '[name].js', // name就是jquery
    path: resolve(__dirname, 'dll'), // 打包到dll目录下
    library: '[name]_[hash]', // 打包的库里面向外暴露出去的内容叫什么名字
  },
  plugins: [
    // 打包生成一个manifest.json --> 提供jquery的映射关系（告诉webpack：jquery之后不需要再打包和暴露内容的名称）
    new webpack.DllPlugin({
      name: '[name]_[hash]', // 映射库的暴露的内容名称
      path: resolve(__dirname, 'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
};
```

告诉 webpack 不需要再打包 jquery，并将之前打包好的 jquery 跟其他打包好的资源一同输出到 build 目录下。

```javascript
//webpack.config.js
// 引入插件
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

// plugins中配置：
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
  // 告诉webpack哪些库不参与打包，同时使用时的名称也得变
  new webpack.DllReferencePlugin({
    manifest: resolve(__dirname, 'dll/manifest.json')
  }),
  // 将某个文件打包输出到build目录下，并在html中自动引入该资源
  new AddAssetHtmlWebpackPlugin({
    filepath: resolve(__dirname, 'dll/jquery.js')
  })
],

```

### 优化代码运行性能

#### tree shaking（树摇）

tree shaking 主要功能便是去除无用代码，减少代码体积。但使用它的前提条件是必须使用 es6 模块化且开启 production 环境。

```javascript
//package.json 
"sideEffects":false,//表示所有代码都没有副作用，都可以进行 tree shaking
```

上述设置可能导致一个问题，可能会把 css/@babel/polyfill 文件干掉（副作用），所以修改配置如下：

```javascript
//package.json 
"sideEffects": ["*.css", "*.less"] //不会对css/less文件tree shaking处理
```

#### 代码分割（code split）

将打包输出的一个大的 bundle.js 文件拆分成多个小文件，这样就可以并行加载多个文件，提升加载速度。实现带么分割的方法很多：

1. 多入口拆分
   
   ```javascript
   entry: {
       // 多入口：有一个入口，最终输出就有一个bundle
       index: './src/js/index.js',
       test: './src/js/test.js'
     },
     output: {
       // [name]：取文件名
       filename: 'js/[name].[contenthash:10].js',
       path: resolve(__dirname, 'build')
     },
   ```

2. optimization:

   ```javascript
   optimization: {
       splitChunks: {
         chunks: 'all'
       }
     },
   ```

   + 将 no de_modules 中的代码单独打包(大小超过30k)；
   + 自动分析多入口 chunk 中有没有公共的文件，如果有会打包成单独一个 chunk，例如；若两个模块都引入了 jQuery ，且其大小超过 30kb， 则其会被打包成单独的文件。

3. import 动态倒入语法：

   ```javascript
   /*
     通过js代码，让某个文件被单独打包成一个chunk
     import动态导入语法：能将某个文件单独打包(test文件不会和index打包在同一个文件而是单独打包)
     webpackChunkName:指定test单独打包后文件的名字,这里通过注释指定名称，很奇妙的写法。
   */
   import(/* webpackChunkName: 'test' */'./test')
     .then(({ mul, count }) => {
       // 文件加载成功~
       // eslint-disable-next-line
       console.log(mul(2, 5));
     })
     .catch(() => {
       // eslint-disable-next-line
       console.log('文件加载失败~');
     });
   ```

   #### 懒加载/预加载 （lazy loading）

   1. 懒加载：实现代码分割后，当文件需要使用时才加载，若文件资源体积较大，加载时间会较长且有延时。
   2. 正常加载：可以认为是并行加载，同一时间加载多个文件，没有先后顺序，先加载了不需要的资源会影响首页启动。
   3. 预加载：会在使用之前，提前加载，等其他资源加载完毕之后，游览器空闲了再偷偷加载这个资源，这样在使用时已经加载好了，速度很快，所以在懒加载的基础上加上预加载会更好。

   ```javascript
   document.getElementById('btn').onclick = function() {
     // 将import的内容放在异步回调函数中使用，点击按钮，test.js才会被加载(不会重复加载)
     // webpackPrefetch: true表示开启预加载
     import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {
       console.log(mul(4, 5));
     });
     import('./test').then(({ mul }) => {
       console.log(mul(2, 5))
     })
   };
   ```

#### 离线可访问技术(PWA)

PWA 是基于 serviceworker 和 workbox 技术的离线可访问技术（渐进式网络开发应用程序）， 优点是离线也能访问，缺点是兼容性较差。

```javascript
//webpack.config.js
const WorkboxWebpackPlugin = require('workbox-webpack-plugin'); // 引入插件

// plugins中加入：
new WorkboxWebpackPlugin.GenerateSW({
  /*
    1. 帮助serviceworker快速启动
    2. 删除旧的 serviceworker

    生成一个 serviceworker 配置文件
  */
  clientsClaim: true,
  skipWaiting: true
})
```

index.js 中还需要写一段代码来激活它的使用：

```javascript
/*
  1. eslint不认识 window、navigator全局变量
    解决：需要修改package.json中eslintConfig配置
    "env": {
      "browser": true // 支持浏览器端全局变量
    }
  2. sw代码必须运行在服务器上
    --> nodejs
    或-->
      npm i serve -g
      serve -s build 启动服务器，将打包输出的build目录下所有资源作为静态资源暴露出去
*/
if ('serviceWorker' in navigator) { // 处理兼容性问题
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js') // 注册serviceWorker
      .then(() => {
        console.log('sw注册成功了~');
      })
      .catch(() => {
        console.log('sw注册失败了~');
      });
  });
}
```

## 总结

好了，以上就是所有前端性能优化的思考，其中很多内容其实还完全可以再详细深入研究底层实现原理，但是对于日常项目的开发来说，先了解这些技术如何配置更为重要，毕竟得先会用才能懂得如何实现嘛。所以后面有时间的时候，我会再从中选择一些方面，进行更细致的研究，最后总结成文，敬请期待吧。如果你有所收获的话，请一定要三连支持一下，谢谢！