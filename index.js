//Begin by implementing a function to find the minimum in an array and remove that element.

function findMinAndRemove(array) {
  // let newArray = [];
  let minArray = array[0];
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < minArray) {
      minIndex = i; //holds the element of i
      minArray = array[i];
    }
  }
  array.splice(minIndex, 1);
  return minArray;
}


//Move on to implement the insertion sort function, and call on the minAndRemove function in its implementation.

function insertionSort(array) {
  let sortedArray = [] //holds empty list to push "minimum" numbers in a list
  let minElement; // variable will hold each element that executed from findMinAndRemove
  while(array.length != 0) { //iterate through the original list
    minElement = findMinAndRemove(array) //swap minimum array element into minElement variable
    sortedArray.push(minElement) // push this minimum element to the new list
  }
  return sortedArray;//return the new sorted list
}

//Big O for insertionSort is n^2, since it costs O(n) to be able to find the minimum element,
//and O(n) to iterate the array and push it into a new list (n) times.
