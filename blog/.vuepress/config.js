module.exports = {
    title: 'Kim\'s Blog',
    base: process.env.BASE_BLOG,
    description: "做技术与艺术的创新者～",
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
            {
                text: '其他功能', items: [
                    { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
                    { text: '标签', link: '/tag/', icon: 'reco-tag' },
                ], icon: 'reco-category'
            }
        ],
        sidebar: {

        },
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '归档' // 默认文案 “分类”
            },
            // tag: {
            //     location: 3,     // 在导航栏菜单中所占的位置，默认3
            //     text: '标签'      // 默认文案 “标签”
            // },
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
        }
    },
    plugins: [
        // 支持中文文件名
        [
            "permalink-pinyin",
            {
                lowercase: true, // Converted into lowercase, default: true
                separator: "-", // Separator of the slug, default: '-'
            },
        ],
        ['@vuepress-reco/vuepress-plugin-pagation', {
            //修改分页数量
            perPage: 18
        }],
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