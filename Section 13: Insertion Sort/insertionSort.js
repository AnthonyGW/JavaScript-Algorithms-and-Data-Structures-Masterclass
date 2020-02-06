// pick the second element in the array
// compare the second element with the one before it
// swap if necessary
// continue to the next element,
// if it is in the correct order,
// iterate through the sorted left portion to place the element in the correct place
// repeat until the array is sorted

function insertionSort(arr) {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentElem = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentElem; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentElem;
  }
  return arr;
}

console.log(insertionSort([5, 2, 55, 6, 32, 46, 7, 64, 23, 7]));