/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Input:  {10,1,11,#,6,#,12}
Output:  [1, 6, 10, 11, 12]
Explanation:
The BST is look like this:
  10
  /\
 1 11
  \  \
   6  12
You can return the inorder traversal of a BST [1, 6, 10, 11, 12]

Input: {2,1,3}
Output: [1,2,3]
Explanation:
The BST is look like this:
  2
 / \
1   3
You can return the inorder traversal of a BST tree [1,2,3]

Challenge
Extra memory usage O(h), h is the height of the tree.

Super Star: Extra memory usage O(1)
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**************************************************Solution 1 ***********************************/
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.bstArray = [];
  this.index = 0;
  const traverseBst = root => {
    if (!root) {
      return;
    }
    traverseBst(root.left);
    this.bstArray.push(root.val);
    traverseBst(root.right);
  };
  traverseBst(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  return this.bstArray[this.index++];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.bstArray.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/**************************************************Solution 2 ***********************************/

/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.addWorkForNode = node => {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  };
  this.addWorkForNode(root);
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  const node = this.stack.pop();
  this.addWorkForNode(node.right);
  return node.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
