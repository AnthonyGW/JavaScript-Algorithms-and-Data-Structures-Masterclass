/**
 * Write a function called minSubarrayLen which accepts two parameters,
 * an array of positive integers and a positive integer.
 * This function should return the minimum length of a contiguous subarray
 * of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

function minSubArrayLen(arr, minSum) {
  // get the sum of every item in the array
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
  }
  // if the sum of the numbers is less than the minSum, return 0
  if (tempSum < minSum) return 0;
  // store pointers to the left and right of the window
  let leftPtr = 0;
  let rightPtr = arr.length - 1;
  // while the minlength of the subarray is positive,
  for (let minLength = arr.length; minLength > 0; minLength--) { 
    // subtract the smaller number from either end of the subarray
    if (arr[leftPtr] > arr[rightPtr]) {
      tempSum -= arr[rightPtr];
      rightPtr -= 1;
    } else if (arr[rightPtr] > arr[leftPtr]) {
      tempSum -= arr[leftPtr];
      leftPtr += 1;
    } else {
      // in case of matching values:
      if (arr[leftPtr + 1] > arr[rightPtr - 1]) {
        tempSum -= arr[rightPtr];
        rightPtr -= 1;
      } else {
        tempSum -= arr[leftPtr];
        leftPtr += 1;
      }
    }
    // if the tempSum is smaller than the minSum,
    // return the minimum length of the subArray
    if (tempSum < minSum) {
      return minLength;
    }
  }
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because 62 is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)); // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)); // 0

// Teacher's solution
function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}


function minSubArrayLen3(arr, minSum) {
  // if the sum of the elements in the array is less than minSum, return 0
  // slide the window from left to right
  // if the sum of elements in the window is less than the minSum,
    // add the next element in the array to the window
  // else if the sum of the elements in the window is equal to the minSum
    // return the length of the window
  // else
    // subtract the lower number from either end of the window to make the window smaller
    // if the sum of elements in the window is smaller than minSum, return the previous window size
}

// Understanding the teacher's solution
function minSubArrayLen4(arr, minSum) {
  // we're constantly opening the window towards the right of the array
  // with each element we open the window to on the right, we keep a score of the lowest size of the window that gives us a sum bigger than or equal to minSum
  // if the total score of the elements the window is open to is higher than minSum, we close the window on the elements on the left
  // the loop stops when the left end of the window has reached the end of the array and we return the smallest window size
}