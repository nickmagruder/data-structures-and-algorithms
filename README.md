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

# 02 -Array Shift
[array-shift](challenges/arrayShift/array-shift.js)

### Approach
Get a count of the array, divide it by two and then round up, splice-in the new number at that index

### Whiteboard
![arrayShift](/challenges/arrayShift/arrayShift.jpg)



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


# 05 - Linked Lists
[Linked Lists](challenges/linkedList/linked-list.js)

### Approach
* 

### Whiteboard
![arrayShift](/challenges/arrayBinarySearch/arrayBinarySearch.jpg)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier




# 06 - LL-Insertions
[LL Insertions](challenges/linkedList/linked-list.js)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO


# 07 - LL-Insertions
[ll-kth-from-end](challenges/linkedList/linked-list.js)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
* Method adapted from stackoverflow: https://stackoverflow.com/questions/2598348/how-to-find-nth-element-from-the-end-of-a-singly-linked-list

# 08 - LL-Zip
[ll-zip](challenges/LLZip/ll-zip.js)

### Challenge
- Write a function called zipLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

### Approach and Efficiency
- Big O: space O(n^3)/time O(n^3)

### Resources
* Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
* TA Assistance from Sarah


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
