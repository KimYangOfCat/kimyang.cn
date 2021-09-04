module.exports= {
    '/algorithm/': getAlgorithmSidebar(),
    '/tc39-work/':getTC39WorkSidebar(),
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
function getTC39WorkSidebar(){
    return [
        {
            title: 'TC39 合作流程', 
            path: '/tc39-work/', 
        },
        '/tc39-work/champion.md',
        '/tc39-work/explainer.md',
        '/tc39-work/pr.md',
        '/tc39-work/presenting.md',
        '/tc39-work/how-to-read.md',
        '/tc39-work/feedback.md',
        '/tc39-work/stage-3-review.md',
        '/tc39-work/experiment.md',
        '/tc39-work/implement.md',

        '/tc39-work/host.md',
        '/tc39-work/how-to-participate-in-meetings.md',
        '/tc39-work/how-to-take-notes.md',
        '/tc39-work/call.md',
        
        '/tc39-work/join-tc39.md',
        '/tc39-work/invited-expert.md',
        '/tc39-work/management.md',
        '/tc39-work/ip.md',

        '/tc39-work/archival.md',
        '/tc39-work/terminology.md',
    ]
}