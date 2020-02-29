/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//dfs
const zigzagLevelOrderHelper = (node, depth, isForward, array) => {
  if (!node) {
    return;
  }
  array[depth] = array[depth] || [];
  isForward ? array[depth].push(node.val) : array[depth].unshift(node.val);
  zigzagLevelOrderHelper(node.left, depth + 1, !isForward, array);
  zigzagLevelOrderHelper(node.right, depth + 1, !isForward, array);
};

var zigzagLevelOrder = function(root) {
  if (!root) {
    return [];
  }

  const ret = [];
  zigzagLevelOrderHelper(root, 0, true, ret);
  return ret;
};
