'use strict';

const trees = require('../trees/trees.js'); 


function tree_intersection(tree1, tree2) {

  let array1 = tree1.preOrder();
  let array2 = tree2.preOrder();
  let duplicates = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i])
      duplicates.push(array1[i]);
  }
  return duplicates;
}


module.exports = tree_intersection;
