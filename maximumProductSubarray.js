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
    console.log(currentProd)
    //find max value between acc and curVal; accounts for subarray of 1 with greatest value
    const singleVal = Math.max(acc, curVal);
    console.log(singleVal)
    //if product is undefined or product*curVal is less than product set equal to currentProduct
    //else multiply the running total product by curVal
    if (productSub === undefined || productSub * curVal <= productSub) {
      productSub = currentProd;
      console.log(productSub)
    } else {
      productSub = productSub * curVal;
      console.log(productSub)
    }
    //if 0 index of totalProd equal 1, set 0 and 1 index of totalProd to currentProd
    //else multiply 0 index of totalProd by curVal and compare to 1 index
    //set 1 index of totalProd equal to whichever is greater value
    if (totalProd[0] === 1 || totalProd[0] === 0) {
      totalProd[0] = currentProd;
      totalProd[1] = currentProd;
      console.log(totalProd)
    } else {
      totalProd[0] = totalProd[0] * curVal;
      totalProd[0] > totalProd[1]
        ? (totalProd[1] = totalProd[0])
        : totalProd[1];
        console.log(totalProd)
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

// console.log(maxProduct([2, 3, -2, 4])); //expect 4
// console.log(maxProduct([-2, 1, -1])); // expect 1
// console.log(maxProduct([2, 3, 2, 4])); //expect 48
// console.log(maxProduct([2, -3, 2, 4])); //expect 8
// console.log(maxProduct([1, 2, -3, 4, 5, -6, 7, 8, -9, 1, 2]));
// console.log(maxProduct([-2])); //expect -2
// console.log(maxProduct([0, 2])); //expect 2
// console.log(maxProduct([3, -1, 4])); //expect 4
// console.log(maxProduct([-2, 3, -4])); //expect 24
// console.log(maxProduct([2, -5, -2, -4, 3])); //expect 24
console.log(maxProduct([1, 0, -1, 2, 3, -5, -2])); // expect 60; currently returning 30
