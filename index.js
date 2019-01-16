function findMinAndRemove(array){
  let min = array[0]
  let minIndex
  for(let i = 0; i < array.length; i++){
    if (array[i] < min){
      minIndex = i
      min = array[i]
    }
  }
  array.splice(minIndex,1)
  return min
}

function insertionSort(array){
  let newMin
  let sorted = []
  while (array.length != 0){
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  return sorted
}
