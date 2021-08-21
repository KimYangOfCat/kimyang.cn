const plugins=require('./config/plugins')
const nav=require('./config/nav')
const sidebar=require('./config/sidebar')
const friendLink=require('./config/friends')

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
        //Comments
        valineConfig: {
            appId: 'jKwH5EJyUIoKLdDddNDTUueK-gzGzoHsz',// your appId
            appKey: 'v7DTuoMTFCv63zxKtkYMUFp8', // your appKey
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
  
         //config 目录
        nav,
        sidebar,
        friendLink,
    },
    plugins,
}