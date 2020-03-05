/*
Given a mountain sequence of n integers which increase firstly and then decrease, find the mountain top.

Example 1:

Input: nums = [1, 2, 4, 8, 6, 3] 
Output: 8
Example 2:

Input: nums = [10, 9, 8, 7], 
Output: 10
*/

/**
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
const mountainSequence = function(nums) {
  if (!nums || nums.length === 0) {
    return null;
  }

  let begin = 0;
  let end = nums.length - 1;
  while (begin + 1 < end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (nums[mid] < nums[mid + 1]) {
      begin = mid;
    } else {
      end = mid;
    }
  }

  return nums[end] > nums[begin] ? nums[end] : nums[begin];
};
