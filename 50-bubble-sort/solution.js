/**
 * 
 * @param {number[]} arr - unsorted nums
 * @param {number} n - length of array
 */
const bubbleSort = (arr, n) => {

    /**
     * 
     * @param {number} a - first index at which to swap
     * @param {number} b - second index at which to swap
     */
    const swap = (a, b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp
    }

    while (n > 0) {
        let i = 0;
        let j = 1;
        for (j; j < n; j++) {
            if (arr[i] > arr[j]) {
                swap(i, j);
            }
            i++;
        }
        n--;
    }
    return 'result: ' + arr;
}

console.log(bubbleSort([5, 2, 1, 7, 6, 8, 3], 7));
console.log('expected output: ', [1, 2, 3, 5, 6, 7, 8]);