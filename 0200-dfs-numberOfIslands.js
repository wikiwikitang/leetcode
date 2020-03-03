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

//DFS
const floodBoundary = (i, j, XBoundry, YBoundary, grid) => {
  if (i < 0 || i >= XBoundry || j < 0 || j >= YBoundary || grid[i][j] === "0") {
    return;
  }
  grid[i][j] = "0";
  floodBoundary(i - 1, j, XBoundry, YBoundary, grid);
  floodBoundary(i + 1, j, XBoundry, YBoundary, grid);
  floodBoundary(i, j - 1, XBoundry, YBoundary, grid);
  floodBoundary(i, j + 1, XBoundry, YBoundary, grid);
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
