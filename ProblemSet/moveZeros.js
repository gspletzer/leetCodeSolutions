/*
Given an array nums, write a function to move all 0's to the end of it
while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const moveZeros = nums => {
  //iterate through the array
    //if the element is a zero, add one to counter and delete zero from array and subtract one from i. 
  //add number of zeros as indicated by counter to end of the array
  //return updated array
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count += 1;
      nums.splice(i, 1);
      i--
    }
  };
  while (count > 0) {
    nums.push(0);
    count -= 1;
  };
  return nums
};

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([0,0,1]))