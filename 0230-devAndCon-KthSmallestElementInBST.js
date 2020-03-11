/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */

const countNodeNum = (node, numOfNode) => {
  if (!node) {
    return 0;
  }

  const left = countNodeNum(node.left, numOfNode);
  const right = countNodeNum(node.right, numOfNode);
  numOfNode.set(node, 1 + left + right);
  return 1 + left + right;
};

const kthSmallestHelper = (node, k, numOfNode) => {
  if (!node) {
    return -1;
  }

  const left = node.left === null ? 0 : numOfNode.get(node.left);
  if (left >= k) {
    return kthSmallestHelper(node.left, k, numOfNode);
  }

  if (left + 1 === k) {
    return node.val;
  }

  return kthSmallestHelper(node.right, k - left - 1, numOfNode);
};

var kthSmallest = function(root, k) {
  const numOfNode = new Map();
  countNodeNum(root, numOfNode);
  return kthSmallestHelper(root, k, numOfNode);
};

/*
在 TreeNode 中增加一个 counter， 代表整个树的节点个数
也可以用一个 HashMap<TreeNode, Integer> 来存储某个节点为代表的子树的节点个数
在增删查改的过程中记录不断更新受影响节点的 counter
在 kthSmallest 的实现中用类似 Quick Select 的算法去找到 kth smallest element
时间复杂度为 O(h)， h 为树的高度。
*/
