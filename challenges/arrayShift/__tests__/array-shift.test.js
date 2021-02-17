'use strict'

const arrayShift = require('../array-shift.js');

describe('test array-shift', () => {
  it('should return an array where the second agument number is added to the middle index', () => {
    const arrayShifted = arrayShift([1, 2, 3, 4, 5, 6], 11);

    expect(arrayShifted).toEqual([1, 2, 3, 11, 4, 5, 6]);
  });
});
