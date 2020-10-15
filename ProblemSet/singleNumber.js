/*
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/

/*
INITIAL THOUGHTS:
without consideration for space, would utilize cache object
add if item is not in the cache, remove if it is
ultimately leaves one item in the cache and would return that value
*/

//linear time complexity, but also linear space complexity
const singleNumber = (arr) => {
  //declare a variable for cache
  let cache = {};
  //iterate through the array
  arr.forEach((el) => {
    //if the element is a value in the cache, delete
    //otherwise add to cache
    if (cache[el] === el) delete cache[el];
    else cache[el] = el;
  });
  //return the value left in the cache
  let single = Object.values(cache);
  return single[0];
};

const input = [4, 1, 2, 1, 2, 8, 9, 6, 5, 6, 2, 5, 3, 2, 3, 4, 8];
console.log(singleNumber(input)); //expected output: 9
