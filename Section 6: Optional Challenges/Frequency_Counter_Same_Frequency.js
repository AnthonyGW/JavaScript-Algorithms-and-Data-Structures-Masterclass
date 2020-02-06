/*
Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(x, y){
  // Check if both integers are equal, if so return true.
  // *(flaky as s**t) Convert the integers to strings, loop through the first string parameter, if a character does not
  // appear in the second string parameter, return false.
  let firstFreqCount = {}
  const strX = x.toString()
  for (let i = 0; i < strX.length; i++) {
    if (firstFreqCount[strX[i]]) {
      firstFreqCount[strX[i]]++;
    } else {
      firstFreqCount[strX[i]] = 1;
    }
  }
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false











function sameFrequency2(x, y) {
  // convert to string
  const str_x = x.toString();
  const str_y = y.toString();
  // if string lengths are not equal, return false
  if (str_x.length !== str_y.length) return false;
  // create an object to store the frequency count of the first string
  const counter_x = {};
  // loop through the first string's characters
  for (let char of str_x) {
    // if there is no key in the object matching the character, initialise the count
    // if there is a key matching the character, increase the count by 1
    counter_x[char] = ++counter_x[char] || 1;
  }
  // loop through the second string's characters
  for (let char of str_y) {
    // if there is no matching key in the object for the character or its value is zero, return false
    if (!counter_x[char]) return false;
    // if there is a matching key for the character, reduce it's corresponding value by 1
    counter_x[char]--;
  }
  // return true
  return true;
}

console.log(sameFrequency2(182, 281)); // true
console.log(sameFrequency2(34, 14)); // false
console.log(sameFrequency2(3589578, 5879385)); // true
console.log(sameFrequency2(22, 222)); // false

// Teacher's solution
function sameFrequency3(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}