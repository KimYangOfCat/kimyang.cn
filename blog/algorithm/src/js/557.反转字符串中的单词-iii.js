/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (74.30%)
 * Likes:    400
 * Dislikes: 0
 * Total Accepted:    203.2K
 * Total Submissions: 273.4K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * 给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Let's take LeetCode contest"
 * 输出："s'teL ekat edoCteeL tsetnoc"
 *
 *
 * 示例 2:
 *
 *
 * 输入： s = "God Ding"
 * 输出："doG gniD"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 5 * 10^4
 * s 包含可打印的 ASCII 字符。
 * s 不包含任何开头或结尾空格。
 * s 里 至少 有一个词。
 * s 中的所有单词都用一个空格隔开。
 *
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	// use js API
	let arr = s.split(" ");
	return arr.map((v) => v.split("").reverse().join("")).join(" ");
};
// @lc code=start
var reverseWords = function (s) {
	function reverse(arr) {
		let left = 0;
		let right = arr.length - 1;
		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
		return arr;
	}
	return s
		.split(" ")
		.map((v) => reverse(v.split("")).join(""))
		.join(" ");
};
// @lc code=end
