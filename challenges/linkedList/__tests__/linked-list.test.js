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



/* describe('Head Points to First Node', () => {
  it('The head property will properly point to the first node in the linked list', () => {
    const linkedListed = new linked();

    expect(linkedListed).toEqual();
  });
}); */



/* describe('Insert Multiple Nodes', () => {
  it('Can properly insert multiple nodes into the linked list', () => {
    let insert2 = new linked();
    insert2.insert('taco');

    expect(insert2.head.value).toEqual('taco');
  });
}); 
 */


describe('True when finding a value', () => {
  it('Will return true when finding a value within the linked list that exists', () => {
    let findValue = new linked.ll();
    findValue.head = new linked.node(0);
    findValue.head.next = new linked.node(1);
    findValue.head.next.next = new linked.node(2);
    findValue.head.next.next.next = new linked.node(3);
    let includesValue = findValue.includes(2);
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



/* describe('Return collections of all values', () => {
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedListed = linkedList();

    expect(linkedListed).toEqual();
  });
}); */
