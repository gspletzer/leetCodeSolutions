/*
Given a non-empty array of decimal digits representing a non-negative 
integer, increment one to the integer.

The digits are stored such that the most significant digit 
is at the head of the list, and each element in the array contains 
a single digit.

You may assume the integer does not contain any leading zero, 
except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: digits = [0]
Output: [1]

Constraints:
1 <= digits.length <= 100
0 <= digits[i] <= 9
*/

const plusOne = digits => {
    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        }
        else {
            digits[i] += 1;
            return digits
        }
    };
    if (digits[0] === 0) {
        digits.unshift(1);
        return digits
    }
};

console.log(plusOne([1,2,3])); //expect [1,2,4]
console.log(plusOne([4, 3, 2, 1])); //expect [4,3,2,2]
console.log(plusOne([0])); //expect [1]
console.log(plusOne([9, 9])); //expect[1, 0, 0]

/*
ALTERNATE SOLUTION:
var plusOne = function(digits) {
    let expand=false;
    for (let i=digits.length-1;i>=0;i--){
        if(digits[i]===9){
            digits[i]=0;
            if(i===0) expand = true;
            continue;
        }
        else{
            digits[i]++;
            break
        }
        
    }
    if(expand){
        digits=[1,...digits]
    }
    return digits;
};
*/

