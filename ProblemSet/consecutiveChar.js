/*
Given a string s, the power of the string is the maximum length
of a non-empty substring that contains only one unique character.

Return the power of the string.
*/

// const consecutiveChar = (s) => {
//   //declare an empty cache
//   //key= character, value = occurence count
//   const cache = {};
//   //iterate through the string to add new characters to cache or increment
//   for (let i = 0; i < s.length; i++){
//     if (cache.hasOwnProperty(s[i])) {
//       cache[s[i]] += 1;
//     };
//     if (!cache.hasOwnProperty(s[i])) {
//       cache[s[i]] = 1
//     }
//   }
//   //return max of object.values of cache
//   return Math.max(...Object.values(cache))
// };

const consecutiveChar = (s) => {
  //declare a variable to hold most recent character (initialize at s[0])
  let lastChar = s[0];
  //declare a count variable, initialize at 1
  let count = 1;
  //declare a variable to hold max, initialize at 1
  let max = 1;
  //iterate through the string
    //if current character matches most recent character
      //add one to count
      //update max to be max between max and count
    //if current character doesn't match most recent
      //set most recent to current char
      //set count to 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === lastChar) {
      count += 1;
      max = Math.max(max, count)
    }
    else {
      lastChar = s[i];
      count = 1;
    }
  }
  //return max
  return max
}

console.log(consecutiveChar("leetcode")); // expect 2
console.log(consecutiveChar("abbcccddddeeeeedcba")); // expect 5
console.log(consecutiveChar("triplepillooooow")); // expect 5
console.log(consecutiveChar("hooraaaaaaaaaaay")); // expect 11
console.log(consecutiveChar("tourist")); // expect 1