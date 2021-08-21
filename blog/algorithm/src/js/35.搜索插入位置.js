/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (46.69%)
 * Likes:    1029
 * Dislikes: 0
 * Total Accepted:    465.4K
 * Total Submissions: 996.8K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 请必须使用时间复杂度为 O(log n) 的算法。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 
 * 输入: nums = [1,3,5,6], target = 0
 * 输出: 0
 * 
 * 
 * 示例 5:
 * 
 * 
 * 输入: nums = [1], target = 0
 * 输出: 0
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 
 * -10^4 
 * nums 为无重复元素的升序排列数组
 * -10^4 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let out;
  for(let i=0;i<nums.length;i++){
        if(nums[i]>=target){
            out=i;
            break;
        }
    //是否插到末尾
        if(i==nums.length-1){
            out=nums.length;
        }
    /*执行用时比较长就是因为在循环中对每个元素都进行了末尾的判断，
    其实完全可以将其放在循环之后，以此减少每次循环的执行时间*/
    }
    return out;
};
// @lc code=end

var searchInsert = function(nums, target) {
    let out=-1;
  for(let i=0;i<nums.length;i++){
        if(nums[i]>=target){
            out=i;
            break;
        }
    }
    //考虑插到末尾的情况
        if(out==-1){
            return nums.length;
        }
    return out;
};

//这个版本少用了一个变量，按理说内存消耗应该减少才对，玄学
var searchInsert = function(nums, target) {
    for(let i=0;i<nums.length;i++){
          if(nums[i]>=target){
              return i;
          }
      }
      //考虑插到末尾的情况
      return nums.length;
  };

  //这个写法是最精简的，绝妙之处在于将判断条件和循环条件融合在了一起，
//其实上边的for循环也可以这样做，这样就不必使用break语句了
var searchInsert = function(nums, target) {
    let i=0;
    while(i<nums.length&&nums[i]<target){
        i++;
    }
    return i
  };

//循环
var searchInsert = function(nums, target) {
    let right=0;
    let left=nums.length-1;
    while(right<=left){
        let middle =(right+left)>>>1//使用位运算取整
        if(nums[middle]===target){
            return middle;
        }else if(target>nums[middle]){
            right=middle+1
        }else{
            left=middle-1
        }
    }
    return right;// 退出循环时 hi比lo小1
   };

var searchInsert = function(nums, target) {
    let right=0;
    let left=nums.length-1;
     //可将插入数组头部和尾部的情况单独处理，以此来提升程序执行用时。
    if(target > nums[left]) return left+1
    else if(target < nums[0]) return 0
       
    while(right<=left){
        let middle =(right+left)>>>1
        if(nums[middle]===target){
            return middle;
        }else if(target>nums[middle]){
            right=middle+1
        }else{
            left=middle-1
        }
    }
    return right;// 退出循环时 hi比lo小1
   };

//递归，递归需要建立递归调用栈，所以一般比循环的用时和内存消耗都多
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    return binarySearch(left, right, nums, target)
};

function binarySearch(left, right, nums, target) {
    if (left > right) {
        return left;
    }
    let mid = parseInt((left + right) / 2);
    if (target === nums[mid]) {
        return mid;
    } else if (target > nums[mid]) {
        return binarySearch(mid + 1, right, nums, target)
    } else {
        return binarySearch(left, mid - 1, nums, target)
    }
}