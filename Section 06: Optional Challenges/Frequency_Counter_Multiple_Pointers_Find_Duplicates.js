/*
  Implement a function called areThereDuplicates which accepts a variable number of arguments
  and checks whether there are any duplicates among the arguments passed in.
  You can solve this using the frequency counter pattern or the multiple pointers pattern.
*/

function areThereDuplicates(...params) {
  // create an object to store counts of every parameter
  const freq_counter = {};
  // loop through the list of params
  for (let param of params) {
    // if a key that matches the param exists in the object, return true
    if (freq_counter[param]) {
      return true;
    }
    // else create a key with the param and set the value to 1
    freq_counter[param] = 1;
  }
  // return false
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Teacher's solution with Frequency Counter Pattern
function areThereDuplicates2() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

// Teacher's solution with Multiple Pointers Pattern
// After sorting the values, duplicate values would be next to each other in the array
// The two pointers that are next to each other will then catch duplicates
// Possibly assumes the arguments passed are homogenous?
function areThereDuplicates3(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

// Teacher's solution with One Liner
// The 'Set' data structure is an array without duplicates
// Creating a set eliminates duplicates
// If the size of a set is not the same as (smaller than) the original array, return true
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
