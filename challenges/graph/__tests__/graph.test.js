'use strict';

const graphImport = require('../graph');




/*
1. Node can be successfully added to the graph
2. An edge can be successfully added to the graph
3.  collection of all nodes can be properly retrieved from the graph
4. All appropriate neighbors can be retrieved from the graph
5. Neighbors are returned with the weight between nodes included
6. The proper size is returned, representing the number of nodes in the graph
7. A graph with only one node and edge can be properly returned
8. An empty graph properly returns null
 */


// Breadth Test
describe('Graph Tests', () => {

  it('1. Node can be successfully added to the graph', () => {

    let test = new graphImport.Graph();

    let one = new graphImport.Vertex('one');
    let two = new graphImport.Vertex('two');

    test.addVertex(one);
    test.addVertex(two);

    test.addEdge(one, two);
    test.addEdge(two, one);

    const testValue = test.breadthFirst(one);

    const expectedValue = [{'value': 'one'}, {'value': 'two'}];

    expect([...testValue]).toEqual(expectedValue);
  });



  it('2. An edge can be successfully added to the graph', () => {

    let test = new graphImport.Graph();

    let one = new graphImport.Vertex('one');
    let two = new graphImport.Vertex('two');

    test.addVertex(one);
    test.addVertex(two);

    test.addEdge(one, two);
    test.addEdge(two, one);

    const testValue = test.breadthFirst(one);

    const expectedValue = [{'value': 'one'}, {'value': 'two'}];

    expect([...testValue]).toEqual(expectedValue);
  });



  it('3.  collection of all nodes can be properly retrieved from the graph', () => {

    let test = new graphImport.Graph();

    let one = new graphImport.Vertex('one');
    let two = new graphImport.Vertex('two');
    let three = new graphImport.Vertex('three');
    let four = new graphImport.Vertex('four');
    let five = new graphImport.Vertex('five');
    let six = new graphImport.Vertex('six');

    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addVertex(four);
    test.addVertex(five);
    test.addVertex(six);

    test.addEdge(one, three);
    test.addEdge(two, four);
    test.addEdge(one, four);
    test.addEdge(four, two);
    test.addEdge(four, five);
    test.addEdge(two, six);

    const testValue = test.breadthFirst(one);
    const expectedValue = [{'value': 'one'}, {'value': 'three'}, {'value': 'four'}, {'value': 'two'}, {'value': 'five'}, {'value': 'six'}];

    expect([...testValue]).toEqual(expectedValue);
  });



  it('4. All appropriate neighbors can be retrieved from the graph', () => {

    let test = new graphImport.Graph();

    let one = new graphImport.Vertex('one');
    let two = new graphImport.Vertex('two');
    let three = new graphImport.Vertex('three');
    let four = new graphImport.Vertex('four');
    let five = new graphImport.Vertex('five');
    let six = new graphImport.Vertex('six');

    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addVertex(four);
    test.addVertex(five);
    test.addVertex(six);

    test.addEdge(one, three);
    test.addEdge(two, four);
    test.addEdge(one, four);
    test.addEdge(four, two);
    test.addEdge(four, five);
    test.addEdge(two, six);

    const testValue = test.breadthFirst(one);
    const expectedValue = [{'value': 'one'}, {'value': 'three'}, {'value': 'four'}, {'value': 'two'}, {'value': 'five'}, {'value': 'six'}];

    expect([...testValue]).toEqual(expectedValue);

  });



  it('5. Neighbors are returned with the weight between nodes included', () => {

    let test = new graphImport.Graph();

    let one = new graphImport.Vertex('one');
    let two = new graphImport.Vertex('two');
    let three = new graphImport.Vertex('three');
    let four = new graphImport.Vertex('four');
    let five = new graphImport.Vertex('five');
    let six = new graphImport.Vertex('six');

    test.addVertex(one);
    test.addVertex(two);
    test.addVertex(three);
    test.addVertex(four);
    test.addVertex(five);
    test.addVertex(six);

    test.addEdge(one, three);
    test.addEdge(two, four);
    test.addEdge(one, four);
    test.addEdge(four, two);
    test.addEdge(four, five);
    test.addEdge(two, six);

    const testValue = test.getNeighbors(one);
    const expectedValue = [{ 'vertex': { 'value': 'three' }, 'weight': 0 }, {'vertex': {'value': 'four' }, 'weight': 0 }];
    console.log([...testValue]);

    expect([...testValue]).toEqual(expectedValue);

  });



  it('6. The proper size is returned, representing the number of nodes in the graph', () => {

    /*     const tree = new graphTester.BinaryTree();
        tree.root = new graphTester.Node(5);
        const testValue = tree.findMaximum();
        expect(testValue).toEqual(25); */
  });



  it('7. A graph with only one node and edge can be properly returned', () => {

    /*     const tree = new graphTester.BinaryTree();
        tree.root = new graphTester.Node(5);
        const testValue = tree.findMaximum();
        expect(testValue).toEqual(25); */
  });



  it('8. An empty graph properly returns null', () => {

    /*     const tree = new graphTester.BinaryTree();
        tree.root = new graphTester.Node(5);
        const testValue = tree.findMaximum();
        expect(testValue).toEqual(25); */
  });

});
