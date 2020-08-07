/*Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//O(n) time complexity, but not O(1) space
var findDuplicates = function (nums) {
  //variable for cache and new array
  let cache = {};
  let newArr = [];

  //use forEach to iterate through given array and add elements to cache
  //if the element is already in the cache, the push to the new array
  nums.forEach((el) => {
    if (cache[el]) newArr.push(el);
    else cache[el] = true;
  });

  //return new array
  return newArr;
};




const input = [4, 3, 2, 7, 8, 2, 3, 1, 4, 5];
console.log(findDuplicates(input));
