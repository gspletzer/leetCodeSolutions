/*Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

If the last word does not exist, return 0.

Note: A word is defined as a maximal substring consisting of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  //declare variable for counting
  let count = 0;
  //declare variable to trim excess white space from beginning and end of string
  const trimmed = s.trim();
  //iterate backwards through the string
  //add +1 to the counter variable until a space is reached, then break
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] !== " ") count += 1;
    else break;
  }
  //return count
  return count;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("Unique"));
console.log(lengthOfLastWord("Super Silly Sallymae  "));
