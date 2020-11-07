/*
Given a string of brackets (eg. {}, [], ())
Return a true/false on whether the string has a "balanced" set of brackets.
“{ } [ ( ) ]” > true
“{ { { } ] }” > false
“{ } ( ) [ ]” > true
“( ) [ [ ]” > false
( ( [ ) ] ) > false
 Input: string array
Output: boolean
*/

const balanced = (string) => {
  //cache key closing bracket, value opening bracket
  const cache = {
  '}' : '{',
  ']' : '[',
  ')' : '('
  };
  //declare stack for opening brackets
  const stack = [];
  //iterate through the string
    //if the element is in the cache, compare the value to the last element in the stack
      //if that matches, pop it off
      //else return false
    //if the element isn't the cache, push it to the stack
  for (let i = 0; i < string.length; i++) {
    if (cache.hasOwnProperty(string[i])) {
      if (cache[string[i]] === stack[stack.length-1]) stack.pop();
      else return false
    }
    else stack.push(string[i])
  }
  //if the stack is empty return true, else false
  return stack.length === 0
}



























