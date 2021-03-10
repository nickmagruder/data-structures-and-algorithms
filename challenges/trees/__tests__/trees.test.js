'use strict';

const treeTester = require('../trees');



// FindMax Test
describe('FindMaximum Tests', () => {
  it('Can successfully return the maximum value', () => {

    const tree = new treeTester.BinaryTree();

    tree.root = new treeTester.Node(5);
    tree.root.left = new treeTester.Node(10);
    tree.root.left.left = new treeTester.Node(0);
    tree.root.left.right = new treeTester.Node(20);
    tree.root.right = new treeTester.Node(15);
    tree.root.right.right = new treeTester.Node(25);

    const testValue = tree.findMaximum();

    expect(testValue).toEqual(25);
  });
});


// Tree Tests
describe('Tree Tests', () => {
  it('Can successfully instantiate an empty tree', () => {


  });



  it('Can successfully instantiate a tree with a single root node', () => {


  });




  it('Can successfully add a left child and right child to a single root node', () => {


  });




  it('Can successfully return a collection from a preorder traversal', () => {


  });



  it('Can successfully return a collection from an inorder traversal', () => {


  });



  it('Can successfully return a collection from a postorder traversal', () => {


  });




});


