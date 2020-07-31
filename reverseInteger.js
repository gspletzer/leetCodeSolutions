/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //use a variable to hold the absolute value of the number
  const num = Math.abs(x);
  //return the reversed&floated version of the absolute number and multiply by the sign of x
  return Math.sign(x) * parseFloat(num.toString().split("").reverse().join(""));
};

console.log(reverse(121));
console.log(reverse(-3121));
console.log(reverse(120));
