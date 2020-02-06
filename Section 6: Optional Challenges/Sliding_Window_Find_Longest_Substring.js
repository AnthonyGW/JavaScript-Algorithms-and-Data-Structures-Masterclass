/**
 * Write a function called findLongestSubstring which accepts a string
 * and returns the length of the longest substring with all distinct characters
 */

function findLongestSubstring3(str) {
  // create a window
  let start = 0;
  let end = 0;
  let charCounter = {};
  let maxLength = 0;
  // while the window's right pointer hasn't reached the end of the string
  while (end < str.length) {
    let endChar = str[end];
    // if a repeated char is found,
    if (charCounter[endChar]) {
      // check if the length of the substring is bigger than the previous biggest
      let tempLength = (end - 1) - start;
      maxLength = maxLength > tempLength ? maxLength : tempLength;
      // move the window's left pointer to after that previous occurrence of the char
      let startPtr = start;
      start = charCounter[endChar];
      // delete the chars in between
      for (let i = end; end > startPtr; end--) {
        delete charCounter[str[i]];
      }
    }
    // store the char and its index in the count
    charCounter[endChar] = end + 1;
    // stretch the window over the next char on the right
    end++;
  }
  // return the length of the window
  return maxLength;
}

function findLongestSubstring2(str) {
  // create a set
  // stretch the window to the right
  // create another set and compare to the previous set

  // if the new set is the same size as the old set,
  // move the beginning of the window to the point after the previous
  // instance of the repeated character

  // return the longest size of the set
}

function findLongestSubstring4(str) {
  // inchworm style
  if (!str) return 0;
  // start the head and legs on index 0 at index 0, maxLength = 1
  let legs = 0;
  let head = 0;
  let maxLength = 0;
  let charPosition = {};
  // before the worm has reached the end of the array
  while (head < str.length) {
    let headChar = str[head];
    let tempLength;
    // if a char is repeated,
    if (charPosition[headChar]) {
      // note the length stretched, compare with maxLength
      tempLength = head - legs;
      maxLength = maxLength > tempLength ? maxLength : tempLength;
      // move the 'legs' to the position after the repeated char
      console.log(headChar)
      legs = charPosition[headChar] + 1;
    }
    
    // console.log(legs, str[legs], str[head], head, tempLength, maxLength)
    // set the position of the char to match the head
    charPosition[headChar] = head;
    // stretch the 'head' towards the right
    head++;
    console.log(legs, str[legs], str[head - 1], head - 1, maxLength)
  }
  return maxLength;
}

function findLongestSubstring5(str) {
  let obj = {};
  let refStr = str.split('');
  let substr = [];
  let longestSubstr = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (obj[char] < i) {
      console.log('repeated', obj[char])
      console.log('new starting point', refStr[obj[char]])
      substr = refStr.slice(obj[char] + 1, i);
    }
    substr.push(char);
    console.log('substring', substr);
    longestSubstr = longestSubstr > substr.length ? longestSubstr : substr.length;
    obj[char] = i;
    console.log(obj)
  }
  return longestSubstr;
}



function findLongestSubstring(str) {
  let start = 0;
  let longestSubstr = 0;
  let charPosition = {};
  // move from left to right (must stop on the index after the string has ended to increase the count of longestSubstr)
  for (let end = 0; end <= str.length; end++) {
    let char = str[end];
    // check each character to see if it already exists
    // if the character exists in the record,
    if (charPosition[char] >= start) { // we use >= to account for the first character in the string which has index zero, and any characters that might have been recorded before the start pointer was shifted
      // console.log('repeated char', char)
      // console.log('start', start, end, 'end')
      // compare the length of the substring to the record
      longestSubstr = Math.max(longestSubstr, (end - start));
      // move the start pointer to the index after the previously existing character
      start = charPosition[char] + 1;
    } else {
      // compare the length of the substring to the record
      longestSubstr = Math.max(longestSubstr, (end - start));
    }
    // record the position of the character
    charPosition[char] = end;
    // console.log('new start', str[start], start, end, str[end], 'end')
    // console.log('longest substring', longestSubstr)
  }
  return longestSubstr;
}


console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
console.log(findLongestSubstring('inspiration')); // 7

// Teacher's solution
function findLongestSubstringTeach(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}