/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
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

const levelOrderHelper = (node, level, retArray) => {
  if (!node) {
    return;
  }
  retArray[level]
    ? retArray[level].push(node.val)
    : (retArray[level] = [node.val]);
  levelOrderHelper(node.left, level + 1, retArray);
  levelOrderHelper(node.right, level + 1, retArray);
};

var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const retArray = [];
  levelOrderHelper(root, 0, retArray);
  return retArray;
};
