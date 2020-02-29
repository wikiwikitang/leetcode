/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
const levelOrderBottomHelper = (node, depth, array) => {
  if (!node) {
    return;
  }
  array[depth] ? array[depth].push(node.val) : (array[depth] = [node.val]);
  levelOrderBottomHelper(node.left, depth + 1, array);
  levelOrderBottomHelper(node.right, depth + 1, array);
};

var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }

  let ret = [];
  levelOrderBottomHelper(root, 0, ret);
  return ret.reverse();
};
