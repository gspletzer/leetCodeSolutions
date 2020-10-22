/*
We are given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction 
(positive meaning right, negative meaning left). 
Each asteroid moves at the same speed.
Find out the state of the asteroids after all collisions. 
If two asteroids meet, the smaller one will explode. 
If both are the same size, both will explode. 
Two asteroids moving in the same direction will never meet.

EXAMPLE 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

EXAMPLE 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

EXAMPLE 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

EXAMPLE 4:
Input: asteroids = [-2,-1,1,2]
Output: [-2,-1,1,2]
Explanation: The -2 and -1 are moving left, while the 1 and 2 are moving right. 
Asteroids moving the same direction never meet, so no asteroids will meet each other.

Constraints:

1 <= asteroids <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0
*/

const collision = (asteroids) => {
  //initialize a result array
  const result = [];
  //declare variable to store previous direction; initialize at left
  let previousDirection = 'left';
  //declare right direction array; initialize as empty
  const rightArray = [];
  //iterate through asteroids
  for (let i = 0; i < asteroids.length; i++){
    let currentDirection;
    //find current direction
    if (asteroids[i] < 0) currentDirection = 'left';
    if (asteroids[i] > 0) currentDirection = 'right';
    //if current direction is right, unshift value into the right direction array
    if (currentDirection === 'right') rightArray.unshift(asteroids[i]);
    //if current direction and previous direction are left and right direction array is empty, push element to result array
    if (currentDirection === 'left' && previousDirection === 'left' && rightArray.length === 0) result.push(asteroids[i]);
    //if current direction is left and previous direction is right and right direction array is not empty, compare asteroid to the first element in right direction array
    if (currentDirection === 'left' && previousDirection === 'right') {
      
    }
    // use helper function
    //return: if right direction array is not empty after iteration finishes, concat that array to the result array, otherwise just return result array
  }
    
  }
      
const compareAsteroids = (leftAsteroid, rightArray) => {
  //if current element is larger than right direction element, shift that element out of direction array
    //and continue to iterate until either the opposite element is larger or the opposite direction array is empty
    //if opposite direction element is larger
  };

