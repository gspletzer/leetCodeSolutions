/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, 
write a function to search target in nums. 
If target exists, then return its index, otherwise return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Note:
You may assume that all elements in nums are unique.
n will be in the range [1, 10000].
The value of each element in nums will be in the range [-9999, 9999].
 */

const binarySearch = (nums, target, currentI = 0) => {
  if (nums.length === 1) {
    if (nums[0] === target) return currentI;
    else return Infinity;
  }

  const middle = Math.floor(nums.length / 2);

  if (target === nums[middle]) return middle;

  if (target > nums[middle])
    currentI = middle + binarySearch(nums.slice(middle + 1), target, middle);

  if (target < nums[middle])
    currentI = 0 + binarySearch(nums.slice(0, middle), target, middle);

  return currentI > -1 ? currentI : -1;
};

//this solution does not work for all edge cases...need to refactor for two pointers

//console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); //expect -1 (success)
//console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); //expect 4 (success)
//console.log(binarySearch([5], -5)); //expect -1 (success)
//console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); //expect -1 (success)
//console.log(binarySearch([2, 5], 2)); //expect 0
