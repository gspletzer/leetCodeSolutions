/*
Given two integer arrays, see if any combination of two integers 
in the first array will equal a value in the second array.
 */

/* Initial brute force attempt */

function arraySum(inputs, tests) {
  //create an array of possible sums from inputs
  const possibleSums = [];
  //iterate through inputs to generate possible sums
  for (let i = 0; i < inputs.length; i++) {
    if (i === inputs.length-1) break;
    for (let j = i+1; j < inputs.length; j++) {
        possibleSums.push((inputs[i] + inputs[j]));
    }
  };
  //iterate through sums array and see if it is includes 
    //if true, return true
  for (let i = 0; i < possibleSums.length; i++) {
    const result = tests.includes(possibleSums[i]);
    if (result) return true;
  }
  //else return false
  return false;
};

/* Refactor to improve space complexity */
function arraySum2 (inputs, tests) {
  //iterate through the tests array
  for (let i = 0; i < tests.length; i++){
    //inner loop iterate through inputs
      //if inputs includes (tests[i]-inputs[j]) return true
    for (let j = 0; j < inputs.length-1; i++) {
      if (inputs.includes((tests[i]-inputs[j]))) return true
    };
  };
  //else return false
  return false
}

console.log(arraySum2([-1,8,3], [3,7,2])); //expect true
console.log(arraySum2([9,6,12], [1,2,3])); //expect false