module.exports = {
    title: 'Kim\'s Blog',
    base: "/",
    description: "Kim\'s Blog is coming~",
    // theme: '/theme/layouts/Layout.vue',
    port: 2233,
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: "image/x-icon" }],
        ['link', { rel: ' short icon', href: '/favicon.ico', type: "image/x-icon" }],
        ['link', { rel: 'apple-touch-icon', href: `/favicon.ico`, type: "image/x-icon" }],
    ],
    themeConfig: {
        type: 'blog',
        author: "Kim Yang",
        logo: '/favicon.ico',
        startYear: 2019,
        authorAvatar: '/avatar.jpg',
        mode: 'dark', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
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
        // editLinks: true,
        // // 默认为 "Edit this page"
        // editLinkText: '帮助我们改善此页面！',
        nav: getNav(),
        sidebar: getSidebar(),
        // 博客配置
        blogConfig: getBlogConfig(),
        friendLink: getFriendsLink(),
        //Comments
        valineConfig: {
            appId: 'jKwH5EJyUIoKLdDddNDTUueK-gzGzoHsz',// your appId
            appKey: 'v7DTuoMTFCv63zxKtkYMUFp8', // your appKey
        }
    },
    plugin: [['@vuepress-reco/rss', {
        site_url: 'https://kimyang.cn',
    }],],
}

//导航栏设置
function getNav() {
    return [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'GitHub', link: 'https://github.com/KimYangOfCat', icon: 'reco-github' },
        {
            text: 'other',
            ariaLabel: 'Other Menu',
            items: [
                { text: '知乎', link: 'https://www.zhihu.com/people/kim_yang', icon: 'reco-zhihu' },
                { text: 'CSDN', link: 'https://me.csdn.net/weixin_43316691', icon: 'reco-csdn' },
                // {
                //     text: '微博',
                //     link: 'https://weibo.com/6373489690/profile?topnav=1&wvr=6&is_all=1',
                //     icon: 'reco-weibo'
                // },
                { text: 'Email', link: 'mailto:Kim.Yang.YJ@outlook.com', icon: 'reco-mail' },
            ]
        }
    ]
}

function getSidebar() {
    return 'auto'
}

function getBlogConfig() {
    return {
        category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
        },
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
        }
    }
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