/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words,
 * return a new array containing each word capitalized.
 */

function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  newArr.push(arr[0].toUpperCase());
  
  if (arr.length > 1) {
    return newArr.concat(capitalizeWords(arr.slice(1)));
  }
  
  return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']