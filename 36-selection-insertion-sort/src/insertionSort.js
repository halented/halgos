function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // 1. check if the previous item is greater than the current item
  // 2. if greater, the current item is not in place: swap it with the previous item
  // 3. repeat this process until the item is in the proper place
  // 4. only then move on to the next item in the collection
  for (let i = 0; i < arr.length; i++) {
    let item1 = arr[i]
    let item2 = arr[i-1]
    if(item1 < item2){
      // swap their places
      arr[i] = item2
      arr[i+1] = item1
    }
  }
  return arr
}


console.log(insertionSort([9,4,68,52,24,6789,1]))
