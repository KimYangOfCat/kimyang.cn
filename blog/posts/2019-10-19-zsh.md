---
title: "Ubuntu 安装配置 oh-my-zsh "
date: 2019-10-19
draft: false
tags: [zsh,oh-my-zsh]
categories: [🛠 高效工具]
---
本文旨记录环境配置的命令行，对于 zsh 和 oh-my-zsh 不熟悉，请自行百度～<!-- more -->

1. 更新系统资源列表：`sudo apt-get update`

2. 更新系统软件：`sudo apt-get upgrade`

3. 安装 zsh：`sudo apt-get install zsh`

4. 安装 git：`sudo apt-get install git`

5. 把 zsh 设定为默认命令行工具：`chsh -s /bin/zsh` （非必须，可跳过，执行完成第 7 步后，终端会询问是否切换为 zsh ～）

6. 重启：`reboot` （非必须，可跳过）

7. 安装 oh-my-zsh:

    `sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

    或者

    `sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"`

    **此处遇到问题，国内的服务器或主机在没有梯子的情况下，执行上面两条命令，大概率会因为 GitHub 被墙而无法下载安装脚本**

    +   **解决方案一**：目前我知道的方法是通过未被墙的机器，下载脚本，然后通过 Ftp 上传至主机上执行安装。

    +   **解决方案二**：在游览器中打开`install.sh`文件[链接](https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)进行预览，将预览内容拷贝下来然后在终端使用命令`vim install.sh` 新建并编辑一个`install.sh`文件，将前面复制的内容粘贴到该文件中保存并退出。使用`chmod 777 install.sh` 给文件添加可执行权限，然后运行并安装。这是目前我认为的最好的解决方案～

        ![亲测可行](https://tva1.sinaimg.cn/large/00831rSTgy1gco9z1q6f4j30mi0hwwvh.jpg)

8. 安装 my-zsh 插件：

    * 命令高亮插件

        `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-syntax-highlighting`

    * 自动提示插件

        `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-autosuggestions`

    * 自动补全插件

        `git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-completions`

    这里发现了一些有意思的事情,my-zsh 的插件都在这里：

    ![插件位置](https://tva1.sinaimg.cn/large/0082zybpgy1gbzea53gdbj30tu18ywjl.jpg)

    所以理论上你只要把 github 上的插件，克隆到这里就行了

9. 最后配置  .zshrc 文件就行了

    * 修改主题

        `ZSH_THEME="ys"`

        可使用 [`sed`](https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html) 命令一键修改：

        `sed -i '/^ZSH_THEME=/c\ZSH_THEME="ys"' ~/.zshrc`

    * 配置上边安装的插件

        `plugins=(git zsh-autosuggestions zsh-syntax-highlighting zsh-completions)`

        使用 [`sed`](https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html) 命令一键修改：

        `sed -i '/^plugins=/c\plugins=(git z zsh-syntax-highlighting zsh-autosuggestions zsh-completions)' ~/.zshrc`

    * zsh-com­ple­tions 插件还需把 autoload -U compinit && compinit 添加到.zshrc。

        输入命令可一键添加：
        ```[ -z "`grep "autoload -U compinit && compinit" ~/.zshrc`" ] && echo "autoload -U compinit && compinit" >> ~/.zshrc```

    * 重载zsh

        `source ~/.zshrc`

