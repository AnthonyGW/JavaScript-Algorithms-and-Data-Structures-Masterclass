/**
 * The runtime of quick sort depends in part on the selected pivot.
 * Ideally the pivot should be chosen so that it's roughly the median value in the data set to be sorted.
 */

// It will help to accept three arguments,
// an array, a start index and an end index.
// These can default to zero and the array length - 1 respectively.
// Grab the pivot from the start of the array.
// Store the current pivot index in a variable
// (this will keep track of where the pivot should end up).
// Loop through the array from start to end
  // If the pivot is greater than the current element,
    // increment the pivot index variable
// Swap the current element with the element at the pivot index.
// Return the pivot index.
function pivot(arr, start=0) {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}

module.exports = pivot;