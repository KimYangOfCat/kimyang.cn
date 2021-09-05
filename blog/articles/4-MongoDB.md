---
title: "macOS 下 MongoDB 配置与使用"
date: 2019-10-18
draft: false
tags: [MongoDB]
categories: [🎁 初体验]
---
[MongoDB](https://www.mongodb.com/) 是一个基于分布式文件存储的数据库，是目前前端开发中使用较多的非关系数据库之一。
<!-- more -->
## 下载
### 官网下载
[官网下载地址](https://www.mongodb.com/download-center/enterprise)，如下图，选择你所需要的 MongoDB 版本就好

![官网下载选择界面](https://picbed.kimyang.cn/202109050822677.jpg)

下载完成以后，打开下载的压缩包，解压后的文件目录大致如下：

![文件结构](https://picbed.kimyang.cn/202109050823033.jpg)

其中 bin 文件夹下存放的都是 mongoDB 的命令，接下来我们三步配置

* 构建目录结构：在 mongoDB 文件夹下新建 `data` 文件夹；然后在 `data` 文件夹下新建 `db`、`logs` 和 `etc` 三个文件夹分别用于存放数据、输出日志和环境配置；然后在 `logs` 文件夹下建立 `mongodb.log` 文件，在 `etc` 下新建 `mongo.conf`

![修改后的文件结构](https://picbed.kimyang.cn/202109050823758.jpg)

* 编辑 `mongo.conf` ：

```bash
#数据库路径(找到你自己刚才新建的 db 文件夹的绝对路径)
dbpath=/Users/zhangsan/Documents/mongodb-macos-x86_64-4.2.0/data/db
#日志输出文件路径（找到你自己刚才新建的 mongodb.log 文件夹的绝对路径）
logpath=/Users/zhangsan/Documents/mongodb-macos-x86_64-4.2.0/data/logs/mongodb.log
#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false
#是否后台启动，有这个参数，就可以实现后台运行
fork=false
#端口号 默认为27017
port=27017
```

* 配置环境变量：

在这里我使用的 `zsh` 终端，所以仅言明 `zsh` 的配置方法:
    * 打开并编辑 `.zshrc` 文件：`vim ~/.zshrc`, 添加内容如下：
    
```bash
    # mongodb
    export PATH=/Users/zhangsan/Documents/mongodb-macos-x86_64-4.2.0/bin:${PATH}
    #记得把上边路径换成你自己的 bin 文件夹的绝对路径
```
* 重启 `zsh` 服务 `source ~/.zshrc`

至此 mongodb 配置完毕，来尝试启动一下吧！

```bash
# 启动命令：
mongod -f /Users/zhangsan/Documents/mongodb-macos-x86_64-4.2.0/data/etc/mongo.conf
# 或者
mongod --config  /Users/zhangsan/Documents/mongodb-macos-x86_64-4.2.0/data/etc/mongo.conf
```

启动之后，可以尝试使用一些可视化工具连接一下，此处推荐 [Robo 3T](https://robomongo.org/download)

![Robo 3T](https://tva1.sinaimg.cn/large/0082zybpgy1gbzea9w2m9j31uj0u011t.jpg)

**一定要记得 添加 -f 或者 --config 参数并指明 mongo.config 文件的绝对路径** 不然，你之前配置的 mongo.conf 文件就没有作用了

---

**注意下面的方法已经失效**

---

### Homebrew 下载
使用 macOS 上最好用的包管理工具 [Homebrew](https://brew.sh/) 下载。

**一行命令下载 Homebrew：**
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

**在 Homebrew 中搜索可下载版本：**`brew search mongodb`
![](https://picbed.kimyang.cn/202109050823366.jpg)

**在 Homebrew 中下载你需要的版本：**例如：`brew install mongodb`

等待安装完成就好。使用 Homebrew 安装的好处就在于不用关心环境配置

---

**经过实际验证，现在 Homebrew 似乎已经不支持 mongodb 的下载了，不知道具体原因，也许是我个人环境造成的。**

![不能下载了](https://picbed.kimyang.cn/202109050823338.jpg)