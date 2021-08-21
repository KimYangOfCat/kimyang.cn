/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (45.69%)
 * Likes:    674
 * Dislikes: 0
 * Total Accepted:    279.5K
 * Total Submissions: 611.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：digits = [1,2,3]
 * 输出：[1,2,4]
 * 解释：输入数组表示数字 123。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：digits = [4,3,2,1]
 * 输出：[4,3,2,2]
 * 解释：输入数组表示数字 4321。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：digits = [0]
 * 输出：[1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //使用 bigint 解决溢出问题
    return (BigInt(digits.join("")) + 1n).toString().split('');
};
// @lc code=end
var plusOne = function (digits) {
    //数组遍历+新建数组
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            //判断进位是否停止
            return digits;
    }
    //长度改变时新建数组并填充0
    digits = new Array(len + 1).fill(0);
    digits[0] = 1;
    return digits
};

var plusOne = function (digits) {
    //使用unshift()方法
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] != 0)
            return digits;
    }
    digits.unshift(1);
    //长度改变时只从数组头部添加一位1
    return digits
};

var plusOne = function (digits) {
    //使用 bigint 解决溢出问题
    return (BigInt(digits.join("")) + 1n).toString().split('');
};