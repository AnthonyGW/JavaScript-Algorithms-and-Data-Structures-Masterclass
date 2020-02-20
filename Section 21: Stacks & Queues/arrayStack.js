var stack = [];

// working from the end
stack.push('google');
stack.push('instagram');
stack.push('youtube');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// working from the beginning
// less efficient, because all subsequent items will be reindexed
stack.unshift('create file');
stack.unshift('resize file');
stack.unshift('save file');
console.log(stack.shift());
console.log(stack.shift());
console.log(stack.shift());