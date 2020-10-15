/*
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:
Input: [1,2,0]
Output: 3

Example 2:
Input: [3,4,-1,1]
Output: 2

Example 3:
Input: [7,8,9,11,12]
Output: 1

Follow up:
Your algorithm should run in O(n) time and uses constant extra space.
*/
/* Initial solution. O(n) run time, but space is also O(n). Works for all Leet Code edge cases */
const firstMissingPositive = (nums) => {
  //account for empty array
  if (nums.length < 1) return 1;
  //declare a cache to store numbers in array
  let numCache = {};
  //declare a variable to store max in array
  let maxNum = -Infinity;
  //iterate through nums to push nums to cache, and find max value in array
  nums.forEach (num => {
    maxNum = Math.max(maxNum, num);
    if (!numCache[num]) numCache[num] = true;
  });
  //account for arraya with max value of 0 or less
  if (maxNum <= 0) return 1;
  //for loop from 1 to max value, when a value is not found in cache, return that number
  for (let i = 1; i <= maxNum; i++) {
    if (!numCache[i]) return i;
    if (i === maxNum && numCache[i]) return i+1
  };
};

const firstMissingPositive2 = (nums) => {
  //declare a cache to store numbers in array
  let minPositive = null;
  //declare a variable to store max in array
  let maxNum = 0;
  //iterate through nums to push nums to cache, and find max value in array
  nums.forEach (num => {
    if (minPositive === null && num > 0) minPositive = num;
    else if (minPositive > num && num > 0) minPositive = num;
    maxNum = Math.max(maxNum, num, minPositive);
  });
  if (minPositive > 1) return 1;
  for (let i = 1; i <= maxNum; i++) {
    if (!numCache[i]) return i;
    if (i === maxNum && numCache[i]) return i+1
  };
};

//console.log(firstMissingPositive([1,2,0])); //expect 3
// console.log(firstMissingPositive([3,4,-1,1])); //expect 2
//console.log(firstMissingPositive([7,8,9,11,12])); //expect 1
console.log(firstMissingPositive([]));
console.log(firstMissingPositive([0]));