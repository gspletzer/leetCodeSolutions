/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
 input: array of numbers and target sum (number)
 output: the indexes of the elements that add together to equal the target
 */

var twoSum = function (nums, target) {
  /*declare a cache;
  keys will equal difference between element and target;
  value will equal index of element*/

  let cache = {};

  /*declare an empty array to hold result of correct indexes*/

  let result = [];

  /*iterate through given numbers array with forEach;
  with each pass evaluate difference of the element from the target
  if that difference is not in the cache, add it as key/value pair noted above
  if it is found, then the push both the index of that key/value pair and the current index */

  nums.forEach((el, index) => {
    if (cache.hasOwnProperty(el)) {
      result.push(cache[el], index);
    } else {
      let difference = target - el;
      cache[difference] = index;
    }
  });

  /*return result*/
  return result;
};

/* for optimization replace forEach with a for loop and put the result array as a return from the for loop */
