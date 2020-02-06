/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a subsequence
 * of the characters in the second string.
 * In other words, the function should check whether the characters in the first string
 * appear somewhere in the second string without their order changing.
 * Time Complexity O(N+M)
 * Space Complexity O(1)
 */

function isSubsequence(str1, str2) {
  // create a pointer for str1 and str2
  let str1Ptr = 0;
  let str2Ptr = 0;
  // while the str2 pointer has not reached the end of str2
  while (str2Ptr < str2.length) {
    // if the str2 pointer is on the same char of str2 as the str1 pointer on str1
    if (str2[str2Ptr] === str1[str1Ptr]) {
      // set the str1Ptr to the next character on str1
      str1Ptr++;
    }
    // if the subsequence string is done, return true
    if (str1Ptr === str1.length) return true;
    // move the right pointer to the right
    str2Ptr++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
console.log(isSubsequence('', 'acb')); // true
console.log(isSubsequence('abc', '')); // false

// Teacher's Solution
function isSubsequence2(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// Teacher's Solution with Recursion
function isSubsequence3(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
