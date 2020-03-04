/* 
Find the last position of a target number in a sorted array. Return -1 if target does not exist.
Example 1:

Input: nums = [1,2,2,4,5,5], target = 2
Output: 2
Example 2:

Input: nums = [1,2,2,4,5,5], target = 6
Output: -1
*/

const lastPosition = function(nums, target) {
  // write your code here
  if (!nums || nums.length === 0) {
    return -1;
  }

  let begin = 0;
  let end = nums.length - 1;
  while (begin + 1 < end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (nums[mid] === target) {
      begin = mid; //because we need to search afterward => begin = mid
    } else if (nums[mid] < target) {
      begin = mid;
    } else {
      end = mid;
    }
  }

  if (nums[end] === target) {
    return end;
  }
  if (nums[begin] === target) {
    return begin;
  }
  return -1;
};
