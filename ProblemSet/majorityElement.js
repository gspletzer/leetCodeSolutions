/*Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
Input: [3,2,3]
Output: 3

Example 2:
Input: [2,2,1,1,1,2,2]
Output: 2
*/

//My question: Is the array only containing two different integers appearing? Or can that number vary?

/**
 * @param {number[]} nums
 * @return {number}
 */

//assumes the array only contains two varying integers based on the more than 1/2 comment in prompt
var majorityElement = function (nums) {
  //declare a cache to hold counts of each integer
  let cache = {};

  //iterate through the array
  for (let i = 0; i < nums.length; i++) {
    //increase count for the cached element
    cache[nums[i]] += 1;

    //if element is not in cache, add as key = element and value = 1;
    if (!cache[nums[i]]) cache[nums[i]] = 1;

    //compare value of element in cache to half of length
    //return element if greater than half the length
    if (cache[nums[i]] > nums.length / 2) return nums[i];
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

//assumes array can contain any number of varying integers
/*still not working for more than two varying integers; issue with reduce*/
const majElement = function (intArr) {
  let cache = {};
  let result;

  intArr.forEach((el) => {
    if (!cache[el]) cache[el] = 1;
    else cache[el] += 1;
  });
  console.log(cache);
  console.log(Object.entries(cache));
  Object.entries(cache).reduce((acc, curVal) => {
    if (curVal[1] > acc[1]) result = curVal[0];
    else result = acc[0];
  });

  return result;
};

console.log(majElement([3, 2, 3]));
//console.log(majElement([2,2,1,1,1,2,2]));
