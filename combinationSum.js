/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. 
You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen numbers is different.

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

Example 4:
Input: candidates = [1], target = 1
Output: [[1]]

Example 5:
Input: candidates = [1], target = 2
Output: [[1,1]]

Constraints:
1 <= candidates.length <= 30
1 <= candidates[i] <= 200
All elements of candidates are distinct.
1 <= target <= 500
*/

const combinationSum = (nums, target, output = []) => {
  nums.forEach((el) => {
    let index = output.length - 1;
    if (target - el === 0 && output[index] === undefined)
      return output.push([el]); //end looping;
    console.log(output);
    if (target - el === 0) return output[index].push(el);
    console.log(output);
    if (target - el >= 0) {
      console.log(output);
      return output.push(combinationSum(nums, target - el, output[index]));
    }
  });
  return output;
};

/* LEET CODE SOLUTION */

// var combinationSum = function(candidates, target) {
//   const output = [];
//    //The goal is to use backtracking to find all combinations.
//   const findCombination = (remain, path, start) => {
//     if (remain < 0) {
//       return;
//     }
//     if (remain === 0) {
//       output.push([...path]);
//       return;
//     }
//     for (let i = start; i < candidates.length; i++) {
//       // create a new path array to run the subroutine. It's
//       // cleaner than pushing and then reseting the array in
//       // javascript.
//       findCombination(remain - candidates[i], [...path, candidates[i]], i);
//     }
//   }
//   findCombination(target, [], 0);
//   return output;
// };

// console.log(combinationSum([2,3,6,7], 7));
// console.log(combinationSum([2,3,5], 8));
// console.log(combinationSum([2], 1));// expect []
// console.log(combinationSum([1], 1));//expect [[1]]
console.log(combinationSum([1], 2)); //expect [[1,1]]
