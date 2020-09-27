/**
 * getDigit: Returns the digit in num at the given place value.
 * digitCount: Returns the number of digits in num.
 * mostDigits: Given an array of numbers, returns the number of digits in the largest number in the list.
 */

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

module.exports = { getDigit, digitCount, mostDigits };