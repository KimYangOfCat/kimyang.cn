module.exports=[
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
]