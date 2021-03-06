'use strict';


class Node {

  constructor(value) {
    this.value = value;
    this.next = null;

  }
}


class Stack {

  constructor() {
    this.top = null;

  }


  push(node) {

    if (this.isEmpty()) {

      this.top = node;

    } else {

      node.next = this.top;
      this.top = node;

    }
  }



  pop() {

    let temp = this.top;

    if (temp === null) {
      throw ('error');

    } else {

      this.top = temp.next;
      temp.next = null;
      return temp.value;

    }
  }


  peek() {

    let temp = this.top;

    if (temp === null) {
      throw ('error');

    } else {
      return temp.value;

    }
  }


  isEmpty() {
    return this.top === null;
  }


}


class Queue {

  constructor() {
    this.front = null;
    this.rear = null;

  }



  enqueue(node) {

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;

    } else {

      this.rear = node;
      this.rear.next = node;

    }
  }


  dequeue() {

    console.log(this);

    if (this.isEmpty()) {
      throw ('error');

    } else {
      let temp = this.front;
      this.front = temp.next;
      temp.next = null;
      return temp.value;

    }
  }


  peek() {

    if (this.isEmpty()) {
      throw ('error');

    } else {
      return this.front.value;

    }
  }


  isEmpty() {
    return this.top === null;
  }

}


/* let stack = new Stack();

let nodeA = new Node('first');
let nodeB = new Node('second');

stack.push(nodeA);
stack.push(nodeB);

let top = stack.pop();

console.log(top);

let queue = new Queue();

queue.enqueue(nodeA);
queue.enqueue(nodeB);

console.log(queue);  */






module.exports = {
  'Node': Node,
  'Stack': Stack,
  'Queue': Queue,
};


