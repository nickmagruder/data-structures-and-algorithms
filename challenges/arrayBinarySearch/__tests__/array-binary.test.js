'use strict'

const binarySearching = require('../array-binary-search.js');

describe('test binarySearch', () => {
  it('should return the index of the searched number', () => {
    const binarySearched = binarySearching([4,8,15,16,23,42], 15);

    expect(binarySearched).toEqual(2);
  });
});

describe('test binarySearch', () => {
  it('should return the index -1 since number not found', () => {
    const binarySearched = binarySearching([11,22,33,44,55,66,77], 90);

    expect(binarySearched).toEqual(-1);
  });
});