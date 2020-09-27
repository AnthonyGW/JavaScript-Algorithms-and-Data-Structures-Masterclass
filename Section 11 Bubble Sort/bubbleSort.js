// for each element in the array,
  // go through all the elements
    // if the the current element is bigger than the next element,
      // swap the two
// return the array
// Optional optimization:
// you can have a variable keep track of whether there was a swap
// if not, break the outer loop and return the array
function swap(arr, ind1, ind2) {
  const temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 3, 5, 2, 5, 13, 5, 6]));

// Teacher's solution
function bubbleSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function bubbleSort3(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// if a pass runs without swapping anything,
// return because the array is sorted
function bubbleSort4(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}