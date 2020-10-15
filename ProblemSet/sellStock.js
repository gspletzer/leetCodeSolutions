/*
"Say you have an array for which the nth element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.

Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: 
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Not 7-1 = 6, as selling price needs to be larger than buying price.

Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: 
In this case, no transaction is done, i.e. max profit = 0.
*/

const sellStock = (prices) => {
  //declare max output variable; intialize at 0
  let maxProfit = 0;
  //declare lowest price variable; initialize at Infinity; initialize at prices[0] if using a for loop
  let lowestPrice = Infinity;
  /*
  iterate through prices array
  with each iteration:
  -find minimum lowest buying price by comparing current lowest price to current element
  -then fine max output by comparing current max output to current element minus lowest price
  **using a for loop would eliminate one iteration since prices[0] is already accounted for**
  */
  prices.forEach((el) => {
    lowestPrice = Math.min(el, lowestPrice);
    maxProfit = Math.max(maxProfit, el - lowestPrice);
  });
  //return the max output
  return maxProfit;
};

console.log(sellStock([7, 1, 5, 3, 6, 4]));
console.log(sellStock([7, 6, 4, 3, 1]));
console.log(sellStock([7, 4, 1, 5, 3, 6, 8]));
