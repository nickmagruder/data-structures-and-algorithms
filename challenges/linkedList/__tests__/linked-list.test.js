'use strict'

const linked = require('../linked-list.js');


// Chalenge 07 Test - 


describe('', () => {
  it('k is greater than the length of the linked list', () => {

    const nodeValue = new linked.ll();

    nodeValue.head = new linked.node('x');
    nodeValue.head.next = new linked.node('y');
    nodeValue.head.next.next = new linked.node('z');
    nodeValue.head.next.next.next = new linked.node('a');

    const testValue = nodeValue.findKValue(6);

    expect(testValue).toEqual(null);

  });
});



describe('', () => {
  it('k and the length of the list are the same', () => {

    const nodeValue = new linked.ll();

    nodeValue.head = new linked.node('x');
    nodeValue.head.next = new linked.node('y');
    nodeValue.head.next.next = new linked.node('z');
    nodeValue.head.next.next.next = new linked.node('a');

    const testValue = nodeValue.findKValue(4);

    expect(testValue).toEqual('x');

  });
});



describe('', () => {
  it('k is not a positive integer', () => {

    const nodeValue = new linked.ll();

    nodeValue.head = new linked.node('x');
    nodeValue.head.next = new linked.node('y');
    nodeValue.head.next.next = new linked.node('z');
    nodeValue.head.next.next.next = new linked.node('a');

    const testValue = nodeValue.findKValue(-6);

    expect(testValue).toEqual(null);

  });
});



describe('', () => {
  it('the linked list is of a size 1', () => {

    const nodeValue = new linked.ll();

    nodeValue.head = new linked.node('x');

    const testValue = nodeValue.findKValue(1);

    expect(testValue).toEqual('x');

  });
});



describe('', () => {
  it('“Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {

    const nodeValue = new linked.ll();

    nodeValue.head = new linked.node('x');
    nodeValue.head.next = new linked.node('y');
    nodeValue.head.next.next = new linked.node('z');
    nodeValue.head.next.next.next = new linked.node('a');
    nodeValue.head.next.next.next.next = new linked.node('b');

    const testValue = nodeValue.findKValue(3);

    expect(testValue).toEqual('z');

  });
});







// Challenge 06 - LL Insertions Tests

describe('append(val)', () => {
  it('adds a new node with the given value to the end of the list', () => {
    const list = new linked.ll();
    list.head = new linked.node(0);

    list.append(4);

    expect(list.head.next.value).toEqual(4);
  });
});



describe('insertBefore(val, newVal)', () => {
  it('adds a new node with the given newVal immediately after the first value node', () => {

    const list = new linked.ll();
    list.head = new linked.node(0);
    list.head.next = new linked.node(1);

    list.insertBefore(1, 4);

    expect(list.head.next.value).toEqual(4);

  });
});



describe('insertAfter(val, newVal)', () => {
  it('adds a new node with the given value to the end of the list', () => {
    const list = new linked.ll();

    list.head = new linked.node(0);
    list.head.next = new linked.node(1);
    list.head.next.next = new linked.node(2);

    list.insertAfter(1, 4);

    expect(list.head.next.next.value).toEqual(4);

  });
});












// Challenge 05 - Linked-Lists Tests
describe('empty linked list', () => {
  it('successfully instantiate an empty linked list', () => {
    let linkedListed = new linked.ll();

    expect(linkedListed).toEqual({ "head": null });
  });
});



describe('insert into', () => {
  it('Can properly insert into the linked list', () => {
    let insertInto = new linked.ll();
    insertInto.insert('taco');

    expect(insertInto.head.value).toEqual('taco');
  });
});



describe('Head Points to First Node', () => {
  it('The head property will properly point to the first node in the linked list', () => {

    const headTest = new linked.ll();
    headTest.head = new linked.node(0);

    expect(headTest.head.value === 0).toBeTruthy();

  });
});



describe('Insert Multiple Nodes', () => {
  it('Can properly insert multiple nodes into the linked list', () => {

    let multipleInsertTest = new linked.ll();

    for (let i = 1; i <= 3; i++) {
      multipleInsertTest.insert(`taco${[i]}`);
    }

    expect(multipleInsertTest.head.next.next.value).toEqual('taco1');
    expect(multipleInsertTest.head.next.value).toEqual('taco2');
    expect(multipleInsertTest.head.value).toEqual('taco3');

  });
});


describe('True when finding a value', () => {
  it('Will return true when finding a value within the linked list that exists', () => {

    const findValue = new linked.ll();

    findValue.head = new linked.node('x');
    findValue.head.next = new linked.node('y');
    findValue.head.next.next = new linked.node('z');
    findValue.head.next.next.next = new linked.node('a');

    const includesValue = findValue.includes('y');

    expect(includesValue).toEqual(true);

  });
});


describe('Return false when no value', () => {
  it('Will return false when searching for a value in the linked list that does not exist', () => {

    let findValue = new linked.ll();

    findValue.head = new linked.node(0);
    findValue.head.next = new linked.node(1);
    findValue.head.next.next = new linked.node(2);
    findValue.head.next.next.next = new linked.node(3);

    let notIncludesValue = findValue.includes(36);

    expect(notIncludesValue).toEqual(false);

  });
});



describe('Return collections of all values', () => {
  it('Can properly return a collection of all the values that exist in the linked list', () => {

    const allTest = new linked.ll();

    allTest.head = new linked.node('taco');
    allTest.head.next = new linked.node('potato');
    allTest.head.next.next = new linked.node('cats');
    allTest.head.next.next.next = new linked.node('telephone');

    allTest.insert('hello');

    const test = allTest.toString();

    expect(test).toEqual('{hello} --> {taco} --> {potato} --> {cats} --> {telephone} --> {null}');

  });
});
