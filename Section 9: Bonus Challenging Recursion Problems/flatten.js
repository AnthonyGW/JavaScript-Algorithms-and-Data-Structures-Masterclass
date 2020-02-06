/**
 * Write a recursive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened
 */

function flatten(inp) {
	function helperFunction(arr, count = 0) {
		// if the first element of the input is not an array
		if (!Array.isArray(arr[count])) {
			// else, new input is the first element of the input
			return helperFunction(arr, count + 1);
		} else {
			// splice it into the slot of the input
			arr = arr.splice(count, 1, ...arr[count]);
			return helperFunction(arr, count + 1);
		}
	}
	return helperFunction(inp);
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]







// Teacher's solution
function flatten2(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}