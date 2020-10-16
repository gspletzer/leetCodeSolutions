/*
Given a string s, remove duplicate letters so that every letter appears once and only once. 
You must make sure your result is the smallest in lexicographical order among all possible results.

Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

Example 1:
Input: s = "bcabc"
Output: "abc"

Example 2:
Input: s = "cbacdcbc"
Output: "acdb"

Constraints:
1 <= s.length <= 104
s consists of lowercase English letters.
*/

const noDuplicates = (string) => {
  //declare a cache to hold characters
  const cache = {};
  //iterate through string
  for(let i = 0; i < string.length; i++){
    //if character is not in cache, add it
    if(!cache[string[i]]) cache[string[i]] = string[i]
  };
  //return sorted values from cache and join back together as string
  return Object.values(cache).sort().join('')
};

console.log(noDuplicates('bcabc'));//expect 'abc'
console.log(noDuplicates("cbacdcbc"));//expect 'abcd'