/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*assumes you can have more than two elements to achieve maxProduct*/
var maxProduct = function (nums) {
  //declare an output; initialize at -Infinity
  let output = -Infinity;
  //declare product to hold running subtotal product
  let productSub;
  //declare an empty array to hold the running total product and max contiguous result
  //for longer nums array with multiple instances of negative values
  let totalProd = [1, 1];
  //if array length is 1 return the element of array
  if (nums.length === 1) return nums[0];
  //utilize reduce to iterate through the array
  nums.reduce((acc, curVal) => {
    //find current product of accumulator and current value
    const currentProd = acc * curVal;
    console.log(currentProd);
    //find max value between acc and curVal; accounts for subarray of 1 with greatest value
    const singleVal = Math.max(acc, curVal);
    console.log(singleVal);
    //if product is undefined or product*curVal is less than product set equal to currentProduct
    //else multiply the running total product by curVal
    if (productSub === undefined || productSub * curVal <= productSub) {
      productSub = currentProd;
      console.log(productSub);
    } else {
      productSub = productSub * curVal;
      console.log(productSub);
    }
    //if 0 index of totalProd equal 1, set 0 and 1 index of totalProd to currentProd
    //else multiply 0 index of totalProd by curVal and compare to 1 index
    //set 1 index of totalProd equal to whichever is greater value
    if (totalProd[0] === 1 || totalProd[0] === 0) {
      totalProd[0] = currentProd;
      totalProd[1] = currentProd;
      console.log(totalProd);
    } else {
      totalProd[0] = totalProd[0] * curVal;
      totalProd[0] > totalProd[1]
        ? (totalProd[1] = totalProd[0])
        : totalProd[1];
      console.log(totalProd);
    }
    //compare currentProduct to output
    //if greater, set output equal to currentProduct
    //return acc as currentProduct
    //else return acc as curVal
    if (singleVal > currentProd && singleVal > output) {
      output = singleVal;
    } else if (currentProd > output) {
      output = currentProd;
    }
    return curVal;
  });
  //return the output
  return Math.max(output, productSub, totalProd[1]);
};

const maxProd = (nums) => {
  //for arrays with length 1, return element
  if (nums.length === 1) return nums[0];
  //declare a value for absolute value of current product
  let absVal = null;
  //declare a variable for individual elements; initialize at -Infinity
  let singleVal = -Infinity;
  //declare a variable for current product of two elements next to each other; initialize as null
  let currProd = null;
  //declare a variable for running subtotal of multiple iterations; initialize as null
  let totalProd = null;
  //declare a variable for grand total of products; position zero is grandTotal
  //position one will hold max value from grandTotal 
  let grandProd = [null, null];
  //utilize reduce for built in comparison method
  nums.reduce((acc, curVal) => {
    //set singleVal equal to max between singleVal, acc, and curVal
    singleVal = Math.max(singleVal, acc, curVal);
    absVal = Math.abs(acc*curVal)
    //set currProd equal to acc times curVal when undefined
    //else return max of currProd * curVal vs acc*curVal
    if (currProd === null) {
      currProd = acc * curVal;
    }
    else {
      currProd = Math.max(currProd*curVal, acc * curVal);
    }
    //if totalProd is undefined, set equal to currProd
    //else if currProd is greater than both totalProd and totalProd*curVal, set totalProd equal to currProd
    // else multiply totalProd by curVal
    if (totalProd === null) totalProd = currProd;
    else if (currProd > totalProd && currProd > totalProd * curVal)
      totalProd = currProd;
    else totalProd = totalProd * curVal;
    //if grandProd at zero is null; set element 0 and 1 to curr Prod
    //else set position zero equal to current 0 value *curVal, and return max between grandProd position 1 and 0 for position 1
    if (grandProd[0] === null) {
      grandProd[0] = currProd;
      grandProd[1] = currProd;
    } else {
      grandProd[0] = grandProd[0] * curVal;
      grandProd[1] = Math.max(grandProd[1], grandProd[0]);
    }
    console.log(singleVal, currProd, totalProd, grandProd)
    //return curVal at end of iteration
    return curVal;
  });
  //return the max between the singleVal, currProd, totalProd, and grandProd at position 1
  return Math.max(singleVal, currProd, totalProd, grandProd[1]);
};

// console.log(maxProd([2, 3, -2, 4])); //expect 6
// console.log(maxProd([-2, 1, -1])); // expect 2
// console.log(maxProd([2, 3, 2, 4])); //expect 48
// console.log(maxProd([2, -3, 2, 4])); //expect 8
//console.log(maxProd([1, 2, -3, 4, 5, -6, 7, 8, -9, 1, 2]));
// console.log(maxProd([-2])); //expect -2
// console.log(maxProd([0, 2])); //expect 2
// console.log(maxProd([3, -1, 4])); //expect 4
// console.log(maxProd([-2, 3, -4])); //expect 24
// console.log(maxProd([2, -5, -2, -4, 3])); //expect 24
// console.log(maxProd([1, 0, -1, 2, 3, -5, -2])); // expect 60
console.log(maxProd([1,-2,3,-4,-3,-4,-3]));// expect 432

