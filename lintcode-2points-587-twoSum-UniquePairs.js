/*
Given an array of integers, find how many unique pairs in the array such that their sum is equal to a specific target number. Please return the number of pairs.

Example 1:
Input: nums = [1,1,2,45,46,46], target = 47 
Output: 2
Explanation:
1 + 46 = 47
2 + 45 = 47

Example 2:
Input: nums = [1,1], target = 2 
Output: 1
Explanation:
1 + 1 = 2
*/

/**
 * @param nums: an array of integer
 * @param target: An integer
 * @return: An integer
 */
const twoSum6 = function(nums, target) {
  if (!nums || nums.length < 2) {
    return 0;
  }

  nums.sort((left, right) => left - right);
  let begin = 0;
  let end = nums.length - 1;
  let cnt = 0;
  while (begin < end) {
    if (nums[begin] + nums[end] === target) {
      cnt++;
      begin++;
      end--;
      //pass the duplicate element
      while (begin < end && nums[end] === nums[end + 1]) {
        end--;
      }
      while (begin < end && nums[begin] === nums[begin - 1]) {
        begin++;
      }
    } else if (nums[begin] + nums[end] < target) {
      begin++;
    } else {
      end--;
    }
  }
  return cnt;
};
