/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const limit = 2 ^ (31 - 1);
  //use a variable to hold the absolute value of the number
  const num = Math.abs(x);
  //reversed&floated version of the absolute number and multiply by the sign of x
  const reversed = parseFloat(num.toString().split("").reverse().join(""));

  return reversed < limit ? Math.sign(x) * reversed : 0;
};

console.log(reverse(121));
console.log(reverse(-3121));
console.log(reverse(120));

/* need to account for numbers that are larger than a 32 bit environment */
