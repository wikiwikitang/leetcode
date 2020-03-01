/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraphHelper = (node, map) => {
  if (map.has(node.val)) {
    return map.get(node.val);
  }

  const newNode = new Node(node.val, []);
  map.set(node.val, newNode);
  const newNeighbors = node.neighbors.map(neighborNode => {
    return cloneGraphHelper(neighborNode, map);
  });
  newNode.neighbors = newNeighbors;
  return newNode;
};

var cloneGraph = function(node) {
  //special case
  if (!node) {
    return null;
  }
  const map = new Map();
  return cloneGraphHelper(node, map);
};
