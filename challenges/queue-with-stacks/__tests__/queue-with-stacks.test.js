'use strict';


const queueTest = require('../queue-with-stacks.js');

describe('test PseudoQueue', () => {

  const pseudoQueue = new queueTest.queue();

  const node1 = new queueTest.node(20);
  const node2 = new queueTest.node(15);
  const node3 = new queueTest.node(10);
  const node4 = new queueTest.node(5);

  pseudoQueue.enqueue(node1);
  pseudoQueue.enqueue(node2);
  pseudoQueue.enqueue(node3);
  pseudoQueue.enqueue(node4);


  it('enqueue value', () => {
    // console.log(pseudoQueue);
    expect(pseudoQueue.rear.top.value).toEqual(5);
  });


  it('dequeue value', () => {
    pseudoQueue.dequeue();
    // console.log(pseudoQueue.dequeue().value);
    expect(pseudoQueue.dequeue().value).toEqual(15);
  });

});
