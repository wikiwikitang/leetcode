/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var ladderLength = function(beginWord, endWord, wordList) {
  const dict = new Set(wordList);
  let steps = 0;
  let curLevelQueue = [beginWord];
  let beginCharA = "a".charCodeAt();
  let endCharZ = "z".charCodeAt();
  while (curLevelQueue.length) {
    const nextLevelQueue = [];
    for (let word of curLevelQueue) {
      if (word === endWord) {
        return ++steps; //plese pay attention: return steps++ is not correct
        /*
        steps++
        return steps;
        */
      }
      //search for every possibility in th current word
      for (let i = 0; i < word.length; i++) {
        for (let ch = beginCharA; ch <= endCharZ; ch++) {
          //construct new word
          const newCandidateWord =
            word.slice(0, i) + String.fromCharCode(ch) + word.slice(i + 1);
          //if the candidate word is found in the dict
          if (dict.has(newCandidateWord)) {
            nextLevelQueue.push(newCandidateWord);
            dict.delete(newCandidateWord);
          }
        }
      }
    }
    //go to next level for searching
    steps++;
    curLevelQueue = nextLevelQueue;
  }
  //nothing found
  return 0;
};
