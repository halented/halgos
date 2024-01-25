/**
 * 
 * @param {number[]} arr - unsorted list of nums
 * @param {number} n - length of that list
 */
const insertionSort = (arr, n) => {

    /**
     * 
     * @param {number} a - index of first element to swap
     * @param {number} b - index of second element to swap
     */
    const swap = (a,b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    let i = 1;
    while (i < n) {
        // compare this element with those in the sorted segment 1 at a time. swap if lower. 
        arr[i]
    }
}