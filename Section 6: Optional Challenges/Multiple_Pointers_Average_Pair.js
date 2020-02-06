/**
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array
 * where the average of the pair equals the target average.
 * There may be more than one pair that matches the target average.
 */

function averagePair(arr, avg) {
  // create two vars for left and right indices, 0 and arr.length - 1
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  // while the absolute difference between left and right is greater than 1
  while ((rightPtr - leftPtr) > 0) {
    // calculate the average of the values in the array at the given indices
    let calculatedAvg = (arr[rightPtr] + arr[leftPtr]) / 2;
    // if the calculated average is equal to avg, return true
    if (calculatedAvg === avg) {
      return true;
    }
    // if the calculated average is less than avg, move the left index higher
    if (calculatedAvg < avg) {
      leftPtr++;
    }
    // if the calculated average is greater than avg, move the right index lower
    if (calculatedAvg > avg) {
      rightPtr--;
    }
  }
  // return false
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// Teacher Solution
function averagePair2(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}