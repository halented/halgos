/**
 * 
 * @param {number[]} arr - unsorted array
 * @param {number} n - size of array
 */
const selectionSort = (arr, n) => {

    /**
     * 
     * @param {number} a - index in the array we started at
     * @param {number} b - index of the element of lowest value that is yet unsorted
     */
    const swap = (a, b) => {
        let valueOfA = arr[a];
        arr[a] = arr[b];
        arr[b] = valueOfA;
    }

    let i = 0;
    let j = 1;

    while (i < n) {
        let lowestValueIndex = j;
        for (j; j < n; j++) {
            if (arr[lowestValueIndex] > arr[j]) {
                lowestValueIndex = j;
            }
        };
        if (arr[i] > arr[lowestValueIndex]) {
            swap(i, lowestValueIndex);
        }
        i++;
        j = i + 1;
    };
    return arr;
}

console.log('expected output: ', [1, 2, 3, 4, 6, 8, 9], '\n');
console.log('actual output', selectionSort([1, 8, 4, 6, 3, 9, 2], 7));