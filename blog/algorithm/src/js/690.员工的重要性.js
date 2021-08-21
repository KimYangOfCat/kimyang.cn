/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 *
 * https://leetcode-cn.com/problems/employee-importance/description/
 *
 * algorithms
 * Easy (64.63%)
 * Likes:    233
 * Dislikes: 0
 * Total Accepted:    54.5K
 * Total Submissions: 84.3K
 * Testcase Example:  '[[1,5,[2,3]],[2,3,[]],[3,3,[]]]\n1'
 *
 * 给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。
 * 
 * 比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。那么员工 1 的数据结构是 [1,
 * 15, [2]] ，员工 2的 数据结构是 [2, 10, [3]] ，员工 3 的数据结构是 [3, 5, []] 。注意虽然员工 3 也是员工 1
 * 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。
 * 
 * 现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
 * 输出：11
 * 解释：
 * 员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 =
 * 11 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 一个员工最多有一个 直系 领导，但是可以有多个 直系 下属
 * 员工数量不超过 2000 。
 * 
 * 
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    const map = new Map();
    for (const employee of employees) {
        map.set(employee.id, employee);//利用 Map 以 id 为键保存每个员工信息，方便后面查找时快速获取员工信息。
    }
    const dfs = (id) => {
        const employee = map.get(id);//获取当前员工信息
        let total = employee.importance;//获取当前员工重要性
        const subordinates = employee.subordinates;//获取当前员工的下属数组
        for (const subId of subordinates) {
          //遍历每个下属，并通过递归累计重要性之和
            total += dfs(subId);
        }
        return total;
        
    }

    return dfs(id);
};
// @lc code=end

var GetImportance = function (employees, id) {
    var importance = 0;
    var computeImportance = function (id) {
      for (var i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {//查找对应id的员工信息
          importance += employees[i].importance;//累计
          if (employees[i].subordinates.length > 0) {//有下属
            for (var j = 0; j < employees[i].subordinates.length; j++) {
              computeImportance(employees[i].subordinates[j])//递归循环
            }
          }
        }
      }
    }
    computeImportance(id)
    return importance;
  };

//原代码来自：https://leetcode-cn.com/problems/employee-importance/solution/yuan-gong-de-zhong-yao-xing-by-leetcode-h6xre/
var GetImportance = function(employees, id) {
    const map = new Map();
    for (const employee of employees) {
        map.set(employee.id, employee);
    }
    let total = 0;
    const queue = [];//待处理队列
    queue.push(id);
    while (queue.length) {
        const curId = queue.shift();
        const employee = map.get(curId);
        total += employee.importance;
        const subordinates = employee.subordinates;
        for (const subId of subordinates) {
            queue.push(subId);//保存下属 id
        }
    }
    return total;
};