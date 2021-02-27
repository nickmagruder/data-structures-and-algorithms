'use strict';

const linkedList = require('../ll-zip.js');


// Chalenge 08 Tests


describe('1', () => {
  it('lists are gettin SO zipped', () => {

    const testLL1 = new linkedList.LL();

    testLL1.head = new linkedList.Node(1);
    testLL1.append(3);
    testLL1.append(2);

    const testLL2 = new linkedList.LL();

    testLL2.head = new linkedList.Node(5);
    testLL2.append(9);
    testLL2.append(4);


    const testValue = linkedList.listZipper(testLL1, testLL2);

    expect(testValue).toEqual('{1} --> {5} --> {3} --> {9} --> {2} --> {4} --> {null}');

  });

});

describe('2', () => {
  it('lists are gettin majorly zipped', () => {

    const testLL1 = new linkedList.LL();

    testLL1.head = new linkedList.Node(1);
    testLL1.append(3);
    testLL1.append(2);

    const testLL2 = new linkedList.LL();

    testLL2.head = new linkedList.Node(5);
    testLL2.append(9);


    const testValue = linkedList.listZipper(testLL1, testLL2);

    expect(testValue).toEqual('{1} --> {5} --> {3} --> {9} --> {2} --> {null}');

  });

});

describe('3', () => {
  it('wow these lists are zipped', () => {

    const testLL1 = new linkedList.LL();

    testLL1.head = new linkedList.Node(1);
    testLL1.append(3);


    const testLL2 = new linkedList.LL();

    testLL2.head = new linkedList.Node(5);
    testLL2.append(9);
    testLL2.append(4);


    const testValue = linkedList.listZipper(testLL1, testLL2);

    expect(testValue).toEqual('{1} --> {5} --> {3} --> {9} --> {4} --> {null}');

  });

});
