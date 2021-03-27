# Data Structures and Algorithms

# 401 JavaScript Code Challenges

# 01 - Reverse an Array
[array-reverse](challenges/arrayReverse/array-reverse.js)
### Challenge
- Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

### Approach
- array.reverse

###
```
function reverseArray(arr) {
    return arr.reverse();
};
```

<br/><br/><br/><br/><br/>





# 02 -Array Shift
[array-shift](challenges/arrayShift/array-shift.js)

### Approach
Get a count of the array, divide it by two and then round up, splice-in the new number at that index

### Whiteboard
![arrayShift](/challenges/arrayShift/arrayShift.jpg)

<br/><br/><br/><br/><br/>





# 03 - Array Binary Search
[Array Binary Search](challenges/arrayShift/array-shift.js)

### Approach
* Research binary Search
* write a while loop and divide each search in half until the key is found or not found

### Whiteboard
![arrayShift](/challenges/arrayBinarySearch/arrayBinarySearch.jpg)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier
* [https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470](https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470)
* [https://www.geeksforgeeks.org/binary-search-in-javascript/](https://www.geeksforgeeks.org/binary-search-in-javascript/)


<br/><br/><br/><br/><br/>





# 05 - Linked Lists
[Linked Lists](challenges/linkedList/linked-list.js)

### Approach
* 

### Whiteboard
![arrayShift](/challenges/arrayBinarySearch/arrayBinarySearch.jpg)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier

<br/><br/><br/><br/><br/>





# 06 - LL-Insertions
[LL Insertions](challenges/linkedList/linked-list.js)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO

<br/><br/><br/><br/><br/>

# 07 - LL-Insertions
[ll-kth-from-end](challenges/linkedList/linked-list.js)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
* Method adapted from stackoverflow: https://stackoverflow.com/questions/2598348/how-to-find-nth-element-from-the-end-of-a-singly-linked-list

<br/><br/><br/><br/><br/>





# 08 - LL-Zip
[ll-zip](challenges/LLZip/ll-zip.js)

### Challenge
- Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Approach and Efficiency
- Big O: space O(n^3)/time O(n^3)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
* TA Assistance from Sarah

<br/><br/><br/><br/><br/>






# 09 - Stacks & Queues
[Stacks & Queues](challenges/stacksAndQueues/stacks-and-queues.js)

## Stacks & Queues Challenge
### Stacks
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
    - Should raise exception when called on empty stack
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Should raise exception when called on empty stack
- Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

### Queues
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
    - Should raise exception when called on empty queue
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
    - Should raise exception when called on empty queue

### Approach and Efficiency
- Big O: space O(1) for each step

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, William Moreno, Seid MO

<br/><br/><br/><br/><br/>





# 11- Stacks & Queues
[Queue with Stacks](challenges/queue-with-stacks/queue-with-stacks.js)

## Stacks & Queues Challenge
### Stacks
- Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects. Ensure that you create your class with the following methods:

- enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.


### Approach and Efficiency
- Enqueue - Space: O(1) - Time: O(1)
- Dequeue - Space: O(n^2) - Time: O(n^2)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO

<br/><br/><br/><br/><br/>





# 12- FIFO
[FIFO](challenges/fifoAnimalShelter/fifo-animal-shelter.js)

## FIFO Challenge
- Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.
- Implement the following methods:
    - enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
    - dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

### Approach and Efficiency
- Enqueue - Space: O(1) - Time: O(1)
- Dequeue - Space: O(n^2) - Time: O(n^2)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO, William Moreno


# 15- Trees
[Trees](challenges/trees/trees.js)

## Trees
- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a BinaryTree class
- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.

- Create a BinarySearchTree class
- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

### Approach and Efficiency
- Find: O(log n)
- Insert: O(log n)

### Resources
- Geeks for Geeks: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

# 16- Find Maximum
[Trees](challenges/trees/trees.js)

## Find Maximum
- Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

### Approach and Efficiency
- FindMax: O(log n)

### Resources
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

# 17- Breadth
[Trees](challenges/trees/trees.js)

## Breadth Traversal
- Write a breadth first traversal method which takes a Binary Tree as its unique input. Without utilizing any of the built-in methods available to your language, traverse the input tree using a Breadth-first approach, and return a list of the values in the tree in the order they were encountered.

### Approach and Efficiency
- O(log n)

### Resources
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/

# 30 - Hash Tables
[Hash Table](challenges/hash/hash.js)

## Hashtable
Implement a Hashtable with the following methods:

- add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
- get: takes in the key and returns the value from the table.
- contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
- hash: takes in an arbitrary key and returns an index in the collection.

### Approach and Efficiency
- Separate Chaining Method
    - Time Efficiency: O(1)
    - Space Efficiency: 

### Resources
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/
- Collaborated with Jason Quaglia, Carly Dekock, Jason Dormier, Seid Mohamed