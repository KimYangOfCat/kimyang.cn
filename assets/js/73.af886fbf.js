(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{667:function(s,t,o){"use strict";o.r(t);var _=o(6),e=Object(_.a)({},(function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[o("p",[s._v("本文旨记录环境配置的命令行，对于 zsh 和 oh-my-zsh 不熟悉，请自行百度～")]),s._v(" "),o("ol",[o("li",[o("p",[s._v("更新系统资源列表："),o("code",[s._v("sudo apt-get update")])])]),s._v(" "),o("li",[o("p",[s._v("更新系统软件："),o("code",[s._v("sudo apt-get upgrade")])])]),s._v(" "),o("li",[o("p",[s._v("安装 zsh："),o("code",[s._v("sudo apt-get install zsh")])])]),s._v(" "),o("li",[o("p",[s._v("安装 git："),o("code",[s._v("sudo apt-get install git")])])]),s._v(" "),o("li",[o("p",[s._v("把 zsh 设定为默认命令行工具："),o("code",[s._v("chsh -s /bin/zsh")]),s._v(" （非必须，可跳过，执行完成第 7 步后，终端会询问是否切换为 zsh ～）")])]),s._v(" "),o("li",[o("p",[s._v("重启："),o("code",[s._v("reboot")]),s._v(" （非必须，可跳过）")])]),s._v(" "),o("li",[o("p",[s._v("安装 oh-my-zsh:")]),s._v(" "),o("p",[o("code",[s._v('sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"')])]),s._v(" "),o("p",[s._v("或者")]),s._v(" "),o("p",[o("code",[s._v('sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"')])]),s._v(" "),o("p",[o("strong",[s._v("此处遇到问题，国内的服务器或主机在没有梯子的情况下，执行上面两条命令，大概率会因为 GitHub 被墙而无法下载安装脚本")])]),s._v(" "),o("ul",[o("li",[o("p",[o("strong",[s._v("解决方案一")]),s._v("：目前我知道的方法是通过未被墙的机器，下载脚本，然后通过 Ftp 上传至主机上执行安装。")])]),s._v(" "),o("li",[o("p",[o("strong",[s._v("解决方案二")]),s._v("：在游览器中打开"),o("code",[s._v("install.sh")]),s._v("文件"),o("a",{attrs:{href:"https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接"),o("OutboundLink")],1),s._v("进行预览，将预览内容拷贝下来然后在终端使用命令"),o("code",[s._v("vim install.sh")]),s._v(" 新建并编辑一个"),o("code",[s._v("install.sh")]),s._v("文件，将前面复制的内容粘贴到该文件中保存并退出。使用"),o("code",[s._v("chmod 777 install.sh")]),s._v(" 给文件添加可执行权限，然后运行并安装。这是目前我认为的最好的解决方案～")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://picbed.kimyang.cn/202109050823033.jpg",alt:"亲测可行"}})])])])]),s._v(" "),o("li",[o("p",[s._v("安装 my-zsh 插件：")]),s._v(" "),o("ul",[o("li",[o("p",[s._v("命令高亮插件")]),s._v(" "),o("p",[o("code",[s._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-syntax-highlighting")])])]),s._v(" "),o("li",[o("p",[s._v("自动提示插件")]),s._v(" "),o("p",[o("code",[s._v("git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-autosuggestions")])])]),s._v(" "),o("li",[o("p",[s._v("自动补全插件")]),s._v(" "),o("p",[o("code",[s._v("git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-~/.oh-my-zsh}/plugins/zsh-completions")])])])]),s._v(" "),o("p",[s._v("这里发现了一些有意思的事情,my-zsh 的插件都在这里：")]),s._v(" "),o("p",[o("img",{attrs:{src:"https://tva1.sinaimg.cn/large/0082zybpgy1gbzea53gdbj30tu18ywjl.jpg",alt:"插件位置"}})]),s._v(" "),o("p",[s._v("所以理论上你只要把 github 上的插件，克隆到这里就行了")])]),s._v(" "),o("li",[o("p",[s._v("最后配置 .zshrc 文件就行了")]),s._v(" "),o("ul",[o("li",[o("p",[s._v("修改主题")]),s._v(" "),o("p",[o("code",[s._v('ZSH_THEME="ys"')])]),s._v(" "),o("p",[s._v("可使用 "),o("a",{attrs:{href:"https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[s._v("sed")]),o("OutboundLink")],1),s._v(" 命令一键修改：")]),s._v(" "),o("p",[o("code",[s._v("sed -i '/^ZSH_THEME=/c\\ZSH_THEME=\"ys\"' ~/.zshrc")])])]),s._v(" "),o("li",[o("p",[s._v("配置上边安装的插件")]),s._v(" "),o("p",[o("code",[s._v("plugins=(git zsh-autosuggestions zsh-syntax-highlighting zsh-completions)")])]),s._v(" "),o("p",[s._v("使用 "),o("a",{attrs:{href:"https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2856901.html",target:"_blank",rel:"noopener noreferrer"}},[o("code",[s._v("sed")]),o("OutboundLink")],1),s._v(" 命令一键修改：")]),s._v(" "),o("p",[o("code",[s._v("sed -i '/^plugins=/c\\plugins=(git z zsh-syntax-highlighting zsh-autosuggestions zsh-completions)' ~/.zshrc")])])]),s._v(" "),o("li",[o("p",[s._v("zsh-com­ple­tions 插件还需把 autoload -U compinit && compinit 添加到.zshrc。")]),s._v(" "),o("p",[s._v("输入命令可一键添加：\n"),o("code",[s._v('[ -z "`grep "autoload -U compinit && compinit" ~/.zshrc`" ] && echo "autoload -U compinit && compinit" >> ~/.zshrc')])])]),s._v(" "),o("li",[o("p",[s._v("重载 zsh")]),s._v(" "),o("p",[o("code",[s._v("source ~/.zshrc")])])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);