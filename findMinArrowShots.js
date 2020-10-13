/*
There are some spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. 
Since it's horizontal, y-coordinates don't matter, and hence the x-coordinates of start and end of the diameter suffice. The start is always smaller than the end.
An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with xstart and xend bursts by an arrow shot at x if xstart ≤ x ≤ xend. 
There is no limit to the number of arrows that can be shot. An arrow once shot keeps traveling up infinitely.
Given an array points where points[i] = [xstart, xend], return the minimum number of arrows that must be shot to burst all balloons.

Example 1:
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

Example 2:
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4

Example 3:
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2

Example 4:
Input: points = [[1,2]]
Output: 1

Example 5:
Input: points = [[2,3],[2,3]]
Output: 1

Constraints:
0 <= points.length <= 104
points.length == 2
-231 <= xstart < xend <= 231 - 1
*/

var findMinArrowShots = function(points) {
  if (points.length === 1) return 1;
  //initiate arrow count = 0
  let arrows = 1;
  //sort the input array of points
  const sorted = points.sort((a,b) => a[0]-b[0]);
  console.log(sorted)
  //reduce sorted array:
    //if the acc1 is greater than/equal curval0 and acc1 is less than/equal curval1, return acc
    //else add 1 to count and return curVal
  sorted.reduce((acc,curVal)=> {
    if (acc[1] >= curVal[0] && acc[1] <= curVal[1]) return acc;
    else {
      arrows += 1;
      return curVal
    }
  });
  //return count
  return arrows
};

// console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]));//expect 2 
// console.log(findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]));//expect 4
// console.log(findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]));//expect 2
// console.log(findMinArrowShots([[1,2]]));//expect 1
// console.log(findMinArrowShots([[2,3],[2,3]]));//expect 1
console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));//expect 2