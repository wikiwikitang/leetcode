/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
//bfs
const isValid = ({ xOrigin, yOrigin }, XBoundry, YBoundary, grid) => {
  if (
    xOrigin < 0 ||
    xOrigin >= XBoundry ||
    yOrigin < 0 ||
    yOrigin >= YBoundary ||
    grid[xOrigin][yOrigin] === "0"
  ) {
    return false;
  }
  return true;
};

//BFS
const floodBoundary = (i, j, XBoundry, YBoundary, grid) => {
  const array = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];
  const queue = [{ xOrigin: i, yOrigin: j }];
  while (queue.length > 0) {
    const { xOrigin, yOrigin } = queue.pop();
    grid[xOrigin][yOrigin] = "0";
    array.forEach(({ x, y }) => {
      //bfs for 4 possible coordiates
      const newCoord = { xOrigin: xOrigin + x, yOrigin: yOrigin + y }; //construct new coordiate
      if (isValid(newCoord, XBoundry, YBoundary, grid)) {
        queue.push(newCoord);
      }
    });
  }
};

var numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  let ret = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        ret++;
        floodBoundary(i, j, grid.length, grid[0].length, grid);
      }
    }
  }
  return ret;
};
