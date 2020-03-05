/*
Given a binary tree, find the subtree with maximum average. Return the root of the subtree.
It's guaranteed that there is only one subtree with maximum average.
Example 1

Input：
{1,-5,11,1,2,4,-2}
Output：11
Explanation:
The tree is look like this:
     1
   /   \
 -5     11
 / \   /  \
1   2 4    -2 
The average of subtree of 11 is 4.3333, is the maximun.
Example 2

Input：
{1,-5,11}
Output：11
Explanation:
     1
   /   \
 -5     11
The average of subtree of 1,-5,11 is 2.333,-5,11. So the subtree of 11 is the maximun.
*/

/**
 * @param root: the root of binary tree
 * @return: the root of the maximum average of subtree
 */

const calMaxAvgRoot = (leftNodesRet, rightNodesRet, curAvg, root) => {
  if (curAvg > leftNodesRet.maxAvg && curAvg > rightNodesRet.maxAvg) {
    return { maxAvgRoot: root, maxAvg: curAvg };
  } else {
    return leftNodesRet.maxAvg > rightNodesRet.maxAvg
      ? { maxAvgRoot: leftNodesRet.maxAvgRoot, maxAvg: leftNodesRet.maxAvg }
      : { maxAvgRoot: rightNodesRet.maxAvgRoot, maxAvg: rightNodesRet.maxAvg };
  }
};

const findSubtreeHelper = root => {
  let leftNodesRet = { sum: 0, nodes: 0, maxAvgRoot: null, maxAvg: -Infinity };
  let rightNodesRet = { sum: 0, nodes: 0, maxAvgRoot: null, maxAvg: -Infinity };
  if (root.left) {
    leftNodesRet = findSubtreeHelper(root.left);
  }

  if (root.right) {
    rightNodesRet = findSubtreeHelper(root.right);
  }

  const curAvg =
    (root.val + leftNodesRet.sum + rightNodesRet.sum) /
    (leftNodesRet.nodes + rightNodesRet.nodes + 1);

  const { maxAvgRoot, maxAvg } = calMaxAvgRoot(
    leftNodesRet,
    rightNodesRet,
    curAvg,
    root
  );
  return {
    sum: leftNodesRet.sum + rightNodesRet.sum + root.val,
    nodes: leftNodesRet.nodes + rightNodesRet.nodes + 1,
    maxAvg,
    maxAvgRoot
  };
};

const findSubtree2 = function(root) {
  // write your code here
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  const { maxAvgRoot } = findSubtreeHelper(root);
  return maxAvgRoot;
};
