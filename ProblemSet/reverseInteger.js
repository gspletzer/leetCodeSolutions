/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //create a variable to account for 32 bit limit
  const limit = 2147483647;
  //use a variable to hold the absolute value of the number
  const num = Math.abs(x);
  //reversed&floated version of the absolute number and multiply by the sign of x
  const reversed = parseFloat(num.toString().split("").reverse().join(""));
  //return reversed number with correct sign if less than the 32 bit limit, else return zero
  return reversed < limit ? Math.sign(x) * reversed : 0;
};

console.log(reverse(121));
console.log(reverse(-3121));
console.log(reverse(120));

/* need to account for numbers that are larger than a 32 bit environment */
