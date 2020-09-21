/**
 Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", s = "dog dog dog dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lower-case English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
\; /*initial attempt - doesn't cover all edge cases */
// var wordPattern = function (pattern, s) {
//   //convert s to array
//   const sArr = s.split(" ");
//   //check if lengths are equal, if not return false
//   if (pattern.length !== sArr.length) return false;
//   //declare a cache; key will be character from pattern, value will be element(word) from s
//   let cache = {};
//   //iterate through pattern
//   for (let i = 0; i < pattern.length; i++) {
//     //if current pattern character and next pattern character are different
//     //AND current s element and next s element are the same, return false
//     if (pattern[i] !== pattern[i + 1] && sArr[i] === sArr[i + 1]) return false;
//     //if character isn't in cache, add it with value of corresponding element in s
//     else if (!cache[pattern[i]]) cache[pattern[i]] = sArr[i];
//     //if character is in cache, but value doesn't match current s element, return false
//     else if (cache[pattern[i]] !== sArr[i]) return false;
//   }
//   //return true if iteration doesn't return false
//   return true;
// };

/* collaboration with Wyatt Bell */
const wordPattern = (pattern, s) => {
  // parse s into arr
  const arr = s.split(" ");
  //create helper function that takes in an iterable value
  const inner = (val) => {
    //create an empty cache object
    const obj = {};
    //iterate through value
    for (let i = 0; i < val.length; i += 1) {
      //if the element/character isn't in cache, add with value of i
      if (!obj[val[i]]) obj[val[i]] = i;
      //else add i to value of the correlating key
      else obj[val[i]] += i;
    }
    //return the cache
    return obj;
  };
  //compare string of values for both inputs; return true if they match, false if not
  return (
    Object.values(inner(pattern)).join("") ===
    Object.values(inner(arr)).join("")
  );
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("abba", "dog cat cat dog fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("aaaa", "dog dog dog dog"));
console.log(wordPattern("abcba", "dog cat fish cat dog"));
console.log(wordPattern("abcba", "dog cat fish fish dog"));
console.log(wordPattern("aabba", "dog dog cat cat dog"));
console.log(wordPattern("abc", "dog cat dog"));
console.log(wordPattern("abab", "dog cat cat dog"));
