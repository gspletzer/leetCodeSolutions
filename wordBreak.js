/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:
The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example 1:
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
*/

const wordBreak = (s, wordDict) => {
  //declare a cache to store words from wordDict
  let wordCache = {};
  //declare an empty string
  let newStr = '';
  //declare verdict; initialize at false
  let verdict = false;
  //iterate through wordDict and push words to cache
  wordDict.forEach (word => {
    if (!wordCache[word]) wordCache[word] = true
  });
  //iterate through string
    //add letter to empty string
    //if cache[newStr + s[i+1]] is true
      //continue
    //if cache[newstr] is true
      //set newStr to empty
    //if i = string length and current newStr is in cache, return true
    //if i = string length and newStr = empty, return true
  for (let i = 0; i < s.length; i++) {
    newStr += s[i];
    if (wordCache[newStr + s[i+1]]) {
     continue
    };
    if (wordCache[newStr]) {
      newStr = ''
    };
    if (i === s.length-1 && wordCache[newStr]) verdict = true;
    if (i === s.length-1 && newStr === '') verdict = true;
  };
  //return false
  return verdict
};

console.log(wordBreak("leetcode", ["leet", "code"])); //expect true
console.log(wordBreak("applepenapple", ["apple", "pen"])); //expect true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); //expect false
console.log(wordBreak("aaaaaaa", ['aaaa', 'aaa'])); // expect true
console.log(wordBreak("cars", ["car", "ca", "rs"])); //expect true