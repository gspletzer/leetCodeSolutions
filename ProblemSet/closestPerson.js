/*
You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, 
and seats[i] = 0 represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to the closest person.

EXAMPLE 1:
Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation: 
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.

EXAMPLE 2:
Input: seats = [1,0,0,0]
Output: 3
Explanation: 
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.

EXAMPLE 3:
Input: seats = [0,1]
Output: 1

Given: array of seats (designates occupied and empty)
Output: maxium space alex can have from a person based on the available seats
 */

const closestPerson = (seats) => {
  /* the prompt notes that there will be at least one empty seat and one person sitting, make a quick return for seats.length=2 */
  if (seats.length === 2) return 1;
  /* declare variables for start, stop, count and results array
  results will be array of subarrays where 0= start, 1= stop, 2= count*/
  let results = [];
  let start = seats[0];
  let stop;
  let count = 0;
  /*
  iterate through seats
    - need to find largest gaps, and track if that gaps start and stop with a 1 or 0
  */
  seats.forEach((el, i) => {
    if (el === 0) {
      if (i === seats.length-1) {
        stop = 0;
        count += 1
        results.push ([start, stop, count])
      }
      else {count += 1}; 
    }
    if (el === 1) {
      if (i === 0) {
        start = el
      }
      else {
        stop = 1;
        results.push([start, stop, count]);
        count = 0;
        start = 1;
      }
    }
  });
 /*
  iterate through results array to return max
  if the subarray includes a zero, compare count to max, return whichever is greater
  if the subarray has 1 for both start and stop, compare count/2 to max and return whichever is greater
 */
let max = 1;
results.forEach(el => {
  if (el[0] === 0 || el[1] === 0) {
    max = Math.max(el[2], max)
  }
  if (el[0] === 1 && el[1] === 1) {
    max = Math.max ((Math.ceil(el[2]/2)), max)
  }
});
/* return the final result for max */
return max
};

console.log(closestPerson([0,0,0,1,0])); //expect 3
console.log(closestPerson([1,0,0,1,0])); //expect 1
