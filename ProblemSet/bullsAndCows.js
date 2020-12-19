/*
You are playing the Bulls and Cows game with your friend.

You write down a secret number and ask your friend to guess what the number is. 
When your friend makes a guess, you provide a hint with the following info:

The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position. 
Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.

The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. 
Note that both secret and guess may contain duplicate digits.

Example 1:
Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"

Example 2:
Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the 
non-bull digits can only be rearranged to allow one 1 to be a bull.

Example 3:
Input: secret = "1", guess = "0"
Output: "0A0B"

Example 4:
Input: secret = "1", guess = "1"
Output: "1A0B"

Constraints:
1 <= secret.length, guess.length <= 1000
secret.length == guess.length
secret and guess consist of digits only.
*/

const bullsAndCows = (secret, guess) => {
  //if secret matches guess, return answer with #A = secret.length
  if (secret === guess) {
    return `${secret.length}A0B`
  };
  //convert guess to array to change elements that are bulls
  const guessArr = guess.split('');
  //declare a cache
  const cache = {};
  //declare a bull count and cow count; intialize both at zero
  let bulls = 0;
  let cows = 0;
  //iterate through guess 
  for (let i = 0; i < guessArr.length; i++) {
    //if the current element matches the element at same index of secret
      //add one to bull count
      //and change element to B to avoid duplicate count for cow iteration
    if (guessArr[i] === secret[i]) {
      bulls += 1;
      guessArr[i] = 'B';
    }
    //else if element is in cache add one
    else if (cache.hasOwnProperty(secret[i])) {
      cache[secret[i]] += 1;
    }
    //else, cache the element as a key and value as occurence
    else {
      cache[secret[i]] = 1;
    }
  };
  //iterate through guess 
    //if the element is in the cache
      //add one to cow count
      //if value is 1, delete key/value pair from cache
      //else subtract one from the value
  for (let i = 0; i < guessArr.length; i++) {
    if (cache.hasOwnProperty(guessArr[i])) {
      if(cache[guessArr[i]]===1) {
      cows += 1; 
      delete cache[guessArr[i]]
      }
      else {
      cows += 1; 
      cache[guessArr[i]] -= 1
      }
    }
  };
  //return the final tally as [bullcount]A[cowcount]B
  return `${bulls}A${cows}B`
};

console.log(bullsAndCows("1807", "7810")); //expect 1A3B
console.log(bullsAndCows("1123", "0111")); //expect 1A1B
console.log(bullsAndCows("1", "0")); //expect 0A0B
console.log(bullsAndCows("1", "1")); //expect 1A0B
console.log(bullsAndCows("11", "10")); //expect 1A0B
console.log(bullsAndCows("1122", "2211")); //expect 0A4B