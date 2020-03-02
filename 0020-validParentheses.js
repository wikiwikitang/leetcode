/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

var isValid = function(s) {
  if (s.length === 0) {
    return true;
  }

  if (!s || s.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (stack.length === 0) {
          return false;
        }
        const ele = stack.pop();
        if (ele !== s[i]) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
