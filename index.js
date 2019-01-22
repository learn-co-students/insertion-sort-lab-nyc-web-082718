function findMinAndRemove(array){
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    array[i] < array[minIndex] ? minIndex = i : null;
  }
  const min = array[minIndex];
  array.splice(minIndex, 1);
  return min;
}

function insertionSort(array){
  const sorted = [];
  const length = array.length
  for (let i = 0; i < length; i++) {
    sorted.push(findMinAndRemove(array));
  }
  return sorted;
}