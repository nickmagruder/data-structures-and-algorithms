'use strict'

 const linked = require('../linked-list.js'); 


describe('empty linked list', () => {
  it('successfully instantiate an empty linked list', () => {
    let linkedListed = new linked.ll();

    expect(linkedListed).toEqual({"head": null});
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
