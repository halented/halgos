/**
 * 
 * @param {number[]} arr - unsorted nums
 */
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 * 
 * @param {number[]} left - unsorted array of nums
 * @param {number[]} right - unsorted array of nums
 * @returns {number[]} - merged, sorted array of nums
 */
const merge = (left, right) => {
    const sorted = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        }
        else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right]
}
/**
 * here's what i need to sort out. each array only has one element. maybe? uhg i have to go through the iterations again. 
 * you get the array
 * you split it in half
 * [8,3] + [4,9]
 * you call merge. but before that call can actually complete, it calls mergeSort for left, and essentially we go down that whole branch until the left side numbers are down to one element per array, 
 * then you start calling mergeSort for right, and does it start calling this thing with big arrays? i guess not. cause it will only return if array length is less than 2 let's go through it though, with a small arr. 
 * 
 * call #1 mergeSort([8,3,9,4])
 * create [8,3], [9,4]
 * call #2 merge => immediate pause for
 * call #3 mergeSort([8,3])
 * create [8], [3]
 * call #4 merge => immediate pause for
 * call #5 mergeSort([8]) 
 * returns [8] <5/>
 * revisit call #4 => immediate pause for
 * call #6 mergeSort([3])
 * returns [3] <6/>
 * which means we revisit #4 again and actually enter the merge function, which immediately puts 
 * [3] into the array, then adds [3, [], [8]] (flattened to ) => [3,8]
 * merge returns [3,8] <4/>
 */