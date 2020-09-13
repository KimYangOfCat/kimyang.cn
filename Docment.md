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

## 主题自定义
* Home：
```vue
 <ModuleTransition delay="0.14">
<!--          <h1 v-if="recoShowModule && $frontmatter.heroText !== null">-->
<!--            {{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}-->
<!--          </h1>-->
          <h3 style="font-size: xx-large;font-weight: bolder">Hello,Friends~</h3>
        </ModuleTransition>

<!--        <ModuleTransition delay="0.08">-->
<!--          <p v-if="recoShowModule && $frontmatter.tagline !== null" class="description">-->
<!--            {{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}-->
<!--          </p>-->
<!--        </ModuleTransition>-->

        <ModuleTransition delay="0.18">
          <Content v-show="recoShowModule" class="home-center" custom style="font-size: larger;font-weight: bold;text-align: left; background-color: rgba(0,0,0,0.4);border-radius: 10px"/>
        </ModuleTransition>
```
* Foot:
```vue
<!--    <span>-->
<!--      <i class="iconfont reco-theme"></i>-->
<!--      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>-->
<!--    </span>-->
    <span v-if="$themeConfig.record">
      <i class="iconfont reco-beian"></i>
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span>
    <span>
      <i class="iconfont reco-copyright"></i>
      <a>
        <span v-if="$themeConfig.author || $site.title">{{ $themeConfig.author || $site.title }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>
```