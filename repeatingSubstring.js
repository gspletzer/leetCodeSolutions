/*
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. 
You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:

Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:

Input: "aba"
Output: False

Example 3:

Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  //initialize variable for empty substring
  let subS = "";
  //initialize variable for result as false
  let result = false;
  //iterate through the string with a for loop until i < string length-1 (avoids false positive if no substring exists)
  for (let i = 0; i < s.length - 1; i++) {
    //add character at i to substring
    subS += s[i];
    //check if the length of the provided string divided by the substring returns 0
    if (s.length % subS.length === 0) {
      //if yes, then check if repeating substring by the number of string length/substring
      //equals the original string
      if (subS.repeat(s.length / subS.length) === s) {
        //if yes, change result to true and break loop
        result = true;
        break;
      }
      //else continue through loop
      else continue;
    }
    //else continue through loop
    else continue;
  }
  //return the result variable
  return result;
};

console.log(repeatedSubstringPattern("aaaa"));
console.log(repeatedSubstringPattern("abcabcabcabc"));
console.log(repeatedSubstringPattern("aabaabaaba"));
console.log(repeatedSubstringPattern("abcabca"));
