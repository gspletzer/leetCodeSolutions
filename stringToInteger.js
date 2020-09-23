/*
Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

Example 1:
Input: "42"
Output: 42

Example 2:
Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
Then take as many numerical digits as possible, which gets 42.

Example 3:
Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:
Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
Thefore INT_MIN (−231) is returned.
*/

/**
 * @param {string} str
 * @return {number}
 */

/* using number.isInteger in lieu of cache */
// const myAtoi = function (str) {
//   //trim white space from string
//   const trimmed = str.trim();
//   //declare output; initialize as string of zero
//   let output = "0";
//   //loop through the string to evaluate for negative sign/number
//   for (let i = 0; i < trimmed.length; i++) {
//     //add negative sign and consecutive numbers to output
//     //break when non number is encountered
//     if (trimmed[i] === "+" && i === 0) continue;
//     else if (
//       trimmed[i] === "-" &&
//       (trimmed.length === 1 || !Number.isInteger(parseInt(trimmed[i + 1])))
//     )
//       break;
//     else if (trimmed[i] === "-" && i === 0) output = trimmed[i];
//     else if (Number.isInteger(parseInt(trimmed[i]))) output += trimmed[i];
//     else break;
//   }
//   //convert output to number return and check it is with min and max limits
//   return parseInt(output, 10) > 2147483647
//     ? 2147483647
//     : parseInt(output, 10) < -2147483648
//     ? -2147483648
//     : parseInt(output, 10);
// };

/* utilizing cache */
const myAtoi = function (str) {
  //trim white space from string
  const trimmed = str.trim();
  //declare a cache to store number values
  const nums = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
  };
  //declare output; initialize as string of zero
  let output = "0";
  //loop through the string to evaluate for negative sign/number
  for (let i = 0; i < trimmed.length; i++) {
    //if + sign is at first character, continue
    if (trimmed[i] === "+" && i === 0) continue;
    //else if - sign and length is 1 or the next character is not a number, break
    else if (
      trimmed[i] === "-" &&
      (trimmed.length === 1 || !nums[trimmed[i + 1]])
    )
      break;
    //else if - sign is first character, add to output string
    else if (trimmed[i] === "-" && i === 0) output = trimmed[i];
    //else if character is a number, add to output string
    else if (nums[trimmed[i]]) output += trimmed[i];
    //else if any other characters other than number, break
    else break;
  }
  //convert output to number and check it is with min and max limits, return accordingly
  return parseInt(output, 10) > 2147483647
    ? 2147483647
    : parseInt(output, 10) < -2147483648
    ? -2147483648
    : parseInt(output, 10);
};

console.log(myAtoi("   -42"));
console.log(myAtoi("423"));
console.log(myAtoi("4.23"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-+2"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("-"));
console.log(myAtoi("+"));
