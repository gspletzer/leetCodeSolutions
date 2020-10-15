/**
 * Given a number n, print all the prime numbers that are in the
 * first n Fibonacci numbers
 * ex. input: n = 6 ; integer
 * ex. output: [2, 3, 5] ; array of prime fibonacci numbers that would lead up to that given point in the fibonacci sequence
 */

const returnPrimes2 = (n) => {
  if (n < 3) return "No prime numbers";
  //declare an empty result array
  let result = [];
  //variables to store two preceding fib numbers; initialize at 1 each for fib@2
  let spot1 = 1;
  let spot2 = 1;

  //use for loop to check all numbers between 2 and n (not including n)
  //use helper isPrime function to determine if number should be pushed to result array
  for (let i = 2; i < n; i++) {
    const sum = spot1 + spot2;
    spot1 = spot2;
    spot2 = sum;
    if (isPrime(sum)) {
      result.push(sum);
    }
  }
  //return the result array
  return result;
};
//helper function to determine is prime
//return true if num is 2 or 3;
//return false if any number greater than 3 equals zero when %x
//else return true
const isPrime = (num) => {
  if (num === 2 || num === 3) return true;
  for (let x = 2; x < num; x++) {
    if (num % x === 0) return false;
  }
  return true;
};

console.log(returnPrimes2(6));
console.log(returnPrimes2(37));
console.log(returnPrimes2(1));
console.log(returnPrimes2(2));
console.log(returnPrimes2(3));
console.log(returnPrimes2(7));
