/*
  Given two strings, write a function to determine if the second string
  is an anagram of the first. An anagram is a word, phrase or name
  formed by rearranging the letters of another,
  such as 'cinema' formed from 'iceman'.
*/

/*
function validAnagram(str1, str2) {
  // make an object profile of the letters and numbers in str1
  const str_obj = {};
  for (let char of str1) {
    // ignore spaces
    if (char === ' ') {
      continue;
    }
    str_obj[char] = ++str_obj[char] || 1;
  }
  // loop over characters in str2
  for (let char of str2) {
    // ignore spaces
    if (char === ' ') {
      continue;
    }
    if (str_obj[char] === -1) {
      return false;
    }
    // if there is a character in str2 that matches a key in str1,
    // subtract the number in the corresponding key or delete it if 0
    str_obj[char] = str_obj[char] - 1;
    if (str_obj[char] <= 0) {
      delete str_obj[char];
    }
  }
  // if the object is empty, return true
  // else return false
  if ((Object.keys(str_obj)).length === 0) {
    return true;
  }
  return false;
}
*/

function validAnagram(str1, str2) {
  // assume the input is a single word/name in all lowercase
  // make an object profile of the letters and numbers in str1
  const str_obj = {};
  for (let char of str1) {
    str_obj[char] = ++str_obj[char] || 1;
  }

  // loop over characters in str2
  for (let char of str2) {
    
    // if there is no matching character, exit the loop
    if (str_obj[char] === -1) {
      return false;
    }

    // if there is a matching character, reduce the frequency by 1
    str_obj[char] = str_obj[char] - 1;

    // if the frequency is 0 or less, delete the key
    if (str_obj[char] <= 0) {
      delete str_obj[char];
    }
  }
  // if the object is empty, return true
  // else return false
  if ((Object.keys(str_obj)).length === 0) {
    return true;
  }
  return false;
}

console.log(validAnagram('tommarvoloriddle', 'iamlordvoldemort'));

function validAnagram2(str1, str2){
  // assume the input is a single word/name in all lowercase

  // if the strings don't match, return false
  if (str1.length !== str2.length) {
    return false;
  }
 
  // make an object profile of the letters and numbers in str1
  const str_obj = {};
  for (let char of str1) {
    str_obj[char] = ++str_obj[char] || 1;
  }

  // loop over characters in str2
  for (let char of str2) {
    
    // if there is no matching character, exit the loop
    if (str_obj[char] === -1) {
      return false;
    }

    // if there is a matching character, reduce the frequency by 1
    str_obj[char] = str_obj[char] - 1;

    // if the frequency is 0 or less, delete the key
    if (str_obj[char] <= 0) {
      delete str_obj[char];
    }
  }
  // if the object is empty, return true
  // else return false
  if ((Object.keys(str_obj)).length === 0) {
    return true;
  }
  return false;
}