// create a variable to keep track of the smallest element
// loop through the array
  // set the current element as the smallest
  // go through the elements succeeding the current smallest
    // if we find an element that is smaller than the current smallest
      // set the current element as the new smallest
  // if the current element is not the current smallest,
    // swap the two
// return the array

function selectionSort(arr) {
  // set elem 0 as min
  // go through the array
    // if we encounter a smaller elem than the min
      // swap the two elems
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([1, 4, 5, 63, 23, 55, 66, 22, 12]));