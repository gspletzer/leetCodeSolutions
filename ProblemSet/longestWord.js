/*
input: array of strings
output: the longest string, that includes shorter strings from the array; string

questions: 
time and space complexity considerations? none
use native methods? yes
consistent capitalization? yes, all will be lower case
 */

const words1 = ["dog", "cat", "walker", "dogwalker"];
const words2 = [
  "dog",
  "race",
  "car",
  "racecar",
  "dogwalker",
  "walker",
  "frogwalker",
  "frog",
];

const longestWord = (arr) => {
  //initialize a variable to hold the resulting string
  let result = "";
  //iterate through array
  for (let i = 0; i < arr.length; i++) {
    //if element = result string, continue
    if (arr[i] === result) continue;
    //iterate through all elememnts to account for leading words that may appear after the following word
    for (let j = 0; j < arr.length; j++) {
      //concat initial element with subsequent elements
      const combo = arr[i].concat(arr[j]);
      //check if initial array includes the concated strings
      if (arr.includes(combo)) {
        //if yes, check length of current result, if greater, reassign the result
        combo.length > result.length ? (result = combo) : result;
      }
      //else continue
      else continue;
    }
  }
  //return result string
  return result;
};

console.log(longestWord(words1));
console.log(longestWord(words2));