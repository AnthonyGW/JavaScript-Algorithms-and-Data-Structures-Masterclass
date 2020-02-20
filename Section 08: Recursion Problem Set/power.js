/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * The function should mimic the functionality of Math.pow()
 * Do not worry about negative bases or exponents.
 */

function power(base, exp) {
  // if the base is multiplied by 0, return 1
  if (exp === 0) return 1;

  // multiply the base by itself with the exponent reduced by 1
  return base * power(base, exp - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

// Teacher's solution
function power2(base, exponent){
  if(exponent === 0) return 1;
  return base * power2(base,exponent-1);
}