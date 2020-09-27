/**
 * Write a function factorial which accepts a number
 * and returns the factorial of that number.
 * A factorial is the product of an integer,
 * and all the integers below it.
 * e.g factorial four (4!) is equal to 24,
 * because 4 * 3 * 2 * 1 equals 24.
 * Factorial zero (0!) is always 1.
 */

function factorial(num) {
  // if num is zero, return 1
  if (num === 0) return 1;
  // return num * factorial of num - 1
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 504

// Teacher's solution
function factorial2(x){
  if (x < 0 ) return 0;
  if (x <= 1 ) return 1;
  return x * factorial2(x-1);
}