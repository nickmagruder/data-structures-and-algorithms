'use strict';

const treeintersection = require('../tree-intersection');
const trees = require('../../trees/trees.js');



// Breadth Test
describe('Tree Intersection Test', () => {
  it('Can find dupes', () => {

    const tree1 = new trees.BinaryTree();

    tree1.root = new trees.Node(150);
    tree1.root.left = new trees.Node(100);
    tree1.root.left.left = new trees.Node(75);
    tree1.root.left.right = new trees.Node(160);
    tree1.root.left.right.left = new trees.Node(125);
    tree1.root.left.right.right = new trees.Node(175);
    tree1.root.right = new trees.Node(250);
    tree1.root.right.left = new trees.Node(200);
    tree1.root.right.right = new trees.Node(350);
    tree1.root.right.right.left = new trees.Node(300);
    tree1.root.right.right.right = new trees.Node(500);

    const tree2 = new trees.BinaryTree();

    tree2.root = new trees.Node(42);
    tree2.root.left = new trees.Node(100);
    tree2.root.left.left = new trees.Node(15);
    tree2.root.left.right = new trees.Node(160);
    tree2.root.left.right.left = new trees.Node(125);
    tree2.root.left.right.right = new trees.Node(175);
    tree2.root.right = new trees.Node(600);
    tree2.root.right.left = new trees.Node(200);
    tree2.root.right.right = new trees.Node(350);
    tree2.root.right.right.left = new trees.Node(4);
    tree2.root.right.right.right = new trees.Node(500);

    const testValue = treeintersection(tree1, tree2);

    expect(testValue).toEqual([100, 160, 125, 175, 200, 350, 500]);
  });
});



