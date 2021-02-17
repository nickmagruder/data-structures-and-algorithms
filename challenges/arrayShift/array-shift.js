'use strict'

function insertShiftArray(arr, num) {
    let arrayCount = 0;
    for (let i = 0; i < arr.length; i++) {
        arrayCount++;
    }
let index = Math.ceil(arrayCount / 2);
arr.splice(index, 0, num);
return arr;
}

module.exports = insertShiftArray;
