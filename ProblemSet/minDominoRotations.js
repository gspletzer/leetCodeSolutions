/*
In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
We may rotate the ith domino, so that A[i] and B[i] swap values.
Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.
If it cannot be done, return -1.

Example 1:
Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:
Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

Constraints:
* 2 <= A.length == B.length <= 2 * 104
* 1 <= A[i], B[i] <= 6
*/

const minDominoRotations = (A, B) => {
  //initialize a cache with 1-6, values will be an array that will track occurences for A anb B string
    //and occurences where the same number occurs at the same index
  const cache = {
    1: [0, 0, 0],
    2: [0, 0, 0],
    3: [0, 0, 0],
    4: [0, 0, 0],
    5: [0, 0, 0],
    6: [0, 0, 0],
  };
  //initialize minimum moves at -1
  let minMoves = -1

  //iterate through both arrays and count occurences for each
    //find element in cache:
      //increase occurence based on string found in
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) cache[A[i]][2] += 1;
    cache[A[i]][0] += 1;
    cache[B[i]][1] += 1;
  };
  console.log(cache)
  //iterate through object values of cache
    //if sum of subarray is between A.length and A.lengthx2
      //find difference between the numbers for minimum moves
      //if minMoves is greater than 0, return math.min of current difference and minMoves
      //if minMoves is less than 0, return current difference
  Object.values(cache).forEach(el => {
    const sum = el[0] + el[1];
    if (sum >= A.length && sum <= A.length*2 && el[2]>0) {
      const difference = Math.abs((Math.min(el[0], el[1])) - el[2]);
      if (minMoves < 0) minMoves = difference;
      else minMoves = Math.min(minMoves, difference)
    }
    else if (sum >= A.length && sum <= A.length*2) {
      const difference = Math.abs(el[0]-el[1]);
      if (minMoves < 0) minMoves = difference;
      else minMoves = Math.min(minMoves, difference)
    };
  });
  //return minimum moves
  return minMoves
};

console.log(minDominoRotations([2,1,2,4,2,2], [5,2,6,2,3,2])); //expect 2
console.log(minDominoRotations([3,5,1,2,3], [3,6,3,3,4]))
