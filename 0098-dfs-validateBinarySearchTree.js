/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true

Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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
 * @return {boolean}
 */

const isValidBST_helper = (node, min, max) => {
  if (!node) {
    return true;
  }
  if (node.val <= min || node.val >= max) {
    return false;
  }
  return (
    isValidBST_helper(node.left, min, node.val) &&
    isValidBST_helper(node.right, node.val, max)
  );
};

var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  return isValidBST_helper(root, -Infinity, Infinity);
};

var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  let prvNode = -Infinity;
  const isValidBST_helper2 = node => {
    if (!node) {
      return true;
    }
    const leftRet = isValidBST_helper2(node.left);
    if (!leftRet || node.val <= prvNode) {
      return false;
    }
    prvNode = node.val;
    return isValidBST_helper2(node.right);
  };

  return isValidBST_helper2(root);
};
