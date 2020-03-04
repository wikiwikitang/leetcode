/*
Binary search is a famous question in algorithm.

For a given sorted array (ascending order) and a target number, find the first index of this number in O(log n) time complexity.

If the target number does not exist in the array, return -1.

Example
If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.
*/
//binary search template, including the duplicated element
//死循环的发生
//Last Position of Target
//nums = [1,1], target = 1
//使用 start < end 无论如何都会出现死循环
const binarySearch = (array, target) => {
  if (!array || array.length === 0) {
    return -1;
  }

  let begin = 0;
  let end = array.length - 1;
  while (begin + 1 < end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (array[mid] === target) {
      end = mid;
    } else if (array[mid] < target) {
      begin = mid;
    } else {
      end = mid;
    }
  }

  if (array[begin] === target) {
    return begin;
  }
  if (array[end] === target) {
    return end;
  }
  return -1;
};
