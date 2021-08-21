/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (35.14%)
 * Likes:    343
 * Dislikes: 0
 * Total Accepted:    211.4K
 * Total Submissions: 601.6K
 * Testcase Example:  '"Hello World"'
 *P
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
 * 
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "Hello World"
 * 输出：5
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let end = s.length - 1;//尾部指针
    while(end >= 0 && s[end] == ' ') end--;//忽略尾部空格
    if(end < 0) return 0;
    let start = end;//头部指针出发
    while(start >= 0 && s[start] != ' ') start--;
    return end - start;
};
// @lc code=end

var lengthOfLastWord = function(s) {
    let count=0;
    for(let i=s.length-1;i>-1;i--){
        if(s[i]===' '){
            if(count==0)continue;//count为零时便一直跳过末尾的空字符
            break//count非零之后，第二次遇到空字符就结束
        }
        count++
    }
    return count;
};
var lengthOfLastWord = function(s) {
    //分割后空数组全部筛去
    let words = s.split(' ').filter((item)=>item != '')
    //注意如果原数组全部为空格，筛选后words为空数组
    return words.length != 0?words[words.length-1].length:0
};

//这样反转数组还是比较耗时耗空间的
var lengthOfLastWord = function(s) {
    return s.trim().split(' ').reverse()[0].length
    //trim 去除首尾空格；split 按空格分割，reverse 反转数组。
};

//果然开启API之后，运行速度会降很多，但我认为这是我目前想到的最简单的写法
var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
  //trim 去除首尾空格；split 按空格分割，pop弹出尾部单词
};