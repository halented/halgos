function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // find the smallest item in the unsorted portion of the array and swap it with the current item
  // this solution is like O of 1 million squared
  for (let i = 0; i < arr.length-1; i++) {
    let item = arr[i]
    let min = {val: null, dex: null};
    for (let j = i + 1; j < arr.slice(i).length; j++) {
      if (arr[j] < min.val || !min.val) {
        min.val = arr[j]
        min.dex = j
      }
    }
    console.log(min)
    arr[min.dex] = item
    arr[i] = min.val
  }
  return arr
}

console.log(selectionSort([3, 5, 1]))