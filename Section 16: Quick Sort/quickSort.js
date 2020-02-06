
const pivot = require("./pivot");

// Call the pivot helper on the array
// When the helper returns the new pivotIndex,
// call quicksort on the subarray to the left of that index,
// and the subarray to the right of that index.
function quickSort(arr, left=0, right=arr.length-1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([12, 4, 54, 67, 23, 85, 51, 14, 25, 17]));