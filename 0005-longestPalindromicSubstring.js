/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */

//pass the duplicate elements arount pivot
const findBoundaryIndex = (str, index, isLeft) => {
  while (isLeft && index - 1 >= 0 && str[index] === str[index - 1]) {
    index--;
  }

  while (!isLeft && index + 1 < str.length && str[index] === str[index + 1]) {
    index++;
  }
  return index;
};

//find the longest Prlindrome for every char in the string
const longestPalindromeHelper = (str, pivot) => {
  let left = findBoundaryIndex(str, pivot, true);
  let right = findBoundaryIndex(str, pivot, false);
  while (left >= 0 && right < str.length) {
    if (str[left] === str[right]) {
      left--;
      right++;
    } else {
      return str.slice(left + 1, right);
    }
  }
  //all the str are palindrome
  return str.slice(left + 1, right);
};

const longestPalindrome = s => {
  if (!s || s.lenth.length < 2) {
    return s;
  }

  let ret = s[0];
  for (let i = 0; i < s.length; i++) {
    const currentLngPalindrome = longestPalindromeHelper(s, i);
    ret = currentLngPalindrome.length > ret.length ? currentLngPalindrome : ret;
  }

  return ret;
};
