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
    if (str[left] !== str[right]) {
      break;
    }
    left--;
    right++;
  }

  return {
    left: left + 1,
    right: right - 1,
    curPalinDromeLength: right - left - 1
  };
};

const longestPalindrome = s => {
  if (!s || s.length < 2) {
    return s;
  }

  let palinDromeLength = 1,
    begin = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    const { left, right, curPalinDromeLength } = longestPalindromeHelper(s, i);
    if (curPalinDromeLength > palinDromeLength) {
      palinDromeLength = curPalinDromeLength;
      begin = left;
      end = right;
    }
  }

  return s.slice(begin, end + 1);
};
