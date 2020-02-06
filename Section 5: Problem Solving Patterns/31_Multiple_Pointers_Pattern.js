/*
  Implement a function called countUniqueValues which accepts a sorted array
  and counts the unique values in the array
  (actually it counts all the values minus the repeated ones).
  There can be negative numbers in the array but it will always be sorted
*/

function countUniqueValues(arr) {

  // make two pointers for the first and next position
  let p1 = 0;
  let p2 = 1;

  // make an array to store the values we find
  // or use a counter integer variable to keep space complexity O(1) / constant
  let uniqueVal = [];

  if (arr.length) {
    // push the first value in the array
    uniqueVal.push(arr[p1]);
  } else {
    return 0;
  }

  while (p2 < arr.length) {
    // if the pointed values are equal, shift p2 forward one step
    if (arr[p1] === arr[p2]) {
      p2++;
    } else {
      // if the pointed values are not equal,
      // store the value and shift p1 to p2 and p2 forward one step
      uniqueVal.push(arr[p2]);
      p1 = p2;
      p2++;
    }
  }

  // return the length of the new array
  return uniqueVal.length;

}

console.log(countUniqueValues([ 1, 1, 1, 1, 1, 2 ]));
console.log(countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([ -2, -1, 0, 1 ]));