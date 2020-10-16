/*
You're given an array of non-negative integers where each non-zero represents the height of a pillar of width 1. 
Imagine water being poured over all the pillars;
Write a function that returns the surface area of the water trapped between the pillars viewed from the front.
Note that spilled water should be ignored.

Example: 
heights = [0,8,0,0,5,0,0,10,0,0,1,1,0,3]
output: 48
 */

const waterAreaII = (pillars) => {
  const leftDif = [];
  const rightDif = [];
  let area = 0;
  //iterate through pillars array to find max values in one direction;
  pillars.forEach((el, i) => {
    if (leftDif.length === 0) leftDif.push(el);
    else if (el > leftDif[i-1]) leftDif.push(el);
    else leftDif.push(leftDif[i-1])
  });
  //iterate backwards through pillars array to find maxium values in that direction
  for (let i = pillars.length-1; i >= 0; i--) {
    if(rightDif.length === 0) rightDif.push(pillars[i]);
    else if (pillars[i] > rightDif[0]) rightDif.unshift(pillars[i]);
    else rightDif.unshift(rightDif[0]);
  };
  //then iterate through pillars array and add min from left vs right - the pillar value to area
  for (let i = 0; i < pillars.length; i++) {
    area += (Math.min(leftDif[i], rightDif[i]) - pillars[i])
  };
  //return the water area
  return area
};

console.log(waterAreaII([0,8,0,0,5,0,0,10,0,0,1,1,0,3]));//expect 48