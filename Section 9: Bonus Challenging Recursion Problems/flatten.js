/**
 * Write a recursive function called flatten which accepts an array of arrays
 * and returns a new array with all values flattened
 */

// Treat the nested arrays as a tree
// And perform a Depth First (PreOrder) Search
function flatten(inp) {
	const arr = [];
	function traverse(node) {
		if (!Array.isArray(node)) {
			// if we hit a 'leaf', add it to our array
			arr.push(node);
			return;
		}
		// else test each 'branch' of the node
		// kind of cheating, using iteration instead of a purely recursive solution
		// but whatever, the teacher did it too
		for (let i = 0; i < node.length; i++) {
			traverse(node[i]);
		}
	}
	traverse(inp);
	return arr;
}


console.log(flatten3([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten3([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten3([[1],[2],[3]])); // [1, 2, 3]
console.log(flatten3([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]

// Visualizing the nodes and branches on the 'tree'
// [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]
// []
// []
// []
// [], [], []
// 1   []  []
//     []  []
//     2   []
//         []
//         []
//         []
//         3

// [1, [2, [3, 4], [[5]]]]
// []
// 1, []
//    2, []   , []
//       3, 4   []
//              5

// Teacher's solution
function flatten2(oldArr){
  var newArr = []
	for(var i = 0; i < oldArr.length; i++){
		if(Array.isArray(oldArr[i])){
				newArr = newArr.concat(flatten2(oldArr[i]))
		} else {
				newArr.push(oldArr[i])
		}
	}
  return newArr;
}

// Experimental Solution, doesn't work
function flatten3(inp) {
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