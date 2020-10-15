/*
Given a string value, find the corresponding column number value.
Ex: AA = 27, A=1, AB=28
*/

const columnValue = (string) => {
  //create a cache of the corresponding values for each alphabet letter
  const cache = {
    A:1,
    B:2,
    C:3,
    D:4,
    E:5,
    F:6,
    G:7,
    H:8,
    I:9, 
    J:10,
    K:11,
    L:12,
    M:13,
    N:14,
    O:15,
    P:16,
    Q:17,
    R:18,
    S:19,
    T:20,
    U:21,
    V:22,
    W:23,
    X:24,
    Y:25,
    Z:26
  };
  //variable to hold number value; initialize at zero
  let result = 0;
  //for loop to iterate through length of string
  for (let i = 0; i < string.length; i++){
    console.log(cache[string[i]])
    //add result of cachevalue * (26 to power of length-1-index) to result value
    result += (cache[string[i]] * (26**(string.length-1 - i)))
  };
  //return the result value
  return result
};
//in lieu of cache, use charCodeAt() and subtrace appropriate amount (in this case, 64) to get equivalent cache value; if characters will all be capitalized
//value would change if lower case values used.
console.log(columnValue('AA'));//expect 27
console.log(columnValue('AB'));//expect 28
console.log(columnValue('AAC'));//expect 705