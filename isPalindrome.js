/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //remove all non-alphanumeric characters and spaces from the string
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  //reverse the string
  const reverse = str.split("").reverse().join("");
  //return boolean for input string === reversed string
  return str === reverse;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
