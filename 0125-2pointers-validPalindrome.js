/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
  if (!s || s.length === 0) {
    return true;
  }

  let begin = 0;
  let end = s.length - 1;
  const lowerCaseString = s.trim().toLowerCase();
  const isValidChar = ch => {
    return (ch >= "0" && ch <= "9") || (ch >= "a" && ch <= "z");
  };

  while (begin < end) {
    if (!isValidChar(lowerCaseString[begin])) {
      begin++;
      continue;
    }

    if (!isValidChar(lowerCaseString[end])) {
      end--;
      continue;
    }

    if (lowerCaseString[begin] !== lowerCaseString[end]) {
      return false;
    }
    begin++;
    end--;
  }

  return true;
};

/**************************Solution 2***************************/

const isPalindrome = function(s) {
  const a = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return (
    a ===
    a
      .split("")
      .reverse()
      .join("")
  );
};
