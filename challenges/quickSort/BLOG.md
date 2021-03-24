# Data Structures and Algorithms
# 401 JavaScript Code Challenges

# 28- QuickSort
[QuickSort](challenges/quickSort/quickSort.js)

# Quick Sort
- Similar to merge sort, uses the face that arrays of 0 or 1 are inherently always sorted
- Functions by the selection of a single element, the "pivot," and then finding the index of where that pivot should ideally be in the final, sorted array
  - Then, move all smaller numbers to the left and larger ones to the right, but not yet sort them
    - After this, the "pivot" is in the right position.
    - Then, we repeat the process on the left and right, similarly to merge sort, recursively


# Partition/Pivot (Helper Function)
- To do a quick sort, it is helpful to create a helper function that arranges elements in an array on each side of the "pivot"
- With array as argument, function selects an element as the pivot
- It arranges smaller values to the left, and larger values to the right, order doesn't matter
- Function arranges "in-place", no new array
- Returns the pivot's index

# Pivot Selection
- Ideally this would be the median
- For this solution, we will select the first element



## Merge-Sort Big O
- Time (Best, Avg, & Worse): O(n log n)
- Space: O(n)

### Resources
- Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/