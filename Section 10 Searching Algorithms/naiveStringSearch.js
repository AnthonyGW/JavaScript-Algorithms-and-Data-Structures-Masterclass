// Define a function that takes a string and a pattern to search for
// Loop over the longer string
// Loop over the shorter string
// If the characters don't match, break out of the inner loop
// If the characters do match, keep going
// If you complete the inner loop and find a match,
// increment the count of matches
// Return the count

// Teacher's solution
function naiveSearch(str, pattern) {
  let matchesCount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) matchesCount++;
    }
  }
  return matchesCount;
}

console.log(naiveSearch("lorie loled", "lol"));