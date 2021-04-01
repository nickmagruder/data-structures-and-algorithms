'use strict';

function leftJoin(table1, table2) {

  let finalArray = [];

  for (let i = 0; i < table1.hashes.length; i++) {

    let array = [];

    if (table1.hashes[i] !== undefined) {

      let key = (Object.keys(table1.hashes[i].head.value)[0]);
      array.push(key);
      array.push(table1.hashes[i].head.value[key]);

      if (table2.contains(key)) {
        array.push(table2.get(key));

      } else {
        array.push(null);

      }

      finalArray.push(array);

    }
  }

  return finalArray;

}

module.exports = leftJoin;
