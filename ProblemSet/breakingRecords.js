/*
Given: array of scores return number of increases and number of decreases
that occur over the season.
Output: two integers (max min)

Maria plays college basketball and wants to go pro. 
Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record 
for most points and least points in a game. 
Points scored in the first game establish her record for the season, 
and she begins counting from there.

For example, assume her scores for the season are represented in the array
scores = [12,24,10,24].
Scores are in the same order as the games played. 
Output: 
1 1
*/

const recordBreaks = (scores) => {
  //declare max, min, maxCount and minCount variables
  let max = scores[0];
  let min = scores[0];
  let maxCount = 0;
  let minCount = 0;
  //iterate through the scores, start at second element
    //compare element to min, 
    //if less than min add one to min count and reset min to current element
    //compare element to max,
    //if more than max add one to max count and reset max to current element
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < min) {
      minCount += 1;
      min = scores[i];
    };
    if (scores[i] > max) {
      maxCount += 1;
      max = scores[i]
    };
  };
    //return max count and min count
  return `${maxCount} ${minCount}`
};

console.log(recordBreaks([12, 24, 10, 24])); //expect 1 1
console.log(recordBreaks([10, 5, 20, 20, 4, 5, 2, 25, 1]))