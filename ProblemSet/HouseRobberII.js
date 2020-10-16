/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. 
All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same night.
Given a list of non-negative integers nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 3:
Input: nums = [0]
Output: 0

Constraints:
1 <= nums.length <= 100
0 <= nums[i] <= 1000
 */

 const houseRobber = (nums) => {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    //initialize even sum at zero
    let evenSum = 0;
    //initialize odd sum at zero
    let oddSum = 0;
    //iterate through nums array
    for (let i = 0; i < nums.length; i++){
      //if i equals last element odd length nums array, break
      if (i === nums.length-1 && nums.length%2 !== 0) break;
      //if length is odd and i is zero, add the max between first and last position to even sum
      if (i === 0 && nums.length%2 !== 0) {
        evenSum += Math.max(nums[i], nums[nums.length-1])
      }
      //else if index is even, add to even sum
      else if (i%2 === 0) evenSum += nums[i];
      //else add to oddSum
      else oddSum += nums[i]
    };
    return Math.max(evenSum, oddSum)
  };

  console.log(houseRobber([2,3,2]));//expect 3
  console.log(houseRobber([1,2,3,1]));//expect 4
  console.log(houseRobber([0]));//expect 0

  //need to account for scenarios where in an array of 5, the nums at 2 and 5 would provide largest sum; ex: [1,4,1,1,5] expect 9


