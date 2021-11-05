---
title: "现代化的 React 路由 Hookrouter 开发使用"
date: 2021-05-17
tags: [React,前端]
categories: [🌏 翻译校对]
---

![](https://picbed.kimyang.cn/202109050830612.jpeg)

路由在单页应用程序（SPA）页面中导航和初始化状态是至关重要的。对于 React，大多数开发者都使用过 `react-router-dom`，这是 Reactrouter 库用于路由的一个变量。

然而，随着 React hooks 的引入，最近一个被称为 [**Hookrouter**](https://github.com/Paratron/hookrouter) 的新模块被推出，作为一个基于 hooks 的灵活、快速的路由。<!-- more -->

本文将重点介绍我们如何使用 Hookrouter 模块来实现 Reactrouter 的基本功能。

---

> 为了演示 Hookrouter 的功能，我将使用一个商城作为示例，有四个基本组件，即 Nav.js、Home.js、About.js 和 Shop.js。此外，使用 Hookrouter 作为路由的完整 React 应用程序可以在[这里](https://github.com/Isuri-Devindi/Hookrouter-demo)找到。

## 1. Hookrouter 与 Reactrouter 定义路由对比

当使用 Reactrouter 时，我们可以按以下方式定义路由。

```JavaScript
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import {BrowserRouter as Router,Route} from'react-router-dom';

function App() {
  
  return (
    
    <Router>
    <div className="App">

      <Nav/>
      <Route path = '/'  component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/shop' component = {Shop}/>
             
    </div>
   </Router>
  );
}
export default App;
```

我希望大家都能熟悉上述这些相对简单的示例。

如果我们使用 Hookrouter 来实现，那么可以使用 `useRoutes()` hook 将路由声明为一个对象。

对象的键定义了路径，而对象的值是路径匹配时触发的函数。路由器一个接一个地检查路径，在找到匹配后停止检查。

```JavaScript
import {useRoutes} from 'hookrouter'
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';

function App() {
  const routes = {
    '/' :()=><Home/>,
    '/about' :()=> <About/>,
    '/shop' :()=> <Shop/>,
   };
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
        <Nav/>
        {routeResults}
    </div>
  );
}

export default App;
```

Reactrouter 中的 `<Route/>` 组件每次都必须被渲染，同时还有应用程序中每个路由的所有 props。然而，在 Hookrouter 中，定义为对象的路由可以简单地传递给 `useRoutes()` hook。

> **注意：** 确保在组件之外创建路由对象；否则，整个对象将在每次渲染时被重新创建。

## 2. Hookrouter 实现 Reactrouter 开关功能

`<Switch>` 是用来渲染路由的，只渲染与位置相匹配的第一个孩子 `<Route>` 或 `<Redirect>`。当定义的导航路由不匹配时，`<Switch>` 通常被用来呈现 404 页面。

让我们来看看如何使用 `<Switch>` 来用 Reactrouter 路由呈现 404 页面。

```JavaScript
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import Error from './components/Error';
import {BrowserRouter as Router, Switch,Route} from'react-router-dom';

function App() {
  
  return (
    
    <Router>
    <div className="App">

      <Nav/>
      <Switch>
      <Route path = '/' exact component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/shop'exact component = {Shop}/>
      <Route><Error/> </Route>
      </Switch>

     
      
    </div>
   </Router>
  );
}
export default App;
```

> 当使用 Hookrouter 进行路由时，由于路由是在一个对象中定义的，所以需要专门渲染，`useRoutes()` hook 在默认情况下执行 `<Switch>` 组件的功能。

例如，使用 Hookrouter 路由呈现 404 页面，我们只需传递我们想要显示的错误或包含错误信息的组件进行渲染，如下所示（第 17 行）。

```JavaScript
import {useRoutes} from 'hookrouter'
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';

function App() {
  const routes = {
    '/' :()=><Home/>,
    '/about' :()=> <About/>,
    '/shop' :()=> <Shop/>,
   };
  const routeResults = useRoutes(routes);
  return (
    <div className="App">
        <Nav/>
        {routeResults||<h1>PAGE  NOT FOUND</h1>}
    </div>
  );
}

export default App;
```

> **注意：** 我发现一个重要事实是，在 Reactrouter `<Switch>` 中，如果没有明确指明路由导航，在某些情况下可能导致路由错误。

例如，如果到 `{Home}` 的路径没有明确指明，应用程序将不会导航到任何其他以 `/` 开头的路径。因此，应用程序不会路由导航到 `{About}` 或 `{Shop}` 组件，而会一直路由导航到主页。然而，在 Hookrouter 中，由于路由是作为一个对象来声明的，所以不需要明确声明导航路径。

## 3. 使用 Hookrouter 导航

通过 Reactrouter 使用 `<Link>` 来在整个应用中导航。此外，在 React 应用中，可以用它来定制和交互式地管理导航。

```JavaScript
import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
                   <ul className='nav-links'>
                      
                      <Link className='Link' to='/'>
                        <li>HOME</li>
                      </Link>
                      <Link className='Link' to='/about'>
                        <li>ABOUT</li>
                      </Link>
                      <Link className='Link' to='/shop'>
                        <li>SHOP</li>
                      </Link>

                  </ul>
                
            </nav>
        </div>
    )
}
export default Nav
```

> Hookrouter 使用一个 `<A>` 组件来提供 `<Link>` 组件的功能。`<A>` 是一个来自 HTML 的 `<a>` 标记的包装器，与锚标记的功能完全兼容。

`<A>` 和 `<Link>` 之间的主要区别是，`<A>` 将 URL 推送到历史栈，而不加载新的页面。因此，onclick 函数必须由 `<A>` 组件包装，以拦截点击事件，停止默认行为并将 URL 推送到历史堆栈。

```JavaScript
import React from 'react'
import {A} from 'hookrouter'

function Nav() {
        return (
            <div>
                <nav>
                        <ul className='nav-links'>
                          
                          <A className='Link' href='/'>
                            <li>HOME</li>
                          </A>
                          <A className='Link' href='/about'>
                            <li>ABOUT</li>
                          </A>
                          <A className='Link' href='/shop'>
                            <li>SHOP</li>
                          </A>
    
                        </ul>
                </nav>
            </div>
        )
    }
    
export default Nav
```

## 4. 处理动态路由

一些组件包含动态部分，必须根据 URL 的要求进行渲染。URL 参数被用来在 URL 中设置动态值。在 Reactrouter 中，占位符被传递给 `<Route/>` 组件中以冒号开始的路径道具。

为了证明这个判断，让我们考虑在应用程序的商店页面上显示一个产品列表。当用户点击某个特定产品时，他们应该被引导到该产品的详细信息页面。导航是动态进行的，在路径道具中传递产品 ID 作为占位符。

```JavaScript
 <Route path = '/shop/:id' component = {Details}/>
```

> 在 Hookrouter 中，URL 参数的传递方式与 Reactrouter 中的方式相同，结构也是一样的。

```JavaScript
const routes = {
     '/shop/:id':({id})=><Details id={id}/>
  };
```

然而，Hookrouter 对 URL 参数的处理方式不同。

1. 它使用路由对象中定义的键来读取 URL 参数。
2. 将它们放入一个对象中，命名的参数将作为一个组合对象被转发给路由结果函数。
3. 使用对象解构从中提取动态属性，然后可以应用于相关组件。

因此，正如你所看到的，使用 Reactrouter 获得的结果同样可以通过 Hookrouter 实现。

## 5. Hookrouter 的其他特性

### 程序化导航

使用 Hookrouter 依赖包的 `navigate(url, [replace], [queryParams])` 函数，可以用来将用户发送到一个提供的绝对或相对 URL 定义的特定页面。例如，要导航到关于页面，可以使用下面的代码片段。

```js
navigate(‘/about’) 
```

`navigate()` 默认是一个向前的导航。因此，将在浏览历史中创建一个新的条目，用户可以点击浏览器中的后退按钮，回到前一页。

### 重定向

Hookrouter 借助于 `useRedirect()` hook 来处理重定向问题。它需要一个源路由和一个目标路由作为参数。

```js
useRedirect('/', '/greeting');
```

每当 `/` 路径被匹配，`useRedirect()` 将自动将用户重定向到 `/greeting` 路径。

这个 hook 会触发一个替换的路由导航。因此，在导航历史中，将只有一个条目。因此，如果重定向从 `/` 发生到 `/greeting`，如最后一个代码片断所示， `/` 路线将不会出现在浏览历史中。

许多其他 Reactrouter 库的功能（除了这里讨论的那些）可以使用 Hookrouter 模块实现，如嵌套路由、懒加载组件和服务器端渲染。

此外，请随时查看 [Hookrouter 文档](https://github.com/Paratron/hookrouter/blob/master/src-docs/pages/en/README.md)，了解更多关于这个模块的信息。

## 不足之处

我注意到，有时 Hookrouter 在最新版本默认启用的[**严格模式**]的 create-react-app 中(https://reactjs.org/docs/strict-mode.html)无法工作。

然而，你只需要从 index.js 中删除 `<React.StrictMode>` 组件就可以使用 Hookrouter。

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

另一个缺点是，由于这个模块相对较新。它可能包含一些未知的和不寻常的错误，从而导致发生意外结果。

## 本文总结

从上面的示例可以看出，Hookrouter 模块为处理 React 应用程序中的路由提供了一个更简洁、更快速、更灵活的选择。

它提供了 Reactrouter 库的大部分功能。因此，我鼓励你去尝试一下，先在小型项目中使用它。

谢谢你的阅读！

---
 * 原文地址：[Hookrouter: A Modern Approach to React Routing](https://blog.bitsrc.io/hookrouter-a-modern-approach-to-react-routing-b6e36f7d49d9)
 * 原文作者：[Isuri Devindi](https://medium.com/@isuridevindi)
 * 译文出自：[掘金翻译计划](https://github.com/xitu/gold-miner)
 * 本文永久链接：[https://github.com/xitu/gold-miner/blob/master/article/2021/hookrouter-a-modern-approach-to-react-routing.md](https://github.com/xitu/gold-miner/blob/master/article/2021/hookrouter-a-modern-approach-to-react-routing.md)
 * 译者：[Zz招锦](https://github.com/zenblo)
 * 校对者：[Kim Yang](https://github.com/KimYangOfCat)、[PassionPenguin](https://github.com/PassionPenguin)