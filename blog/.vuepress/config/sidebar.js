module.exports= {
    '/algorithm/leetcode/': getAlgorithmSidebar(),
    '/algorithm/summary/': getAlgorithmSummarySidebar(),
    '/tc39-work/':getTC39WorkSidebar(),
}

function getAlgorithmSidebar() {
    return [
        '/algorithm/leetcode/35-搜索插入位置',
        '/algorithm/leetcode/38-外观数列',
        '/algorithm/leetcode/53-最大子序和',
        '/algorithm/leetcode/58-最后一个单词的长度',
        '/algorithm/leetcode/66-加一',
        '/algorithm/leetcode/70-爬楼梯',
        '/algorithm/leetcode/690-员工的重要性',
        '/algorithm/leetcode/1779-找到最近的有相同x或y坐标的点',
        '/algorithm/leetcode/1832-判断句子是否为全字母句',
        '/algorithm/leetcode/1833-雪糕的最大数量',
        '/algorithm/leetcode/lcp22-黑白方格画',
    ]
}
function getAlgorithmSummarySidebar() {
    return [
        '/algorithm/summary/',
        '/algorithm/summary/the-diff-of-loop-iterate',
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
        '/tc39-work/TODO.md'
    ]
}