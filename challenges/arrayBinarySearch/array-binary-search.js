'use strict'

// code adapted from https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470
// Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier

function binarySearch(sortedArray, key){ 
    let start = 0; 
    let end = sortedArray.length - 1; 
    while (start <= end) { 
        let middle = Math.floor((start + end) / 2); 
        if (sortedArray[middle] === key) { 
            return middle; 
        } else if (sortedArray[middle] < key) { 
            start = middle + 1;
        } else { 
            end = middle - 1; 
        } 
     } 
     return -1; 
}

module.exports = binarySearch;