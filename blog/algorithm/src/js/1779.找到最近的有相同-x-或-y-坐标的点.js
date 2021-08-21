/*
 * @lc app=leetcode.cn id=1779 lang=javascript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 *
 * https://leetcode-cn.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/description/
 *
 * algorithms
 * Easy (64.69%)
 * Likes:    10
 * Dislikes: 0
 * Total Accepted:    5.1K
 * Total Submissions: 7.9K
 * Testcase Example:  '3\n4\n[[1,2],[3,1],[2,4],[2,3],[4,4]]'
 *
 * 给你两个整数 x 和 y ，表示你在一个笛卡尔坐标系下的 (x, y) 处。同时，在同一个坐标系下给你一个数组 points ，其中 points[i]
 * = [ai, bi] 表示在 (ai, bi) 处有一个点。当一个点与你所在的位置有相同的 x 坐标或者相同的 y 坐标时，我们称这个点是 有效的 。
 * 
 * 请返回距离你当前位置 曼哈顿距离 最近的 有效 点的下标（下标从 0 开始）。如果有多个最近的有效点，请返回下标 最小 的一个。如果没有有效点，请返回
 * -1 。
 * 
 * 两个点 (x1, y1) 和 (x2, y2) 之间的 曼哈顿距离 为 abs(x1 - x2) + abs(y1 - y2) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
 * 输出：2
 * 解释：所有点中，[3,1]，[2,4] 和 [4,4] 是有效点。有效点中，[2,4] 和 [4,4] 距离你当前位置的曼哈顿距离最小，都为 1
 * 。[2,4] 的下标最小，所以返回 2 。
 * 
 * 示例 2：
 * 
 * 输入：x = 3, y = 4, points = [[3,4]]
 * 输出：0
 * 提示：答案可以与你当前所在位置坐标相同。
 * 
 * 示例 3：
 * 
 * 输入：x = 3, y = 4, points = [[2,3]]
 * 输出：-1
 * 解释：没有有效点。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= points.length <= 10^4
 * points[i].length == 2
 * 1 <= x, y, ai, bi <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let minIndex=-1;//最小下标
    let minAbs=Infinity;//最小曼哈顿距离
    for(let i=0;i<points.length;i++){
        if(points[i][0]===x||points[i][1]===y){
            let abs=Math.abs(points[i][0]-x)+Math.abs(points[i][1]-y);
            //计算曼哈顿距离
            if(abs<minAbs){
              //这里不必再单独处理曼哈顿距离相同时的情况了
                minAbs=abs;
                minIndex=i;
            }
        }
    };
    return minIndex;
};
// @lc code=end

var nearestValidPoint = function(x, y, points) {
    let out = points.reduce((pre,val,index)=>{
        if(val[0]==x||val[1]==y){
            //判断是否为有效点
            let abs=Math.abs(x-val[0])+Math.abs(y-val[1]);
            //计算曼哈顿距离
            if(abs<pre[1]){
                //此处不必再单独考虑距离相同时取下标较小值的问题，因为reduce遍历数组是从头向尾遍历的
                pre=[index,abs]
            }  
        }
        return pre;//不管pre有没有修改，都得将最后的结果返回回去，以便进行下一轮时pre有值。
    },[-1,Infinity])
    return out[0];
};

var nearestValidPoint = function(x, y, points) {
    let out = points.reduce((pre,val,index)=>{
        //将两种最小曼哈顿距离的有效点分开计算
        if(val[0]===x&&Math.abs(val[1]-y)<pre[1]){
            pre=[index,Math.abs(val[1]-y)] 
        }
        if(val[1]===y&&Math.abs(val[0]-x)<pre[1]){
             pre=[index,Math.abs(val[0]-x)]
        }
        return pre;
    },[-1,Infinity])
    return out[0];
};