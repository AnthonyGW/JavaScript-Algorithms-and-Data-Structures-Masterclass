/**
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 */

function productOfArray(arr) {
  // if (arr.length === 0) return 0;
  // function helperFunction(input, ptr=0)
    // if ptr has reached the end of the array, return 1
    // multiply input[ptr] by helperFunction(input, ptr + 1)
  function helperFunction(helperInput, ptr = 0) {
    if(ptr === arr.length - 1) return helperInput[ptr] || 1;
    return helperInput[ptr] * helperFunction(helperInput, ptr + 1)
  }
  return helperFunction(arr);
}

function productOfArray2(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1)); // Can use either splice or slice, but NEVER use splice! It mutates the input array!
}

console.log(productOfArray2([1, 2, 3])); // 6
console.log(productOfArray2([1, 2, 3, 10])); // 60
console.log(productOfArray2([-6])); // -6

// Teacher's solution
function productOfArray3(arr) {
  if(arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray3(arr.slice(1));
}