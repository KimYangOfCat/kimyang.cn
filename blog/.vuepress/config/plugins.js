module.exports = [
  [
    "@renovamen/vuepress-plugin-katex",
    {
      throwOnError: false, // (optional)
      errorColor: "#cc0000", // (optional)
    },
  ],
  ["vuepress-plugin-mermaidjs"],
  ["flowchart"],
  ["vuepress-plugin-boxx"],
  ["@vuepress-reco/extract-code"],
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新啦！",
        buttonText: "更新",
      },
    },
  ],
  [
    //图片放大插件
    "@vuepress/medium-zoom",
    {
      selector: ".page img",
      delay: 1000,
      options: {
        margin: 24,
        background: "rgba(25,18,25,0.9)",
        scrollOffset: 40,
      },
    },
  ],
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!",
      },
    },
  ],
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
  [
    "@vuepress-reco/vuepress-plugin-rss",
    {
      //RSS
      site_url: "https://kimyang.cn",
    },
  ],
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
];
