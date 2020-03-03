/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const outerLevelBinarySearch = (matrix, target) => {
  let begin = 0;
  let end = matrix.length - 1;
  let lastEle = matrix[0].length - 1;
  while (begin <= end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (matrix[mid][0] <= target && target <= matrix[mid][lastEle]) {
      return mid;
    } else if (target < matrix[mid][0]) {
      end = mid - 1;
    } else {
      begin = mid + 1;
    }
  }
  return -1;
};

const innerLevelBinarySearch = (array, target) => {
  let begin = 0,
    end = array.length - 1;
  while (begin <= end) {
    let mid = begin + parseInt((end - begin) / 2);
    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      begin = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
};

var searchMatrix = function(matrix, target) {
  //special case
  if (!matrix || matrix.length === 0 || target < matrix[0][0]) {
    return false;
  }

  const len = matrix.length - 1,
    innerLen = matrix[0].length - 1;
  if (matrix[len][innerLen] < target) {
    return false;
  }

  const index = outerLevelBinarySearch(matrix, target);
  if (index < 0) {
    return false;
  }

  return innerLevelBinarySearch(matrix[index], target);
};
