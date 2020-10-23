/*
Given an array of n integers nums, a 132 pattern is a subsequence of three integers
nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].
Return true if there is a 132 pattern in nums, otherwise, return false.
Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

EXAMPLE 1: 
Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.

EXAMPLE 2: 
Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

EXAMPLE 3:
Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].

Constraints:
n == nums.length
1 <= n <= 104
-109 <= nums[i] <= 109
*/
/* initial brute force */
const one32Pattern = (nums) => {
  //if the array is less than 3, return false
  if (nums.length < 3) return false;
  //declare variable for answer; initialize at false
  let answer = false;
  //iterate through the array
    //for each element, run subsequent for loop to check for 32 pattern
      //if found, change answer to true
  for (let i = 0; i < nums.length; i++) {
    //if i is equal to nums.length-2, break because there will only be two indices to evaluate
    if (i === nums.length-2) break;
    //declare a variable to hold array for 132 pattern evaluation; initialize with nums[i]
    const currentVal = [nums[i]];

    //iterate with second for loop to check if subsequent elements create a 32 pattern when added to 132 evaluation array
    for (let j = i+1; j <nums.length; j++) {    //if the evaluation array is less than two in length j equals last index, break because not enough indices left to have pattern
      if (currentVal.length < 2 && j === nums.length-1) break;
      //if evaluation array is less than two && nums[j] is greater than evaluation array at 0, push it to evaluation array
      if (currentVal.length <2 && nums[j] > currentVal[0]) currentVal.push(nums[j]);
      //if nums[j] is greater than currentVal[1] change currentVal[1] to nums[j]
      if (currentVal[1] < nums[j]) currentVal[1]=nums[j];
      //if evaluation array is 2 && evalArray[0]<nums[j]<evalArray[1], change answer to true and break
      if (currentVal.length === 2 && nums[j] < currentVal[1] && nums[j] > currentVal[0]) {
        answer = true;
        break}
    }
    //if answer is true, break
    if (answer === true) break;
  }
  //return answer
  return answer;
};

console.log(one32Pattern([3,1,4,2]));//expect true
console.log(one32Pattern([1,2,3,4]));//expect false
console.log(one32Pattern([-2,1,2,-2,1,2]));//expect true
console.log(one32Pattern([1,2,3,4,-4,-3,-5,-1]));//expect false

