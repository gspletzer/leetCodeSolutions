/*Given an array of integers. Find a peak element in it. An array element is a peak if it is NOT smaller than its neighbours. For corner elements, we need to consider only one neighbour.
Example:

Input: array[]= {5, 10, 20, 15}
Output: 20
The element 20 has neighbours 10 and 15,
both of them are less than 20.

Input: array[] = {10, 20, 15, 2, 23, 90, 67}
Output: 20 or 90
The element 20 has neighbours 10 and 15, 
both of them are less than 20, similarly 90 has neighbous 23 and 67.
Following corner cases give better idea about the problem.

If input array is sorted in strictly increasing order, the last element is always a peak element. For example, 50 is peak element in {10, 20, 30, 40, 50}.
If the input array is sorted in strictly decreasing order, the first element is always a peak element. 100 is the peak element in {100, 80, 60, 50, 20}.
If all elements of input array are same, every element is a peak element.
*/

const findPeakElement = (arr) => {
  //declare a variable to hold peak elements; will return as an array?
  let peaks = [];

  //use forEach with element and index arguments to iteration through array
  arr.forEach((el, index) => {
    //if index 0, only check index +1 spot
    //push element if it is greater than element at index +1
    if (index === 0 && el > arr[index + 1]) peaks.push(el);
    //if index is equal to array.lenth-1, only check index-1 spot
    //push element if it is greater than element at index -1
    else if (index === arr.length - 1 && el > arr[index - 1]) peaks.push(el);
    //else check if element is greater than index-1 and index+1
    //if yes, push element
    else if (el > arr[index - 1] && el > arr[index + 1]) peaks.push(el);
  });

  //if the length of peaks is greater than zero, it means peak elements were found so return peaks array
  // else return the first element in the original array because all elements are the same value and considered peaks per edge case in prompt
  return peaks.length > 0 ? peaks : arr[0];
};

const nums = [5, 10, 20, 15];
const nums2 = [10, 20, 15, 2, 23, 90, 67];
const nums3 = [67, 20, 15, 2, 23, 90, 10];
const nums4 = [10, 20, 30, 40, 50];
const nums5 = [100, 80, 60, 50, 20];
const nums6 = [10, 10, 10, 10];

console.log(findPeakElement(nums));
console.log(findPeakElement(nums2));
console.log(findPeakElement(nums3));
console.log(findPeakElement(nums4));
console.log(findPeakElement(nums5));
console.log(findPeakElement(nums6));
