// Given two arrays which are sorted,
// create a new array which is also sorted,
// and consists of the elements in the two input arrays.
// This function should run in O(n + m) time and O(n + m) space
// 

const mergeArrays = (arr1, arr2) => {
  const arr = [];
  let ptr1 = 0;
  let ptr2 = 0;
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    if (arr1[ptr1] < arr2[ptr2]) {
      arr.push(arr1[ptr1]);
      ptr1++;
    } else {
      arr.push(arr2[ptr2]);
      ptr2++;
    }
  }
  while (ptr1 < arr1.length) {
    arr.push(arr1[ptr1]);
    ptr1++;
  }
  while (ptr2 < arr2.length) {
    arr.push(arr2[ptr2]);
    ptr2++;
  }
  return arr;
}

module.exports = mergeArrays;
