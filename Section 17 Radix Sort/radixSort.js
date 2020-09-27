const getDigit = require("./helpers").getDigit;
const digitCount = require("./helpers").digitCount;
const mostDigits = require("./helpers").mostDigits;

// Figure out how many numbers the largest digit in the array has
// Loop from k = 0 up to this largest number of digits
  // Create buckets for each digit (0-9)
  // Place each number in the corresponding bucket based on its kth digit
  // Replace our existing array with the values in the buckets
// Return the array
function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([4, 123, 54, 46, 23, 55, 57, 678, 34, 21]))