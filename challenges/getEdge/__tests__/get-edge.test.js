'use strict';

const graphImport = require('../get-edge');



// Breadth Test
describe('Graph Tests', () => {

  it('1. Can find edges ', () => {

    let test = new graphImport.Graph();

    test.addVertex('Pandora');
    test.addVertex('Arendelle');
    test.addVertex('Metroville');
    test.addVertex('Monstropolis');
    test.addVertex('Naboo');
    test.addVertex('Narnia');


    test.addEdge('Pandora', 'Metroville');
    test.addEdge('Pandora', 'Arendelle');
    test.addEdge('Metroville', 'Arendelle');
    test.addEdge('Metroville', 'Monstropolis');
    test.addEdge('Metroville', 'Naboo');
    test.addEdge('Metroville', 'Narnia');
    test.addEdge('Narnia', 'Naboo');

    const testValue = test.adjacencyList.Pandora;
    const expectedValue = ['Metroville', 'Arendelle'];

    expect(testValue).toEqual(expectedValue);
  });



  it('2. Can find edges', () => {

    let test = new graphImport.Graph();

    test.addVertex('Pandora');
    test.addVertex('Arendelle');
    test.addVertex('Metroville');
    test.addVertex('Monstropolis');
    test.addVertex('Naboo');
    test.addVertex('Narnia');


    test.addEdge('Pandora', 'Metroville');
    test.addEdge('Pandora', 'Arendelle');
    test.addEdge('Metroville', 'Arendelle');
    test.addEdge('Metroville', 'Monstropolis');
    test.addEdge('Metroville', 'Naboo');
    test.addEdge('Metroville', 'Narnia');
    test.addEdge('Narnia', 'Naboo');

    const testValue = test.adjacencyList.Metroville;
    const expectedValue = ['Pandora', 'Arendelle', 'Monstropolis', 'Naboo', 'Narnia'];

    expect(testValue).toEqual(expectedValue);

  });


});
