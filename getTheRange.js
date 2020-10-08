/*
Given an array of unsorted integers, 
return an array that contains 
the low, high, and range (high-low) 
for the given array.
 */

function getTheRange(arr) {
  /*
  Declare high and low variables outside the for loop so that the current values
  will carry over into the next iteration.
  Initialize low at Infinity because the lowest value will always be less than Infinity.
  Initialize high at -Infinity because the highest value will always be greater than -Infinity.
   */
  let low = Infinity;
  let high = -Infinity;

  /* use forEach to iterate the array to determine low and high*/
  arr.forEach((el) => {
    low = Math.min(low, el);
    high = Math.max(high, el);
  });

  /* return the array of the necessary values: low, high, and range(high-low) */
  return [low, high, high - low];
}

console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); //expect [2, 10, 8]
