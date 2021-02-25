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
