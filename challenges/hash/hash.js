'use strict';

// Adapted from Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }


  hash(key) {
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNumber + value) % this.keyMap.length;
    }
    return total;
  }



  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }



  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }



  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
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



}



/* let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD'); */


/* ht.keys().forEach(function (key) {
  console.log(ht.get(key));
}); */


/* console.log(ht.hash('maroon'));
console.log(ht.hash('yellow'));
console.log(ht.hash('olive'));
console.log(ht.hash('salmon'));
console.log(ht.hash('lightcoral'));
console.log(ht.hash('mediumvioletred'));
console.log(ht.hash('plum'));
console.log(ht.hash('purple'));
console.log(ht.hash('violet')); */



module.exports = {
  'HashTable': HashTable
};
