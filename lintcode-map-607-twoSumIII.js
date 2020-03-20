/*
Design and implement a TwoSum class. It should support the following operations: add and find.

add - Add the number to an internal data structure.
find - Find if there exists any pair of numbers which sum is equal to the value.
*/

/**
 * @param number: An integer
 * @return:
 */
const array = [];
const map = {};
const add = function(number) {
  // write your code here
  if (array.length > 0) {
    array.forEach(ele => {
      map[ele + number] = true;
    });
  }
  array.push(number);
};

/**
 * @param value: An integer
 * @return: Find if there exists any pair of numbers which sum is equal to the value.
 */
const find = function(value) {
  // write your code here
  return map[value] === true;
};
