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




    // adds a new node with the given value to the end of the list
    append(val) {

      let current = this.head;

      while (current) {
        
        if (current.next === null) {
          current.next = new Node(val);
          return;
        }

        current = current.next;

        }
      }


    // add a new node with the given newValue immediately before the first value
    insertBefore(val, newVal) {

      let current = this.head;

      let newNode = new Node(newVal);

      while (current.next !== null) {

        if(current.value === val) {
          newNode.next = current;
          this.head = newNode;

        } else if (current.next.value === val) {
          let temp = current.next;
          current.next = newNode;
          newNode.next = temp;
          return;
        }

        current = current.next;

      }
    }
    
    //  add a new node with the given newValue immediately after the first value node
    insertAfter(val, newVal) {

      let current = this.head;

      while (current) {

        if(current.value === val) {
          let newNode = new Node(newVal);
          let temp = current.next;
          current.next = newNode;
          newNode.next = temp;
          return;
        }

        current = current.next;

      }
    }
  }


/*   
const ll = new LinkedList();

  ll.head = new Node(5);
  ll.head.next = new Node(6);
  ll.head.next.next = new Node(7);
  ll.head.next.next.next = new Node(8);
  
  ll.insertBefore(9, 1);
  ll.toString();
  */


module.exports = {
    'll': LinkedList,
    'node': Node,
};

