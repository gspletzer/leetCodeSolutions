/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  //return boolean of whether reversed string of converted number is truthy
  return x == x.toString().split("").reverse().join("");
};

console.log("Should be true.", isPalindrome(121));
console.log("Should be false.", isPalindrome(-121));
console.log("Should be false.", isPalindrome(10));
console.log("Should be true.", isPalindrome(12321));
console.log("Should be true.", isPalindrome(11));
