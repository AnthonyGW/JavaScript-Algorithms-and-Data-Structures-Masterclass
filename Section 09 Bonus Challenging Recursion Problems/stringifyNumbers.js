/**
 * Write a function called stringifyNumbers which takes in an object
 * and finds all of the values which are numbers
 * and converts them to strings.
 * Recursion would be a great way to solve this!
 */

function isObject(p) {
  return typeof p === 'object' && p !== null;
}

function isNumber(p) {
  return typeof p === 'number' && p !== Infinity && !isNaN(p);
}

function stringifyNumbers(arg) {
  if (isObject(arg)) {
    for (let key in arg) {
      arg[key] = stringifyNumbers(arg[key]);
    }
  }
  if (isNumber(arg)) {
    arg = arg.toString();
  }
  return arg;
}

function stringifyNumbers2(arg) {
  if (typeof arg === 'object' && arg !== null && !Array.isArray(arg)) {
    arg = Object.assign({}, arg);
    for(const [key, value] of Object.entries(arg)){
      arg[key] = stringifyNumbers(arg[key]);
    }
  }
  if (typeof arg === 'number' && arg !== Infinity && !isNaN(arg)) {
    arg = arg.toString();
  }
  return arg;
}

// Teacher's solution
function stringifyNumbers3(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
      breaker: NaN,
      breaker2: Infinity,
      breaker3: {
        something: 7
      }
    }
  }
}

stringifyNumbers2(obj);

console.log(obj);

/*
{
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66"
    }
  }
}
*/