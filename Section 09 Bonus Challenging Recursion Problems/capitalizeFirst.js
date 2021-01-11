/**
 * Write a recursive function called capitalizeFirst.
 * Given an array of strings,
 * capitalize the first letter of each string in the array
 */

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let capitalized_word = capitalizeWord(arr[0]);
  let newArr = [];
  newArr.push(capitalized_word);
  
  if (arr.length > 1) {
    return newArr.concat(capitalizeFirst(arr.slice(1)));
  }
  
  return newArr;
}

function capitalizeWord(word) {
  return word.substr(0, 1).toUpperCase() +
    word.substr(1, word.length - 1);
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']