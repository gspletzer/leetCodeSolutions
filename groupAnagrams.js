/*
 * Given an array of strings, group anagrams together.
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
All inputs will be in lowercase.
The order of your output does not matter.
*/
/*
NOTES: 
-word length can vary
-input one array
-output is array of subarrays
-no restrictions for time and space complexity
-elements in the subarrays will have the same length and contain the same characters
-need a variable for the output array
-will have at least one iteration to check each element for characters
-possibly sort each element to alphabetize the characters for easier comparison
-have a cache of the sorted element to identify anagram group; key would be sorted, value could be which subarray index to add the matching element to
-push element to a subarray
*/

const Input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = function (strs) {
  //variable for output
  let output = [];

  //variable for cache
  let cache = {};

  //iterate through array
  strs.forEach((el) => {
    //sort characters of each element to allow for easy comparison of matching anagrams
    let sorted = el.split("").sort().join(""); //aet
    //if the cache contains the sorted anagram, then push the element to the subarray of output array with the corresponding index value from cache -1
    //else push the element as a subarray to the output array and add the sorted element as key with the value of current length of output array, which will act as the index reference
    if (cache[sorted]) {
      output[cache[sorted] - 1].push(el);
    } else {
      output.push([el]);
      cache[sorted] = output.length;
    }
  });
  //return the output array
  return output;
};

/*
const anagrams = (arr) => {
  const cache = {};
  arr.forEach(el => {
    let sorted = el.split("").sort().join("");
    !cache[sorted] ? cache[sorted] = [el] : cache[sorted].push(el)
  })
  return Object.values(cache)
}
*/

console.log(groupAnagrams(Input));
