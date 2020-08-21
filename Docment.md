# 仓库说明
## 三个分支
   + `master`： 发布版本源码
   + `beta`： 测试版本源码（用于删除一些草稿文章）
   + `dev`：日常开发版本源码
   + `gh-pages`：最终部署分支

## 主要的工作流程
1. 从 dev 分支 合并到 beta 分支：
    + 切换： `git checkout beta`
    + 回滚： `git reset --hard HEAD^`
    + 合并： `git merge dev`
2. 从dev 分支合并到 master 分支：
    + 合并： `git merge master`

