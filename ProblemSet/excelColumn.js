/*
input: string; //'a', 'aa', 'ab'
output: corresponding number of the column based on label; // 1, 27, 28

initial questions: using only english alphabet? does capitalization count as a separate number, example A=1, a=2 or A and a = 1? time or space complexity considerations? can use native methods?

initial thoughts: if space complexity doesn't matter && capitalization doesn't create two different values, create a cache of letters and values
use for loop to iterate through the string to add to the return integer
*/

const excelColumnNumber = (string) => {
  //initialize result
  let result = 0;
  //initialize alphabet cache values
  const cache = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  //convert string to lower case for ease of cache access
  const lowString = string.toLowerCase();
  //iterate through input string; add value from cache to result
  for (let i = 0; i < string.length; i++) {
    if (i > 0) result += 25;
    result += cache[lowString[i]];
  }
  //return result integer
  return result;
};

console.log(excelColumnNumber("Aa"));
console.log(excelColumnNumber("A"));
console.log(excelColumnNumber("BB"));
console.log(excelColumnNumber("s"));
console.log(excelColumnNumber("AC"));
console.log(excelColumnNumber("Abc"));
