/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//if nums = [1], target = 1, => begin <= end instead of begin < end
var search = function(nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }
  let begin = 0;
  let end = nums.length - 1;
  while (begin <= end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (nums[mid] === target) {
      return mid;
      // the first part is ascending
    } else if (nums[begin] <= nums[mid]) {
      //target in the first part
      if (nums[begin] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        //target in the last part
        begin = mid + 1;
      }
    } else {
      //target in the last part
      if (nums[mid] <= target && target <= nums[end]) {
        begin = mid + 1;
      } else {
        //target in the first part
        end = mid - 1;
      }
    }
  }
  return -1;
};
