module.exports = {
    title: 'Kim\'s Blog',
    base: "/",
    description: "blog",
    theme: 'reco',
    port: 2333,
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    themeConfig: {
        type:'blog',
        authorAvatar: '/avatar.jpg',
        mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        noFoundPageByTencent: false,//关闭404
        codeTheme: 'tomorrow',
        nav: [
            { text: 'Home', link: '/',icon:'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'Friends', link: '/friends', icon: 'reco-message' },
            { text: 'GitHub', link: 'https://github.com/KimYangOfCat', icon: 'reco-github' },
            {
                text: 'other',
                ariaLabel: 'Other Menu',
                items:[
                    { text: '知乎', link: 'https://www.zhihu.com/people/kim_yang', icon: 'reco-zhihu' },
                    { text: 'CSDN', link: 'https://me.csdn.net/weixin_43316691', icon: 'reco-csdn' },
                    { text: '微博', link: 'https://weibo.com/6373489690/profile?topnav=1&wvr=6&is_all=1', icon: 'reco-weibo' },
                    { text: 'Email', link: 'mailto:Kim.Yang.YJ@outlook.com', icon: 'reco-mail' },
                ]
            }
            // { text: 'sidebar', link: '/views/sidebar/' },
            // { text: 'sidebar', link: '/views/sidebargroup/' }
        ],
        sidebar: 'auto',
        // 博客配置
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            }
        },
        //
        friendLink: [
            {
                title: 'vuepress-theme-reco',
                desc: 'A simple and beautiful vuepress Blog & Doc theme.',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            },
        ]
    }
}