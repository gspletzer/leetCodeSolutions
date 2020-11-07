/*
Given a sorted input array (eg. [1, 4, 7, 9, 9, 9, 12, 15])
AND a target value (eg. 9)
Provide the start + end index of the location of the target value (eg. [3, 5])
If the value does not exist, return [-1, -1]
*/

const findTarget = (array, target) => {
  //declare a result array
  const result = [-1, -1];
  //iterate through the given array checking for the target
    //if the target is found and the result is empty, push the current index first and second element
    //if the result array has length of 2, update the second element to current index
    //if the result array exists but the element != target then return the result array
    //continue
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target && result[0] === -1) {
      result[0] = i;
      result[1] = i;
    }
    else if (array[i] === target) {
      result[1] = i
    }
    else if (array[i] !== target && result[0] > -1) {
      return result
    }
    else continue
  }
  //if the result array length is 2, return the array otherwise return -1
  return result
}