var queue = [];

// adding to the end
queue.push('FIRST');
queue.push('SECOND');
queue.push('THIRD');

// removing from the beginning, results in re-indexing the queue
queue.shift(); // FIRST
queue.shift(); // SECOND
queue.shift(); // THIRD

// adding to the beginning, results in re-indexing the queue
queue.unshift('FIRST');
queue.unshift('SECOND');
queue.unshift('THIRD');

// removing from the end
queue.pop(); // FIRST
queue.pop(); // SECOND
queue.pop(); // THIRD