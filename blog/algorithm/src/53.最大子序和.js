/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (53.97%)
 * Likes:    3151
 * Dislikes: 0
 * Total Accepted:    486.9K
 * Total Submissions: 902.1K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1]
 * 输出：1
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0]
 * 输出：0
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [-1]
 * 输出：-1
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [-100000]
 * 输出：-100000
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^5 
 * 
 * 
 * 
 * 
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    //优化前缀和+一次循环
    let max = nums[0];
    let sum = 0;
    let min = 0;
    for (let start = 0; start < nums.length; start++) {
        sum += nums[start]
        max = max > (sum - min) ? max : (sum - min);
        min = sum < min ? sum : min;
    }
    return max
};
// @lc code=end

//finished Code
var maxSubArray = function (nums) {
    //暴力循环
    let max = -Infinity;
    for (let start = 0; start < nums.length; start++) {
        for (let end = start; end < nums.length; end++) {
            let sum = 0;
            for (let i = start; i <= end; i++) {
                sum += nums[i]
            }
            max = max > sum ? max : sum;
        }
    }
    return max
};

var maxSubArray = function (nums) {
    //前缀和+暴力循环
    let max = -Infinity;
    let sum;
    for (let start = 0; start < nums.length; start++) {
        sum = 0;//重置为0
        for (let end = start; end < nums.length; end++) {
            sum += nums[end]
            max = max > sum ? max : sum;
        }
    }
    return max
};