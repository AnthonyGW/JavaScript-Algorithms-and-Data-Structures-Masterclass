/**
 * Write a recursive function called fib which accepts a number and
 * returns the n-th number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers,
 * 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where
 * every number thereafter is equal to the sum of the previous two numbers. 
 */

function fib(pos) {
  // store the initial/previous number in the sequence
  let previousNumber = 0;
  function helperFunction(num = 1, currentPosition = 1) {
    if (currentPosition === pos) return num;
    let olderNumber = previousNumber;
    // make the current number the previous number
    previousNumber = num;
    return helperFunction(olderNumber + previousNumber, currentPosition + 1);
  }
  return helperFunction();
}

console.log(fib(1)); // 1
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465

// Teacher's solution
function fib2(n){
  if (n <= 2) return 1;
  return fib2(n-1) + fib2(n-2);
}
