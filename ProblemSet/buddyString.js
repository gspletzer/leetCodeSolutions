/*
Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. 
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: A = "ab", B = "ba"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

Example 2:
Input: A = "ab", B = "ab"
Output: false
Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.

Example 3:
Input: A = "aa", B = "aa"
Output: true
Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.

Example 4:
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:
Input: A = "", B = "aa"
Output: false

Constraints:
0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist of lowercase letters.
*/

var buddyStrings = function(A, B) {
  // if lengths don't match, return false 
  if (A.length !== B.length) return false;
  // initialize two pointer variables to hold indices where values differ in A and B
  let pointer1, pointer2; 
  // initialize character count to track different characters in string
  let charCount = 0;
  //cache of characters
  const charCache ={};
  //for loop to add characters to cache, update charCount, and find differing indices
  for (let i =0; i < A.length; i++) {
    if (!charCache[A[i]]) {
      charCache[A[i]] = true;
      charCount +=1;
    };
    if (A[i] !== B[i] && pointer1 === undefined) pointer1=i;
    else if (A[i] !== B[i] && pointer2 === undefined) {
      pointer2=i;
      break
    }
    else continue
  };
  // if A and B are the same and charcount equals length, return false
    //means every character of the matching string is different
  if (A === B && charCount === A.length) return false;
  //initialize empty string to hold copy of A with with swapped values
  let copy = '';
  //for loop to generate copy string with swapped values
  for (let i =0; i < A.length; i++) {
    if (i === pointer1) copy += A[pointer2];
    else if (i === pointer2) copy += A[pointer1];
    else copy += A[i]
  };
  //check if copy equals B
  return copy === B
};

//change charCount to boolean; initialize as false, change to true when a character is already found in cache
//after first for loop, check if pointer1 is undefined, if yes, return answer of duplicate...otherwise proceed to copy

console.log(buddyStrings('ab', 'ba'));//expect true
console.log(buddyStrings('abcd', 'abcd'));// expect false
console.log(buddyStrings('', 'ab')); //expect false
console.log(buddyStrings('abc', 'abc'));// expect false
console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));// expect true
console.log(buddyStrings('aaabaaac', 'aaacaaab'));// expect true
console.log(buddyStrings('abcaa', 'abcbb'));//expect false