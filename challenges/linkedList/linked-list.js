'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }


    insert(val) {

        if (this.head === null) {
            let current = new Node(val);
            this.head = current;

        } else {
            let current = this.head;

            while (current) {
                if (current.next === null) {
                    current.next = new Node(val);
                    return;
                }
                current = current.next;
            }
        }
    }


    append(val) {
        let current = this.head;
        while (current.next === null) {
            current.next = new Node(val);
            return;
        }
    }

    includes(val) {
        let current = this.head;
        while (current) {
            if (val === current.value) {
                return true;
            } else if (current.next === null) {
                return false;
            } else { current = current.next }
        }
    }

    toString() {
        let current = this.head;
        let string = ''
        while (current) {
            let currentValue = current.value;
            current = current.next;
            string += `{${currentValue}} --> `;
        }
        string += `{null}`;
        return string;
    }

}



const link = new LinkedList();

link.head = new Node(0);
link.head.next = new Node(1);
link.head.next.next = new Node(2);
link.head.next.next.next = new Node(3);

link.includes(2);


module.exports = {
    node: Node,
    ll: LinkedList,
}

