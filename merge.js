"use strict";

function merge(arr1, arr2) {
  //return combined sorted array

  let combinedSort = [];
  //two pointers for each array, i, j
  let i = 0;
  let j = 0;

  //while i and j are < the length of respective arrays
  while (i < arr1.length && j < arr2.length) {
    //compare values: if arr1[i] > arr2[j] --> push arr2 & increment j
    if (arr1[i] > arr2[j]) {
      combinedSort.push(arr2[j]);
      j++;
      //else -> push arr1 & increment i
    } else {
      combinedSort.push(arr1[i]);
      i++;
    }
  }

  //if leftover i, push rest of i into array (increment each time)
  while (i < arr1.length) {
    combinedSort.push(arr1[i]);
    i++;
  }

  //if leftover j, push rest of j into array (increment each time)
  while (j < arr2.length) {
    combinedSort.push(arr2[j]);
    j++;
  }

  return combinedSort;
}

function mergeSort(arr) { 
  //recursively
    //split array into halves until you have arrays that have length of 0 and 1
    //merge split arrays and return the merged and sorted array
  if(arr.length<=1) return arr;
  // mid = middle of array
  let mid = Math.floor(arr.length/2);
  // left 0 to mid
  // right mid to end 
  let leftArray = arr.slice(0, mid);
  let rightArray = arr.slice(mid);
  
  let left = mergeSort(leftArray);
  let right = mergeSort(rightArray);
  
  return merge(left, right);
}

//[5,6]
//[5] and [6]
//merge([5],[6]) -> [5,6]

//[4,6,9,2]
//[4,6] and [9,2]
//[4] [6] and [9] [2]
//merge [4,6] and merge [2,9]
//merge [4,6,2,9]

module.exports = { merge, mergeSort };