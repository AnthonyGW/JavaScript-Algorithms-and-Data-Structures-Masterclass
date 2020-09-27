/**
 * Write a function called binarySearch which accepts a sorted array and value
 * and returns the index at which the value exists. Otherwise return -1.
 */

// Pseudocode notes from the previous lecture:
// Accept a sorted array and a value
// Create a left pointer at the start of the array and
// a right pointer at the end of the array.
// While the left pointer comes before the right pointer,
  // Create a pointer in the middle.
  // If you find the value you want, return the index.
  // If the input value is smaller than the middle pointer's value,
    // move the left pointer up.
  // If the input value is larger than the middle pointer's value,
    // move the right pointer down.
// If you never find the value, return -1.

function binarySearch(arr, val) {
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  let midPtr = 0;
  while (leftPtr < rightPtr) {
    midPtr = (Math.ceil((rightPtr - leftPtr) / 2)) + leftPtr;
    if (arr[midPtr] === val) return midPtr;
    if (arr[midPtr] > val) rightPtr = midPtr;
    if (arr[midPtr] < val) leftPtr = midPtr;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16


// Teacher's solution
function binarySearch2(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (rr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}
