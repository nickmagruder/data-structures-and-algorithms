'use strict';


class KaryNode {
  constructor(value, size) {
    this.value = value;
    this.children = new Array(size);
  }
}


class KaryTree {
  constructor(k) {
    this.root = null;
    this.k = k;
  }


  breadth() {

    let current = null;
    let queue = [];

    queue.unshift(this.root);

    while (queue.length) {

      current = queue.pop();
      console.log(current.value);

      for (let i = 0; i < current.children.length; i++) {
        if (current.children[i]) {
          queue.unshift(current.children[i]);
        }
      }
    }

  }
}



function FizzBuzzTree(tree) {



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

  'KaryNode': KaryNode,
  'KaryTree': KaryTree,
  'FizzBuzzTree': FizzBuzzTree

};
