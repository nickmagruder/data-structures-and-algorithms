'use strict';

const testModule = require('../fifo-animal-shelter');

// Challenge 11 Tests

describe('Enqueue Cats and Dogs', () => {
  it('Can successfully enqueue into a queue', () => {

    let queue = new testModule.AnimalShelter();

    const testNode = new testModule.Animal('cat');
    const testNode2 = new testModule.Animal('dog');
    const testNode3 = new testModule.Animal('cat');

    queue.enqueue(testNode);
    queue.enqueue(testNode2);
    queue.enqueue(testNode3);

    expect(queue.rear.value).toEqual('cat');

  });
});

describe('Dequeue a Cat', () => {
  it('Can successfully dequeue a cat', () => {

    let queue = new testModule.AnimalShelter();

    const testNode = new testModule.Animal('cat');
    const testNode2 = new testModule.Animal('dog');
    const testNode3 = new testModule.Animal('cat');

    queue.enqueue(testNode);
    queue.enqueue(testNode2);
    queue.enqueue(testNode3);

    /*     queue.dequeue('cat'); */

    expect(queue.dequeue('cat')).toEqual('cat');

  });
});

describe('Dequeue a Dog', () => {
  it('Can successfully dequeue a dog', () => {

    let queue = new testModule.AnimalShelter();

    const testNode = new testModule.Animal('cat');
    const testNode2 = new testModule.Animal('dog');
    const testNode3 = new testModule.Animal('dog');

    queue.enqueue(testNode);
    queue.enqueue(testNode2);
    queue.enqueue(testNode3);

    /*     queue.dequeue('dog'); */

    expect(queue.dequeue('dog')).toEqual('dog');

  });
});

describe('Returns null when not cat or dog', () => {
  it('Successfully returns null', () => {

    let queue = new testModule.AnimalShelter();

    const testNode = new testModule.Animal('cat');
    const testNode2 = new testModule.Animal('dog');
    const testNode3 = new testModule.Animal('dog');

    queue.enqueue(testNode);
    queue.enqueue(testNode2);
    queue.enqueue(testNode3);

    /*     queue.dequeue('Blue Whale'); */

    expect(queue.dequeue('Blue Whale')).toEqual(null);

  });
});
