'use strict';

// adapted from Geeks for Geeks: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class Node {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BinaryTree {

  constructor() {
    this.root = null;
  }



  add(value) {
    let addedNode = new Node(value);

    if (this.root === null)
      this.root = addedNode;

    else
      this.nodeInsert(this.root, addedNode);

  }




  contains(node, value) {

    if (node === null)
      return null;

    else if (value < node.value)
      return this.contains(node.left, value);

    else if (value > node.value)
      return this.contains(node.right, value);

    else
      return node;
  }



  preOrder() {

    let array = [];

    const preOrder = (node) => {

      array.push(node.value);

      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };
    let current = this.root;
    preOrder(current);
    return array;
  }


  inOrder() {

    let array = [];

    const inOrder = (node) => {

      if (node.left) {
        array.push(node.value);
        inOrder(node.left);
      }
      if (node.right) {
        inOrder(node.right);
      }
    };
    let current = this.root;
    inOrder(current);
    return array;
  }


  postOrder() {

    let array = [];

    const postOrder = (node) => {

      if (node.left) {
        postOrder(node.left);
      }
      if (node.right) {
        array.push(node.value);
        postOrder(node.right);
      }
    };
    let current = this.root;
    postOrder(current);
    return array;
  }

}



const tree = new BinaryTree();

tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25);




console.log(tree.preOrder());

console.log(tree.inOrder());

console.log(tree.postOrder());



module.exports = {

  'Node': Node,
  'BinaryTree': BinaryTree

};
