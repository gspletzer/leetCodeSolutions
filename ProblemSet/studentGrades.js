/*
HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range from 0 to 100.
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round 
each student's grade according to these rules:

If the difference between the grade and the next multiple of 5 
is less than 3, round grade up to the next multiple of 5.
If the value of grade is less than 38, 
no rounding occurs as the result will still be a failing grade.

Examples:
grade=84 round to 85 (85 - 84 is less than 3)
grade=29 do not round (result is less than 40)
grade=57 do not round (60 - 57 is 3 or higher)
Given the initial value of grade for each of Sam's n students, 
write code to automate the rounding process.

Function Description:

gradingStudents has the following parameter(s):
int grades[n]: the grades before rounding

Returns
int[n]: the grades after rounding as appropriate
Input Format (array)

The first line contains a single integer, n , the number of students.
Each line i of the n subsequent lines contains a single integer, grades[i].

Constraints
1<=n<=60;
0<=grades[i]<=100
*/

//assumes you cannot alter original array
function gradingStudents(grades) {
  //declare a new result array
  const adjustedGrades = [];
  //iterate through grades
      //if the value is less than equal to 37 or value%5 is less than or equal to two,            push value to result array
      //if the value%5 is greater than 2, add one until number%5 is zero, then push
  grades.forEach (el => {
      if (el <= 37 || el%5 <=2) adjustedGrades.push(el);
      else {
          if (el%5 === 3) adjustedGrades.push(el+2);
          if (el%5 === 4) adjustedGrades.push(el+1)
      };
  });
  //return the result array
  return adjustedGrades
}