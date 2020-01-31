# Blog-src
The source code of kim's blog !

# Git clone with submodle
一次性下载更新
`git clone --recursive https://github.com/KimYangOfCat/Blog-src`

# Two 
* first 先克隆主仓库
`git clone https://github.com/KimYangOfCat/Blog-src` 
* then  后更新子模块
`git submodule update --init --recursive`

# 启动本地服务器
`hugo --i18n-warnings server`