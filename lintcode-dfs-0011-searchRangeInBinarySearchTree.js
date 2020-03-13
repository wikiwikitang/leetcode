/*
Given a binary search tree and a range [k1, k2], return node values within a given range in ascending order.

Example 1:

Input：{5},6,10
Output：[]
        5
it will be serialized {5}
No number between 6 and 10


Example 2:
Input：{20,8,22,4,12},10,22
Output：[12,20,22]
Explanation：
        20
       /  \
      8   22
     / \
    4   12
it will be serialized {20,8,22,4,12}
[12,20,22] between 10 and 22
*/

/**
 * @param root: param root: The root of the binary search tree
 * @param k1: An integer
 * @param k2: An integer
 * @return: return: Return all keys that k1<=key<=k2 in ascending order
 */
const searchRangeHelper = (node, minVal, maxVal, low, high, array) => {
  if (!node) {
    return;
  }
  if (maxVal < low || minVal > high) {
    return;
  }
  searchRangeHelper(node.left, minVal, node.val, low, high, array);
  if (node.val >= low && node.val <= high) {
    array.push(node.val);
  }
  searchRangeHelper(node.right, node.val, maxVal, low, high, array);
};

const searchRange = function(root, k1, k2) {
  // write your code here
  if (!root) {
    return [];
  }

  let ret = [];
  searchRangeHelper(root, -Infinity, Infinity, k1, k2, ret);
  return ret;
};
