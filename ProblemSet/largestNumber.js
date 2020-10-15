/* Given a list of non negative integers, arrange them such that they form the largest number */

/* Example: 1
Input: [10,2]
Output: "210"
*/

/* Example: 1
Input: [3, 30, 34, 5, 9]
Output: "9534330"
*/

const largestNum = (nums) => {
  //declare a cache to store groups numbers
  let cache = {};
  //declare an empty string to hold final largest number
  let largestN = '';
  //group in cache based on first number
  nums.forEach((num) => {
    const str = num.toString();
    if(!cache[str[0]]) cache[str[0]] = [str];
    else cache[str[0]].push(str)
  });
  //sort keys to determine order of returning values from cache to string
  const sorted = Object.keys(cache).sort((a,b) => b-a);
  //for each element of sorted keys array
    //if the length of value for that key is 1, add the value to the final string
    //else if key is 0, and the length of value is greater than 1, add all elements to final string
    //else if length at key is greater than 1, sort the value array
    //and then run reduce on sorted to return numbers in correct order
  sorted.forEach(num => {
    if (cache[num].length === 1) return largestN += cache[num][0];
    if (num === 0 && cache[num].length > 1) {
      return cache[num].forEach(el => largestN += el);
    }
    if (cache[num].length > 1) {
      const numSort = cache[num].sort((a, b) => b-a);
      console.log(numSort)
      let result = '';
      numSort.reduce((acc, curVal, index) => {
        if (index === numSort.length-1 && acc[acc.length-1] !== 0) {
          return result += (acc+curVal)
        } else if (index === numSort.length-1) {
          return result += (curVal+acc)
        }
        if (acc > curVal && acc[acc.length-1] !== 0) {
          result += acc;
          return curVal
        } else if (acc > curVal) {
          result += acc;
          return curVal;
        }
        else {
          result += curVal;
          return acc
        }        
      });
      return largestN += result
    }
  });
  return largestN
};

//console.log(largestNum([10,2]));//expect 210
console.log(largestNum([3, 34, 30, 5, 9, 300]));
console.log(largestNum([432, 43243]))//expect 43243432