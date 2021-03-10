'use strict';

// adapted from Geeks for Geeks: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// also adapted from Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

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




  preOrder() {

    let array = [];
    let current = this.root;

    function traverse(node) {
      array.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return array;
  }



  inOrder() {

    let array = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      array.push(node.value);
    }

    traverse(this.root);
    return array;
  }



  postOrder() {

    let array = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      array.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return array;
  }



  findMaximum() {

    let maximum = 0;
    let placeholder;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      placeholder = node.value;
      if (placeholder >= maximum) maximum = placeholder;
    }

    traverse(this.root);
    return maximum;

  }

  breadthFirst() {

    let array = [];
    let queue = [];
    let node = this.root;

    queue.push(this.root);

    while (queue.length) {

      node = queue.shift();
      array.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

    }
    return array;
  }


}


class BinarySearchTree {

  constructor() {
    this.root = null;
  }


  add(value) {
    let addedNode = new Node(value);

    if (this.root === null) {
      this.root = addedNode;
      return this;
    } else {
      let current = this.root;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = addedNode;
            return this;
          }
        } else if (value > current.value) {
          current.right = addedNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }


  contains(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}


/* const tree = new BinaryTree();

tree.root = new Node(5);
tree.root.left = new Node(10);
tree.root.left.left = new Node(0);
tree.root.left.right = new Node(20);
tree.root.right = new Node(15);
tree.root.right.right = new Node(25); */

/* const searchTree = new BinarySearchTree(); */

/* searchTree.add(1);
searchTree.add(7);
searchTree.add(11);
searchTree.add(13);
searchTree.add(22);
searchTree.add(36);
searchTree.add(40); */

/* console.log(searchTree); */


/* console.log(tree.preOrder());

console.log(tree.inOrder());

console.log(tree.postOrder());

console.log(tree.findMaximum()); */

/* console.log(tree.breadthFirst()); */



module.exports = {

  'Node': Node,
  'BinaryTree': BinaryTree,
  'BinarySearchTree': BinarySearchTree

};
