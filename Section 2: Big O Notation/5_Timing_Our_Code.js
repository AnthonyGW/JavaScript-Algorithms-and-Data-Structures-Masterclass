/* 
  Write a function that calculates the sum
  of all numbers from 1 up to (and including)
  some number n.
*/

const timeElapsed = require('../Helpers/Timing');

function addUpTo_1(n) {
  let total = 0;
  for(i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(
  `1: Time Elapsed: ${timeElapsed(addUpTo_1, 1000000000)} seconds.`
);

function addUpTo_2(n) {
  return n * (n + 1) / 2;
}

console.log(
  `2: Time Elapsed: ${timeElapsed(addUpTo_2, 1000000000)} seconds.`
);