'use strict';

const testModule = require('../stacks-and-queues');


// Challenge 09 Tests


describe('Challenge 09 Tests', () => {
  it('Can successfully push onto a stack', () => {

    let testStack = new testModule.Stack();

    let node = new testModule.Node('potato');

    testStack.push(node);

    const testValue = testStack.top.value;

    expect(testValue).toEqual('potato');

  });


  it('Can successfully push multiple values onto a stack', () => {

    let testStack = new testModule.Stack();

    let node1 = new testModule.Node('potato');
    let node2 = new testModule.Node('tomato');

    testStack.push(node1);
    testStack.push(node2);

    const testValue1 = testStack.top.value;
    const testValue2 = testStack.top.next.value;

    expect(testValue1).toEqual('tomato');
    expect(testValue2).toEqual('potato');

  });

  it('Can successfully pop off the stack', () => {

    let testStack = new testModule.Stack();

    let node1 = new testModule.Node('potato');
    let node2 = new testModule.Node('tomato');

    testStack.push(node1);
    testStack.push(node2);

    testStack.pop();

    const testValue = testStack.top.value;

    expect(testValue).toEqual('potato');

  });

  it('Can successfully empty a stack after multiple pops', () => {

    let testStack = new testModule.Stack();

    let node1 = new testModule.Node('potato');
    let node2 = new testModule.Node('tomato');
    let node3 = new testModule.Node('hat');

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

    let testStack = new testModule.Stack();

    let node1 = new testModule.Node('potato');
    let node2 = new testModule.Node('tomato');
    let node3 = new testModule.Node('hat');

    testStack.push(node1);
    testStack.push(node2);
    testStack.push(node3);

    const testValue = testStack.peek();

    expect(testValue).toEqual('hat');

  });

  it('Can successfully instantiate an empty stack', () => {

    let testStack = new testModule.Stack();

    const testValue = testStack.isEmpty();

    expect(testValue).toBe(true);

  });

  it('Calling pop or peek on empty stack raises exception', () => {

    let testStack = new testModule.Stack();

    expect(() => testStack.peek()).toThrow('error');
    expect(() => testStack.pop()).toThrow('error');

  });

  it('Can successfully enqueue into a queue', () => {

    let testQueue = new testModule.Queue();

    const testNode = new testModule.Node(1);

    testQueue.enqueue(testNode);

    expect(testQueue.rear.value).toEqual(1);
    /*     expect(testQueue.front.value).toEqual(1); */

  });


  it('Can successfully enqueue multiple values into a queue', () => {

    let queue = new testModule.Queue();

    const testNode = new testModule.Node('one');
    const testNode2 = new testModule.Node('two');

    queue.enqueue(testNode);
    queue.enqueue(testNode2);

    /*   expect(queue.front.value).toEqual('one'); */
    expect(queue.rear.value).toEqual('two');

  });

  it('Can successfully dequeue out of a queue the expected value', () => {

    /*     let queue = new testModule.Queue();

        const testNode = new testModule.Node('one');
        const testNode2 = new testModule.Node('two');

        queue.enqueue(testNode);
        queue.enqueue(testNode2);

        queue.dequeue();

        expect(queue.rear.value).toEqual('two'); */

  });

  it('Can successfully peek into a queue, seeing the expected value', () => {

    /*     let queue = new testModule.Queue();

        const testNode = new testModule.Node('one');
        const testNode2 = new testModule.Node('two');

        queue.enqueue(testNode);
        queue.enqueue(testNode2);

        let peekTest = queue.peek();

        expect(peekTest).toEqual('one'); */

  });

  it('Can successfully empty a queue after multiple dequeues', () => {



  });

  it('Can successfully instantiate an empty queue', () => {



  });

  it('Calling dequeue or peek on empty queue raises exception', () => {



  });

});


