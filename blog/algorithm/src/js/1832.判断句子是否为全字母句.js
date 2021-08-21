/*
 * @lc app=leetcode.cn id=1832 lang=javascript
 *
 * [1832] 判断句子是否为全字母句
 *
 * https://leetcode-cn.com/problems/check-if-the-sentence-is-pangram/description/
 *
 * algorithms
 * Easy (84.47%)
 * Likes:    2
 * Dislikes: 0
 * Total Accepted:    6.8K
 * Total Submissions: 8.1K
 * Testcase Example:  '"thequickbrownfoxjumpsoverthelazydog"'
 *
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。
 * 
 * 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。
 * 
 * 如果是，返回 true ；否则，返回 false 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
 * 输出：true
 * 解释：sentence 包含英语字母表中每个字母至少一次。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：sentence = "leetcode"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * sentence 由小写英语字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let newMap = new Map();
    for (let item of sentence) {
        if (!newMap.get(item)) {
            newMap.set(item, 1)
            if (newMap.size === 26) return true;
        }
    }
    return false;
};
// @lc code=end

var checkIfPangram = function (sentence) {
    if (sentence.length < 26) return false;
    let isHave;
    for (let i = 97; i < 123; i++) {
        isHave = sentence.indexOf(String.fromCharCode(i));
        if (isHave == -1) return false;
    }
    return true;
};

var checkIfPangram = function (sentence) {
    //filter去重
    return sentence.split('').filter((item, index, arr) => arr.indexOf(item) === index).length === 26

};

var checkIfPangram = function (sentence) {
    var newSet = new Set(sentence);
    return newSet.size == 26;
};

var checkIfPangram = function (sentence) {
    //直接 set 去重
    return new Set(sentence).size === 26;
};


