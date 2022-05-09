(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{629:function(t,r,a){"use strict";a.r(r);var e=a(6),s=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("如题，在复习计算机考研 408 专业课的过程中，我将产出的代码，笔记以及思维导图等做成了一个开源项目。本项目建立至今一月有余，期间也获得了许多研友的 Stars ⭐️ 支持，非常感谢。这也是我第一次独立建立一个开源项目，建立过程中的体验很奇妙，值得书写一篇文章记录一下。下面先给出项目地址：")]),t._v(" "),a("p",[t._v("🚀 GitHub 地址："),a("a",{attrs:{href:"https://github.com/KimYangOfCat/CSPostgraduate-408-2021",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/KimYangOfCat/CSPostgraduate-408-2021"),a("OutboundLink")],1),t._v("，欢迎各位大佬 Stars 🌟 ～ ")]),t._v(" "),a("p",[t._v("长文提示：本文只是单纯记录整个开源过程中的个人感受，以及简单对项目相关内容及技术进行简要介绍，并无太多技术相关细节嗷~")]),t._v(" "),a("h2",{attrs:{id:"起源-为什么我会想到做这样一个开源项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起源-为什么我会想到做这样一个开源项目"}},[t._v("#")]),t._v(" 起源：为什么我会想到做这样一个开源项目？")]),t._v(" "),a("p",[t._v("考研是一个孤独的奋斗过程，但好在有许多研友一起砥砺前行。但由于传统的学习方式产出的笔记等资源都存储在书本 💾 等存储介质上，无法很好滴与他人分享交流。且书本等存储介质 💾 本身的诸多特性造成了它信息的易失性，所以许多同学能找到各大考研机构出版的学习资料，但很少能找到前人在学习过程中产出的总结着许多经验和坑的笔记本，因为它们或多或少都因为现实世界的原因没能传承下去。当然，利用 ipad 等设备书写的电子笔记一定程度上解决这些问题。 而我总觉得这些方式都不够酷，那么如何才能体现一名向往成为极客的计算机考研狗的酷呢？")]),t._v(" "),a("p",[t._v("当然是将自己的学习过程总结发布到 “全球最大的同性交友网站”——GitHub，然后静等下一次"),a("a",{attrs:{href:"https://archiveprogram.github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("微软将它搬到北极存储"),a("OutboundLink")],1),t._v("起来（上次没赶上，有点儿亏 😜），然后等千年以后的考研人看着前人流下的血和泪 （虽然也不知道，千年以后的人还考不考研？🤪 ）好吧，皮了一下，但是 GitHub 确实十分强大，对于文本资料来说，它不仅能提供储存，还能在线预览，甚至还能自定义 web 预览方式。只要你足够了解 GitHub 生态，分享访问，协作修改之类的都是十分方便强大的。总之，在我看来，这方面是比百度网盘之类的更合适。")]),t._v(" "),a("p",[t._v("其次，也是为了记录自己的学习漏洞，帮助自己快速成长～")]),t._v(" "),a("h2",{attrs:{id:"关于项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于项目"}},[t._v("#")]),t._v(" 关于项目")]),t._v(" "),a("h3",{attrs:{id:"项目资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目资源"}},[t._v("#")]),t._v(" 项目资源")]),t._v(" "),a("p",[t._v("目前项目主要收录了六种类型的资源：数据结构的代码、各科的学习笔记、思维导图、历年真题、辅导书籍 PDF 以及视频教程配套 PPT 等，其中前三者均为我个人学习过程中的产物，后面三者来源于网络（若侵权可联系删除）。")]),t._v(" "),a("p",[t._v("所有项目资源都放在 GitHub 上，考虑到国内网络环境，在最开始项目体量较小时，我利用脚本将项目同步到了国内码云平台上。但随着项目更新发展，收容的资源越来越多，导致项目体量超过了码云单仓库体量上限，故最后放弃了同步！！")]),t._v(" "),a("p",[t._v("所以最终只能考虑使用百毒网盘来解决部分同学的网络问题，不定期将项目手动打包至百毒网盘中，供大家自行下载～")]),t._v(" "),a("blockquote",[a("p",[t._v("链接: "),a("a",{attrs:{href:"https://pan.baidu.com/s/1pa2kQHhsvp9XaJSCS1v-xA",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pan.baidu.com/s/1pa2kQHhsvp9XaJSCS1v-xA"),a("OutboundLink")],1),t._v(" 提取码: hdqb")]),t._v(" "),a("p",[t._v("若网盘链接失效，可在 issues 中提醒作者更新嗷～")])]),t._v(" "),a("h3",{attrs:{id:"项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目结构"}},[t._v("#")]),t._v(" 项目结构")]),t._v(" "),a("ul",[a("li",[t._v("代码、思维导图以及 PPT 等资源均按"),a("strong",[t._v("科目")]),t._v("分类整理，存放于根目录下的"),a("strong",[t._v("以各科命名")]),t._v("的文件夹下。")]),t._v(" "),a("li",[t._v("笔记单独存放于 "),a("code",[t._v("408Notes")]),t._v(" 文件夹下，同样以各科名分类整理。")]),t._v(" "),a("li",[t._v("历年真题资源全部存放于 "),a("code",[t._v("408Exam")]),t._v(" 文件夹中。")]),t._v(" "),a("li",[t._v("辅导书籍 PDF 版本可至 "),a("a",{attrs:{href:"https://github.com/KimYangOfCat/2021-CSPostgraduate-408/releases/tag/%E8%BE%85%E5%AF%BC%E4%B9%A6%E7%B1%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("Releases"),a("OutboundLink")],1),t._v(" 中下载。")])]),t._v(" "),a("h2",{attrs:{id:"项目搭建过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目搭建过程"}},[t._v("#")]),t._v(" 项目搭建过程")]),t._v(" "),a("p",[t._v("关于这一部分，是我经历的最有趣的部，也是收获最大的部分，同时也是唯一需要部分技术实践的部分：")]),t._v(" "),a("h3",{attrs:{id:"文件结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[t._v("#")]),t._v(" 文件结构")]),t._v(" "),a("p",[t._v("目前的文件结构可以参考上文中的项目结构，而在项目搭建之初，文件可不是现在这样井然有序哒。相比于其他模块这一部分可谓是让我最为头疼的一部分，至于为什么，且听我娓娓道来：")]),t._v(" "),a("p",[t._v("项目搭建之初，我就是简单地将各科资源按"),a("strong",[t._v("科目")]),t._v("分类整理，笔记、源码、思维导图什么的都是堆在一个科目文件夹下。起初觉得没有什么，但随着文件数量越来越多，科目文件夹下杂乱不堪，找一个文件，眼睛得看瞎，故而又按"),a("strong",[t._v("资源类别")]),t._v("进行了分类整理，这下看着舒服多了。")]),t._v(" "),a("p",[t._v("但是后来又发现了问题，单纯"),a("strong",[t._v("以内容标题")]),t._v("的命名方式会导致文件排序杂乱不堪，不利于排序，故而给定了命名格式："),a("code",[t._v("科目_章节_序号_内容标题")]),t._v("。其中，科目的取值范围为：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("DS")]),t._v(" ：DataStructure 的缩写，代表数据结构")]),t._v(" "),a("li",[a("code",[t._v("CN")]),t._v("：ComputerNetwork 的缩写，代表计算机网络")]),t._v(" "),a("li",[a("code",[t._v("CO")]),t._v("：ComputerOrganization 的缩写，代表计算机组成原理")]),t._v(" "),a("li",[a("code",[t._v("OS")]),t._v("：OperatingSystem 的缩写，代表操作系统")])]),t._v(" "),a("p",[t._v("同时，所有的章节、序号均是从 0 开始计数，毕竟这才符合程序员数数的风格，嘿嘿 😃")]),t._v(" "),a("p",[t._v("总结，这一部分看着其实没有什么技术含量，但其实每一次修改结构都是一次痛苦的经历，每一次都得手工将所有文件名修改为符合新的定义的文件名。这样的痛苦经历就类似于 windows 电脑整理变红的 C 盘空间的，想想那个时候的你有多无助，当初修改文件结构的我就有多奈。当然我也可以选择不修改文件结构，但是这就会给使用项目资源的大家造成更多的困扰，既然总是会给人带来麻烦，那么麻烦我一个人，幸福各位研友，岂不美哉？那么最后我总结的结论就是，想要维护一个开源项目一定要将项目结构提前规划好，保证干净明了，这样既方便使用的同学，也方便项目的更新维护，这样的项目才能得到更多人的喜爱。")]),t._v(" "),a("h3",{attrs:{id:"笔记博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔记博客"}},[t._v("#")]),t._v(" 笔记博客")]),t._v(" "),a("p",[t._v("首先什么是"),a("a",{attrs:{href:"http://408.kimyang.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("笔记博客"),a("OutboundLink")],1),t._v("？其实就是将自己写的 Markdown 笔记文件利用静态博客生成工具生成静态资源发布到 GitHub Pages ，与其他项目的静态文档和许多同学的静态博客使用的是类似的技术路线。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picbed.kimyang.cn/202109050806592.jpg",alt:"image-20200917010013130"}})]),t._v(" "),a("h4",{attrs:{id:"静态博客生成工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态博客生成工具"}},[t._v("#")]),t._v(" 静态博客生成工具")]),t._v(" "),a("p",[t._v("基于笔记内容的考虑，它比较类似其他开源项目的文档，故在选择静态博客工具时，首先考虑的是支持文档内容的工具。经过一番对比，最终确定了原本就是为了书写 Vue 文档开发的 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress"),a("OutboundLink")],1),t._v("。关于博客主题，也是在默认主题的基础上进行了简单定制化。关于 VuePress ，我一直都是知道这个工具的，只是一直没有实际场景让我去使用它，这次正好是一次机会。在试用过一次之后，我只想说对于 Vue，开发者来说，它真的是太友好了，十分简洁好用，爱了爱了，在此各位想搭建个人博客的同学安利它。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://tva1.sinaimg.cn/large/007S8ZIlly1giszg47c4fj30go0go786.jpg"}})]),t._v(" "),a("h4",{attrs:{id:"评论系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论系统"}},[t._v("#")]),t._v(" 评论系统")]),t._v(" "),a("p",[t._v("作为一个开源项目，最不能缺少的就是一个给各位同学讨论的平台，但是我们的笔记博客是基于 GitHub Pages 的，它没有后端。所以只能考虑那些基于 GitHub issues 的评论系统，其中名气最大的应该便是 "),a("a",{attrs:{href:"https://gitalk.github.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitalk"),a("OutboundLink")],1),t._v(" 了。但是我曾经使用过它，再用一次总感觉没什么意思，于是经过我的一番查找，我终于找到了一个新的基于 Vue 开发的功能更强大的评论系统——"),a("a",{attrs:{href:"https://vssue.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vssue"),a("OutboundLink")],1),t._v("，并且它还原生支持 "),a("code",[t._v("VuePress")]),t._v("，这还有什么理由不用它，淦～于是，同学们有了可以夸我的留言板，嘿嘿 😀 ！")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://picbed.kimyang.cn/202109050806593.jpg",alt:"image-20200917011042307"}})]),t._v(" "),a("h3",{attrs:{id:"logo-设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logo-设计"}},[t._v("#")]),t._v(" Logo 设计")]),t._v(" "),a("p",[t._v("既然博客都搭建起来了，没有自己的 Logo，似乎有点儿不美。所以作为美工小白的我尝试自己动手设计了一个 Logo ，主要依据 408 这 3 个数字为主体进行意像化处理。其中，中间的小帆船形状类似于数字 4 ，最外边的大圆圈 ⭕️ 当然就代表数字 0 了，帆船下面就是一个躺着的数字 8 啦，它代表的也是一片汪洋大海。那么整个 LOGO 表达的寓意就是：“学海无涯苦作舟”，“直挂云帆济沧海”，愿诸君与我共勉～")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/KimYangOfCat/CSPostgraduate-408-2021/408Notes/.vuepress/public/icons@2x.png"}})]),t._v(" "),a("h4",{attrs:{id:"ci-流水线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ci-流水线"}},[t._v("#")]),t._v(" CI 流水线")]),t._v(" "),a("p",[t._v("流水线对于项目而已并不是一个不可缺少的内容，但它却能大大减少维护项目的工作量。简单来说就是，就是将与项目部署相关的一系列脚本放置云端，让其根据更新状态自动执行。以前，我主要使用的是 "),a("code",[t._v("Traivs")]),t._v("、"),a("code",[t._v("Drone")]),t._v(" 等一些第三方的 CI 工具，但是距离 GitHub 官方的流水线服务——Actions 上线也两年了, 一直没有认真学习并使用它。所以趁着这次机会，我尝试使用它实现了关于自动同步和笔记博客自动部署两个脚本，功能非常强大。与第三方 CI 不同的是，GitHub 充分发挥其生态优势，使得每个 Actions 都能直接调用其他大佬的写的相关脚本，这对于我这种懒人简直不要太爽。")]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("感谢看到这里的你，以上差不多便是我第一次制作并维护一个开源项目的经历与感受。其实，维护这个开源项目对我个人的考研复习并不一定有多大的帮助，但这漫漫无聊的复习备考的征途对于我喜欢折腾的性格来说便是最大的无聊。每晚从图书馆归来维护这个项目的时候便是我一天最快乐的时光，正所谓兴之所至也，无所求也。但各位同学的 Stars 🌟 仍旧是我最大动力源泉，感谢所有给过这个项目 Starts ⭐️ 的同学，我一定尽快把挖的坑都补上～ 😅")])])}),[],!1,null,null,null);r.default=s.exports}}]);