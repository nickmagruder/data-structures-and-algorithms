'use strict';

const stack = require('../stacks-and-queues');


// Challenge 09 Tests


describe('Challenge 09 Tests', () => {
  it('Can successfully push onto a stack', () => {

    let testStack = new stack.Stack();

    let node = new stack.Node('potato');

    testStack.push(node);

    const testValue = testStack.top.value;

    expect(testValue).toEqual('potato');

  });


  it('Can successfully push multiple values onto a stack', () => {

    let testStack = new stack.Stack();

    let node1 = new stack.Node('potato');
    let node2 = new stack.Node('tomato');

    testStack.push(node1);
    testStack.push(node2);

    const testValue1 = testStack.top.value;
    const testValue2 = testStack.top.next.value;

    expect(testValue1).toEqual('tomato');
    expect(testValue2).toEqual('potato');

  });

  it('Can successfully pop off the stack', () => {

    let testStack = new stack.Stack();

    let node1 = new stack.Node('potato');
    let node2 = new stack.Node('tomato');

    testStack.push(node1);
    testStack.push(node2);

    testStack.pop();

    const testValue = testStack.top.value;

    expect(testValue).toEqual('potato');

  });

  it('Can successfully empty a stack after multiple pops', () => {

    let testStack = new stack.Stack();

    let node1 = new stack.Node('potato');
    let node2 = new stack.Node('tomato');
    let node3 = new stack.Node('hat');

    testStack.push(node1);
    testStack.push(node2);
    testStack.push(node3);

    testStack.pop();
    testStack.pop();
    testStack.pop();

    const testValue = testStack.isEmpty();

    expect(testValue).toBe(true);

  });

  it('Can successfully peek the next item on the stack', () => {

    let testStack = new stack.Stack();

    let node1 = new stack.Node('potato');
    let node2 = new stack.Node('tomato');
    let node3 = new stack.Node('hat');

    testStack.push(node1);
    testStack.push(node2);
    testStack.push(node3);

    const testValue = testStack.peek();

    expect(testValue).toEqual('hat');

  });

  it('Can successfully instantiate an empty stack', () => {

    let testStack = new stack.Stack();

    const testValue = testStack.isEmpty();

    expect(testValue).toBe(true);

  });

  it('Calling pop or peek on empty stack raises exception', () => {

    let testStack = new stack.Stack();

    expect(() => testStack.peek()).toThrow('error');
    expect(() => testStack.pop()).toThrow('error');

  });

  it('Can successfully enqueue into a queue', () => {


  });


  it('Can successfully enqueue multiple values into a queue', () => {

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
  });

  it('Can successfully instantiate an empty queue', () => {
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
  });

});


