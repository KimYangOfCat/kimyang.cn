/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.82%)
 * Likes:    1623
 * Dislikes: 0
 * Total Accepted:    427.1K
 * Total Submissions: 823.9K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    //斐波拉契数列
    let first = 1;//以1占位，便能满足斐波拉契数列
    let second = 1;
    for (let i = 2; i <= n; i++) {
        second += first;
        first = second - first;
    }
    return second;
};
// @lc code=end

var climbStairs = function (n) {
    //递归：超时
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);
};

var climbStairs = function (n) {
    //记忆化递归
    let memo = [0, 1, 2];
    function climbStairsWithMemo(n, memo) {
        if (memo[n]) {
            return memo[n]
        }
        memo[n] = climbStairsWithMemo(n - 1, memo) + climbStairsWithMemo(n - 2, memo);
        return memo[n]
    }
    return climbStairsWithMemo(n, memo);
};

var climbStairs = function (n) {
    //动态规划
    let dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};

var climbStairs = function (n) {
    //dp状态压缩
    if (n === 1) return 1;
    let first = 1;
    let second = 2;
    let third
    for (let i = 3; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return second;
};
var climbStairs = function (n) {
    //斐波拉契数列
    let first = 1;//以1占位，便能满足斐波拉契数列
    let second = 1;
    let third
    for (let i = 2; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return second;
};

var climbStairs = function (n) {
    if (n === 1) return 1;
    let first = 1;//保存的第一个状态
    let second = 2;//保存的第二个状态
    for (let i = 3; i <= n; i++) {
        second += first;
        first = second - first;
        //[first, second] = [second, first + second]
    }
    return second;
};