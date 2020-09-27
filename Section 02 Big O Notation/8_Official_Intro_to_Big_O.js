
const timeElapsed = require('../Helpers/Timing');

function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}

let first = timeElapsed(countUpAndDown, 10);
let second = timeElapsed(countUpAndDown, 20);
let third = timeElapsed(countUpAndDown, 30);
let fourth = timeElapsed(countUpAndDown, 40);

console.log(
  `1: Time Elapsed: ${first} seconds.`
);

console.log(
  `2: Time Elapsed: ${second} seconds.`
);

console.log(
  `3: Time Elapsed: ${third} seconds.`
);

console.log(
  `4: Time Elapsed: ${fourth} seconds.`
);