/**
 * Given an array of integers and a number,
 * write a function called maxSubarraySum
 * which finds the maximum sum of a subarray
 * with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array.
 * In the first example, [100, 200, 300] is a subarray of the original array
 * but [100, 300] is not.
 */

function maxSubarraySum(arr, range) {
  // if the range is greater than the array length
  if (range > arr.length) {
    // return null
    return null;
  }
  // create a var to hold the current maximum sum and a temporary sum
  let maxSum = 0;
  let tempSum = 0;
  // loop through the items in the range
  for (let i = 0; i < range; i++) {
    // get the sum and store it in the maximum sum var
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // while the range limit has not yet reached the end of the array
  for (let i = range; i < arr.length; i++) {
    // subtract the previous number and add the next number,
    // store it as the temporary sum
    tempSum = tempSum - arr[i - range] + arr[i];
    // if the temporary sum is bigger than the maximum sum
    if (tempSum > maxSum) {
      // replace the maximum sum with the temporary sum
      maxSum = tempSum;
    }
  }
  // return the maximum sum
  return maxSum;
}

console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20,4], 2)); // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null

// Teacher's solution
function maxSubarraySum2(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}