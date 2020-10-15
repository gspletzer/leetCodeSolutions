/*
Given a list of intervals, remove all intervals that are covered by another interval in the list.
Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.
After doing so, return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:
Input: intervals = [[1,4],[2,3]]
Output: 1
Explanation: [2,3] is covered by [1,4], therefore it is removed.

Example 3:
Input: intervals = [[0,10],[5,12]]
Output: 2
Explanation: ??? I would expect output of 1

Example 4:
Input: intervals = [[3,10],[4,10],[5,11]]
Output: 2
Explanation: [4,10] is covered by [3,10], therefore it is removed.

Example 5:
Input: intervals = [[1,2],[1,4],[3,4]]
Output: 1
Explanation: 

Constraints:
1 <= intervals.length <= 1000
intervals[i].length == 2
0 <= intervals[i][0] < intervals[i][1] <= 10^5
All the intervals are unique.
*/

const removeCoveredIntervals = (intervals) => {
  //declare output array
  let output = [];
  //sort given array by number at position zero
  intervals.sort((a, b) => (a[0]-b[0]));
  //iterate through given intervals array
  intervals.reduce((acc, curVal, i) => {
    //if curval 0 is less than equal to acc 0 and acc 1 is less than curval 1
      //return curVal; push curval if it is last iteration
    if (curVal[0] <= acc[0] && acc[1] <= curVal[1]) {
      if (i === intervals.length-1) output.push(curVal);
      return curVal;
    }
    //if acc 0 is less than equal to curval 0 and curval 1 is less than acc 1
      //return acc; push acc if it is last iteration
    else if (acc[0] <= curVal[0] && curVal[1] <= acc[1]) {
      if (i === intervals.length-1) output.push(acc);
      return acc;
    }
    //if it is last iteration and neither comparison conditions are met push both to output
    else if (i === intervals.length-1) {
      output.push(acc, curVal);
    }
    //else push acc to output and return curval
    else {
      output.push(acc);
      return curVal
    }
  });
  //return length of output array
  return output.length
};

console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]));// expect 2
console.log(removeCoveredIntervals([[1,4],[2,3]]));// expect 1
console.log(removeCoveredIntervals([[0,10],[5,12]]));// expect 2
console.log(removeCoveredIntervals([[3,10],[4,10],[5,11]]));// expect 2
console.log(removeCoveredIntervals([[1,2],[1,4],[3,4]]));// expect 1
console.log(removeCoveredIntervals([[66672,75156],[59890,65654],[92950,95965],[9103,31953],[54869,69855],[33272,92693],[52631,65356],[43332,89722],[4218,57729],[20993,92876]]));//exepect 3