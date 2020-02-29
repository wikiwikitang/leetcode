/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Example: 

You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//use preorder traversal to generate the array
const serializationHelper = (node, toArray) => {
  if (!node) {
    toArray.push(null);
    return;
  }
  toArray.push(node.val);
  serializationHelper(node.left, toArray);
  serializationHelper(node.right, toArray);
};

var serialize = function(root) {
  const toArray = [];
  serializationHelper(root, toArray);
  return toArray;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
//use preorder traversal to generate tree
var deserialize = function(data) {
  if (data.length === 0) {
    return;
  }
  const nodeVal = data.shift();
  if (nodeVal === null) {
    return null;
  }
  const node = new TreeNode(nodeVal);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
