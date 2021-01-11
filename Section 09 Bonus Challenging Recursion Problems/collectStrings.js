/**
 * Write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof string */

function collectStrings(arg) {
  const arr = [];
  function helper(inp) {
    if (typeof inp === 'object' && !Array.isArray(inp)) {
      for (let key in inp) {
        const val = helper(inp[key]);
        if(val){
          arr.push(val);
        }
      }
    }
    if (typeof inp === 'string' && inp !== undefined) {
      return inp;
    }
  }
  helper(arg);
  return arr;
}

// Teacher's solution: Helper Method
function collectStrings2(obj) {
  var stringsArr = [];
  function gatherStrings(o) {
    for(var key in o) {
      if(typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if(typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }
  gatherStrings(obj);
  return stringsArr;
}

// Teacher's solution: Pure recursion
function collectStrings3(obj) {
  var stringsArr = [];
  for(var key in obj) {
    if(typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if(typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }
  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])