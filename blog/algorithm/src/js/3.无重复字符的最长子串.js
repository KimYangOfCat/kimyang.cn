/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 *
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (38.45%)
 * Likes:    6915
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 3.9M
 * Testcase Example:  '"abcabcbb"'
 *
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 *
 *
 */

const { reduceRight } = require("core-js/core/array");

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// 左右指针维护滑动窗口，map 对象维护字符出现的最后位置
	const map = {};
	let left = 0;
	return s.split("").reduce((max, character, right) => {
		// 字符出现的位置比左窗口大，说明字符重复了，缩小滑动窗口
		left = map[character] >= left ? map[character] + 1 : left;
		map[character] = right;
		// 保留滑动窗口长度的最大值
		return Math.max(max, right - left + 1);
	}, 0);
};
// @lc code=end
