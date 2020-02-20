/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse
 */

function reverse(str) {
  if (str === '') return '';
  return str[str.length - 1] + reverse(str.slice(0, -1));
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'

// Teacher's solution
function reverse2(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}