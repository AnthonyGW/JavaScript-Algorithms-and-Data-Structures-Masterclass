class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // map 'a' to 1, 'b' to 2, 'c' to 3...
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) { // avoiding collision with separate chaining (nesting kv pairs in the same index)
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // override existing (not in the teacher's solution)
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (key === this.keyMap[index][i][0]) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const val = this.keyMap[index];
    if (val) {
      if (val.length === 1) return val[0][1];
      for (let i = 0; i < val.length; i++) {
        if (val[i][0] === key) return val[i][1];
      }
    }
    return undefined;
  }

  // Teacher's solution
  get2(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][1])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(3);
ht.set("hello", "goodbye");
ht.set("sum", 35);
ht.set("cyan", 12336);
ht.set("orangered", 370);
ht.set("title", "some title");

console.log(ht.keyMap);
console.log(ht.keys());
console.log(ht.values());

ht.set("sum", "NEW THING");
console.log('sum', ht.get("sum"));
console.log('hello', ht.get("hello"));
console.log('title', ht.get("title"));
console.log('cyan', ht.get("cyan"));
console.log('orangered', ht.get("orangered"));