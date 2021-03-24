# Data Structures and Algorithms
# 401 JavaScript Code Challenges

# 27- MergeSort
[MergeSort](challenges/mergeSort/mergeSort.js)

## Merge Sort
### How does it work?
- First splits an array in half
- Then splits those in half
- Until each element is in it's own array
- Then, it starts merging them back together
- Comparing sorted arrays is easier than unsorted
### Merging Portion
- To complete a merge-sort, you first need a function for merging two sorted arrays.
- When you have two sorted arrays, the helper function will return a new array which consists of all elements from the two input arrays
- Will run on O(n + m) time and O(n + m) space and will not modify the paramaters passed to it
### Pseudocode
- Create an empty array to be returned at the end
- First look at the smallest values in each input array
  - Typically use a while loop ("while" we still haven't looked at every element/there are elements left)
    - If the value of first value in first array is smaller than first value value in the second array, push that value into return array, then move on to next value in first array
    - If the value of the firsty value in the first array is LARGER than the first value in the second array, we push the value of the SECOND array into the return array and move on to the next value in the SECOND array
      - Once one array is exhausted, push all remaining values in the return array

## Sorting Portion
- Break the array into halves until you have arrays that are empty or have one element
- Once we have those sorted arrays we merge them back with our merge function
- Seems simple, but isnt!
- Once merged, return the final (merged and sorted) array!

## Merge-Sort Big O
- Time (Best, Avg, & Worse): O(n log n)
- Space: O(n)

### Resources
- Collaborated with: Carly Dekock, Jason Quaglia, Jason Dormier, Seid MO
- Udemy js-algorithms-and-data-structures-masterclass by Colt Steel: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/