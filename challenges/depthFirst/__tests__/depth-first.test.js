'use strict';

const graphImport = require('../depth-first');



describe('Graph Tests', () => {

  it('1. Node can be successfully added to the graph', () => {

    let test = new graphImport.Graph();


    test.addVertex('one');
    test.addVertex('two');

    test.addEdge('one', 'two');
    test.addEdge('two', 'one');

    const testValue = test.depthFirst('one');

    const expectedValue = ['one', 'two'];

    expect([...testValue]).toEqual(expectedValue);
  });



  it('2. An edge can be successfully added to the graph', () => {

    let test = new graphImport.Graph();

    test.addVertex('one');
    test.addVertex('two');

    test.addEdge('one', 'two');
    test.addEdge('two', 'one');

    const testValue = test.depthFirst('one');

    const expectedValue = ['one', 'two'];

    expect([...testValue]).toEqual(expectedValue);
  });



  it('3.  collection of all nodes can be properly retrieved from the graph', () => {

    let test = new graphImport.Graph();

    test.addVertex('one');
    test.addVertex('two');
    test.addVertex('three');
    test.addVertex('four');
    test.addVertex('five');
    test.addVertex('six');

    test.addEdge('one', 'three');
    test.addEdge('two', 'four');
    test.addEdge('one', 'four');
    test.addEdge('four', 'two');
    test.addEdge('four', 'five');
    test.addEdge('two', 'six');

    const testValue = test.depthFirst('one');
    const expectedValue = ['one', 'three', 'four', 'two', 'six', 'five'];

    expect([...testValue]).toEqual(expectedValue);
  });


});
