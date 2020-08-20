/*Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]


Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
You can return the answer in any order.
*/

/*
count occurrences of each element, sort most frequent to least frequent, return the numbers that occurred most frequently in k places
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  //cache to store the element, value that will act as counter {1: 3, 2: 2, 3:1}
  let cache = {};
  //array for tracking elements 
  let result = [];
  //iterate through the array
  nums.forEach(el => {
    if (cache[el]) {
      cache[el] += 1;
    }
    else {
      cache[el] = 1;
    };
    if (Array.isArray(result[cache[el]])) {result[cache[el]].push(el)}
    else {result[cache[el]] = [el]}
  });
    //if element was in the cache, increment that value by 1
    //compare that number to the counter variable, if the value is greater than the counter, reassign the counter
    //add element to the cache with value of 1
    //compare the value to counter
  //iterate through entries with for loop; start i at 1 up to and including k;
    //check subarray[1] for counter value, when it's found, return subarray[0], decrement counter 
    console.log(result)
  for (let i = result.length-1; i >0 ; i--) {
    if (result[i].length === k) {
      return result[i]
    }
  }
};

console.log(topKFrequent([1,1,1,2,2,3], 2))


//as you add to cache and increment value, add element to subarray in additional array at the index equal to value. second iteration would move backwards through extra array looking for subarray with length equal to k