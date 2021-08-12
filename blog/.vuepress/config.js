module.exports = {
    title: 'Kim\'s Blog',
    base: process.env.BASE_BLOG,
    description: "做技术与艺术的创新者!",
    port: 2233,
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: "image/x-icon" }],
        ['link', { rel: ' short icon', href: '/favicon.ico', type: "image/x-icon" }],
        ['link', { rel: 'apple-touch-icon', href: `/favicon.ico`, type: "image/x-icon" }],
    ],
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        type: 'blog',
        author: "Kim Yang",
        logo: '/favicon.ico',
        mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        startYear: 2019,
        authorAvatar: '/avatar.jpg',
        noFoundPageByTencent: false,//关闭404
        codeTheme: 'tomorrow',
        lastUpdated: '最后更新时间：',
        nextLinks: true,
        prevLinks: true,
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'KimYangOfCat/Blog',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'blog',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '发现错误？欢迎斧正',
        nav: [
            { text: '首页', link: '/', icon: 'reco-home' },
            { text: '算法题解', link: '/algorithm/', icon: 'reco-message' },
            {
                // 合并
                text: '其他', items: [
                    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
                    { text: '标签', link: '/tag/', icon: 'reco-tag' },
                    { text: 'RSS', link: 'https://kimyang.cn/rss.xml', icon: 'reco-rss' },
                ], icon: 'reco-category'
            },
            // { text: '标签', link: '/tag/', icon: 'reco-tag' },
            // { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            // { text: 'RSS', link: 'https://kimyang.cn/rss.xml', icon: 'reco-rss' },
        ],
        sidebar: {
            '/algorithm/': getAlgorithmSidebar(),
        },
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '归档' // 默认文案 “分类”
            },
            socialLinks: [     // 信息栏展示社交账号
                { link: 'mailto:Kim.Yang.HG@outlook.com', icon: 'reco-mail' },
                { link: 'https://github.com/KimYangOfCat', icon: 'reco-github' },
                { link: 'https://mp.weixin.qq.com/s/kSfjVbzlP46oB-Ux-MPWzA', icon: 'reco-wechat' },
                { link: 'https://space.bilibili.com/240836280', icon: 'reco-bilibili' },
                { link: 'https://www.zhihu.com/people/kim_yang', icon: 'reco-zhihu' },
                { link: 'https://weibo.com/6373489690/profile?topnav=1&wvr=6&is_all=1', icon: 'reco-weibo' },
                // { link: 'https://me.csdn.net/weixin_43316691', icon: 'reco-csdn' },
            ]
        },
        friendLink: getFriendsLink(),
        //Comments
        valineConfig: {
            appId: 'jKwH5EJyUIoKLdDddNDTUueK-gzGzoHsz',// your appId
            appKey: 'v7DTuoMTFCv63zxKtkYMUFp8', // your appKey
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        }
    },
    plugins: [
        ['@renovamen/vuepress-plugin-katex', {
            'throwOnError': false,  // (optional)
            'errorColor': '#cc0000'  // (optional)
        }],
        ['vuepress-plugin-mermaidjs'],
        ['flowchart'],
        ["vuepress-plugin-boxx"],
        ['@vuepress-reco/extract-code'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "有新的内容更新啦！",
                buttonText: "更新"
            }
        }],
        [
            //图片放大插件 
            '@vuepress/medium-zoom',
            {
                selector: '.page img',
                delay: 1000,
                options: {
                    margin: 24,
                    background: 'rgba(25,18,25,0.9)',
                    scrollOffset: 40
                }
            }
        ],
        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
            tip: {
                content: "复制成功!"
            }
        }],
        // 支持中文文件名
        [
            "permalink-pinyin",
            {
                lowercase: true, // Converted into lowercase, default: true
                separator: "-", // Separator of the slug, default: '-'
            },
        ],
        // ['@vuepress-reco/vuepress-plugin-pagation', {
        //     //修改分页数量
        //     perPage: 18
        // }],
        ['@vuepress-reco/vuepress-plugin-rss', {
            //RSS
            site_url: "https://kimyang.cn"
        }],
        // ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
        //     width: '300px', // 默认 260px
        //     title: '欢迎关注',
        //     body: [
        //         {
        //             type: 'title',
        //             content: '更多资源请关注我的微信公众号！🎉🎉🎉',
        //             style: 'text-aligin: center;'
        //         },
        //         {
        //             type: 'image',
        //             src: '/qc/wechatqc.png'
        //         },
        //         {
        //             type: 'image',
        //             src: '/qc/bilibili.png'
        //         }
        //     ],
        //     footer: [
        //         {
        //             type: 'button',
        //             text: '赞赏',
        //             link: '/sponsor'
        //         }
        //     ]
        // }], [
        //     'vuepress-plugin-sponsor',
        //     {
        //         theme: 'simple',
        //         alipay: '/sponsor/alipag.png',
        //         wechat: '/sponsor/wechatpay.png',
        //         qq: '/sponsor/qqpay.png',
        //         // paypal: 'https://www.paypal.me/yokefellow',
        //         duration: 2000
        //     }
        // ],
    ],
}

function getFriendsLink() {
    return [
        {
            title: 'TJNU iOS Club',
            desc: ' iOS club of Tianjin Normal University',
            logo: "/images/friends/TJNUiOSClub.jpg",
            link: 'https://tjnuios.club/'
        },
        {
            title: 'C422 Studio',
            desc: 'C422 studio at Department of Computer and Information Engineering, Tianjin Normal University',
            logo: "/images/friends/C422.jpg",
            link: 'https://c422.github.io/'
        },
        {
            title: 'YiQin Zhao',
            desc: 'To work hard, to be diligent',
            logo: "/images/friends/YiqinZhao.jpg",
            link: 'https://yiqinzhao.me/'
        },
        {
            title: '某莔の异次元空间',
            desc: ' 某莔の异次元空间',
            logo: "/images/friends/Arabaku.jpg",
            link: 'https://fix.moe/'
        },
        {
            title: 'Steve Fan',
            desc: ' Steve Fan',
            logo: "/images/friends/fanjiawen.png",
            link: 'https://godjiawen.github.io/'
        },
    ]
}
function getAlgorithmSidebar() {
    return [
        '/algorithm/',
        '/algorithm/35-搜索插入位置',
        '/algorithm/38-外观数列',
        '/algorithm/53-最大子序和',
        '/algorithm/58-最后一个单词的长度',
        '/algorithm/66-加一',
        '/algorithm/70-爬楼梯',
        '/algorithm/690-员工的重要性',
        '/algorithm/1779-找到最近的有相同x或y坐标的点',
        '/algorithm/1832-判断句子是否为全字母句',
        '/algorithm/1833-雪糕的最大数量',
        '/algorithm/lcp22-黑白方格画',
    ]
}