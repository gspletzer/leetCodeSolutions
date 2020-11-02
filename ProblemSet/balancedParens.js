/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

const balanceParens = (string) => {
  //create a stack for holding result of string iteration
  const stack = [];
  //build a cache for checking counter part
  const cache = {
    ')' : '(',
    ']' : '[',
    '}' : '{', 
  };
  //iterate through string
    //if element is in cache
      //check if last element in stack matches value of that cache key
      //if yes, pop off stack
    //if element isn't in cache, push it to the stack
  for (let i = 0; i < string.length; i++) {
    if (cache.hasOwnProperty(string[i])) {
      if (cache[string[i]] === stack[stack.length-1]) stack.pop();
      else return false;
    }
    else stack.push(string[i])
  };
  //if stack is empty, return true else false
  return stack.length < 1? true : false
};

console.log(balanceParens("()")); //expect true
console.log(balanceParens("()[]{}")); //expect true
console.log(balanceParens("(]")); //expect false
console.log(balanceParens("([)]")); //expect false
console.log(balanceParens("{[]}")); //expect true
