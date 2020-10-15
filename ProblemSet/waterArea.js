/*
You're given an array of non-negative integers where each non-zero represents the height of a pillar of width 1. 
Imagine water being poured over all the pillars;
Write a function that returns the surface area of the water trapped between the pillars viewed from the front.
Note that spilled water should be ignored.

Example: 
heights = [0,8,0,0,5,0,0,10,0,0,1,1,0,3]
output: 48
 */

const waterArea = (heights) => {
  //use left and right index pointers to solve for area as you move left and right. stops when pointers are same index
  //hold last left and right integer, with indices
  //initialize area as zero
  let lIndex = 0;
  let rIndex = heights.length-1;
  let lMax = [0, 0];
  let rMax = [0, 0];
  let area = 0;

  //move pointers until both have integer greater than zero. calculate the area based on difference of index and smaller value
  //once area has value, move whichever is smaller in the appropriate direction. 
  //if a non zero integer is encountered, that is smaller than current pointer value, subtract that from the area.
  //if the non zero integer is greater than previous value, find difference between current last value  and smaller of (other last value, current value)
    // multiply that number by the difference in indices between current location and other last value then reset last value to current value
  while(lIndex !== rIndex) {
    if (heights[lIndex] > 0 && heights[lIndex] > lMax[0]) {
      lMax = [heights[lIndex], lIndex]
    };
    if (heights[rIndex] > 0 && heights[rIndex] > rMax[0]) {
      rMax = [heights[rMax], rIndex] 
    };
    if (lMax[0] > 0 && rMax[0] > 0) {
      let newArea = 0;
      if (lMax[0] > rMax[0]) {
        newArea = ((rMax[1]-lMax[1]) * rMax[0];
        
      } else {
        newArea = (rMax[1]-lMax[1]) * lMax[0]
      }
    };
    if (heights[lIndex] > 0 && heights[lIndex] < lMax[0]) {

    }
  }
  //return the area
}