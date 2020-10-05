/* 
Input: array of integers, target number
Output: subarray of indices of the elements in given array that equal target

Example: [1, 2, 3], 5
output: [1,2]

Notes: only one solution for the given arguments, elements cannot be used more than once
Integers can be positive only? yes
*/

const indexOutput = (arr, target) => {
  //declare an output array
  const output = [];
  //declare a cache; key will be the difference of element from the target, and the value will the index of the element
  const cache = {};
  //iterate through the array
  //check if the cache has property of el; can't evaluate for true vs false because 0 evaluates to false.
  //if yes, push the current index and the index from cache to the output
  //if no, adding difference to the cache with the current index
  arr.forEach((el, i) => {
    if (cache.hasOwnProperty(el)) output.push(cache[el], i);
    else cache[target - el] = i;
  });
  //return the output array
  return output;
};

console.log(indexOutput([1, 2, 3], 5));
console.log(indexOutput([2, 7, 11, 15], 9));
