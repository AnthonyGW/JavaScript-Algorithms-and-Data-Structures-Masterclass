const merge = require("./Merge");

// Break up the array into halves
// until you have arrays that are empty or have one element.
//
// Once you have smaller sorted arrays,
// merge those arrays with other sorted arrays
// until you are back at the full length of the array.
//
// Once the array has been merged back together,
// return the merged (and sorted) array.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midPoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midPoint));
  const right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([1, 3 , 52, 35, 45, 6, 57, 23, 53, 45, 54, 34, 65, 67, 59, 68, 77]))