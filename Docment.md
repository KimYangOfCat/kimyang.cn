## 主题自定义
### 源码修改
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
### 主题配色
可查看[配色文件](./blog/.vuepress/styles/palette.styl)