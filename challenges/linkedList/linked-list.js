'use strict';

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    insert(val) {

        let current = this.head; 
        let newNode = new Node(val); 

        if (!current) {
          this.head = newNode;

        } else {
          newNode.next = current; 
          this.head = newNode;
        }
      }




    includes(val) {

    let current = this.head;

    while (current) {

      if (val === current.value) {
        return true;

      } else if (current.next === null) {
        return false;

      } else {
        current = current.next;

      }
    }
  }

    toString() {
        let current = this.head;
        let string = ''
        while (current) {
            let currentVal = current.value;
            current = current.next;
            string += `{${currentVal}} --> `;
        }
        string += `{null}`;
        return string;
    }

/* 
    insertBefore(val, newVal) {

    }

    insertAfter(val, newVal) {

    } */

}



/* const link = new LinkedList();

link.head = new Node(0);
link.head.next = new Node(1);
link.head.next.next = new Node(2);
link.head.next.next.next = new Node(3);

link.includes(2); */


module.exports = {
    'll': LinkedList,
    'node': Node,
};

