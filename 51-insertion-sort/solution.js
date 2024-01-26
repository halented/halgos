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
    const swap = (a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    let i = 1;
    while (i < n) {
        // compare this element with those in the sorted segment 1 at a time. swap if lower. 
        let j = i - 1;
        let k = i;
        while (j >= 0) {
            if (arr[k] < arr[j]) {
                swap(k, j);
                k--;
            }
            j--;
        }
        i++;
    }
    return arr;
}

console.log('expected output: ', [5, 6, 11, 12, 13]);
console.log('actual output: ', insertionSort([12, 11, 13, 5, 6], 5));