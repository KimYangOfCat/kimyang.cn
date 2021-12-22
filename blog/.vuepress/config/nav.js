module.exports=[
    { text: '首页', link: '/', icon: 'reco-home' },
    { text: 'TC39', link: '/tc39-work/', icon: 'reco-message' },
    { text: '算法题解', link: '/algorithm/', icon: 'reco-message' },
    {
        // 合并
        text: '项目合集', items: [
            { text: '贪吃蛇游戏', link: 'https://snake.kimyang.cn/'},
            { text: '打地鼠游戏', link: 'https://mole.kimyang.cn/'},
            // { text: '408 笔记', link: 'https://408.kimyang.cn/'},
            // { text: '数学笔记', link: 'https://math.kimyang.cn/'},
        ], icon: 'reco-category'
    },
    {
        // 合并
        text: '其他', items: [
            { text: 'Notion', link: 'https://kim-yang.notion.site/Hello-Friends-0a69a2a346b34495af88a108cb99c1a9', icon: 'reco-home' },
            { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
            { text: '标签', link: '/tag/', icon: 'reco-tag' },
            { text: 'RSS', link: 'https://kimyang.cn/rss.xml', icon: 'reco-rss' },
        ], icon: 'reco-category'
    },
    // { text: '标签', link: '/tag/', icon: 'reco-tag' },
    // { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
    // { text: 'RSS', link: 'https://kimyang.cn/rss.xml', icon: 'reco-rss' },
]