/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.right = left;
  root.left = right;
  return root;
};

//take the advantage of es6
var invertTree2 = function(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];

  return root;
};

//dfs iterative
var invertTree2 = function(root) {
  if (!root || (!root.left && !root.right)) {
    return root;
  }
  let stack = [root];
  while (stack.length > 0) {
    let node = stack.pop();
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }
  return root;
};
