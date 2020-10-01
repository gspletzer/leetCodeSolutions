/*
"You are given coins of different denominations and a total amount of money amount. 
Write a function to compute the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin."
*/

//Input: array, positive integer, output: integer

const coinSum = (coins, sum) => {
  //declare coin count
  let coinCount = 0;
  //sort input array of coins for descending order
  const sortCoin = coins.sort((a, b) => b - a);
  //iterate through sorted array
  for (let i = 0; i < sortCoin.length; i++) {
    //if coin > sum continue
    if (sortCoin[i] > sum) continue;
    //if sum%coin equals zero, return coinCount += sum/coin
    else if (sum % sortCoin[i] === 0) return (coinCount += sum / sortCoin[i]);
    //else sum = sum%coin, coin count equals math.floor of sum/coin
    else {
      coinCount += Math.floor(sum / sortCoin[i]);
      sum = sum % sortCoin[i];
    }
  }
  //if iteration doesn't find a solution return -1
  return -1;
};

/* recursively call coinSum and check values sum for each value in array, add 1 to coin count with each iteration...but only return if sum hits 0*/

console.log(coinSum([1, 5, 2, 10, 11, 12], 21));//expect 2
//need to account for scenarios where largest number will not create the lowest coin return
