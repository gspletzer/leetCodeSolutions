/**
 * @param {number} num
 * @return {boolean}
 * extension: try to solove without recursion/loops
 * 32 bit limit?
 */
var isPowerOfFour = function (num) {
  //return false if input number is larger than 32 bit limit or less than/equal to zero
  if (num > 2147483647 || num <= 0) return false;
  //return true to account for 4 raised to zero power
  else if (num === 1) return true;
  //base case: if input is less than or equal to 4, can evaluate for true vs false divisibility of 4
  else if (num <= 4) return num % 4 === 0;
  //iterative case: call function with input divided by 4
  else return isPowerOfFour(num / 4);
};

console.log(isPowerOfFour(-240));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(-2147483648));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(16));
