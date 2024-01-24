/**
 * Given a string of unique characters, return all permutations of the string in a set.
 * @param {String} str - String of all unique characters
 * @param {Number} [maxPermutations = null] - The number of permutations this string can make
 * @param {Object<Set>} [set = null]  - Set of permutations from original string
 * @returns {Object<Set>}
 */
function getPermutations(str, maxPermutations = null, set = null) {
    // If this is the first call
    if (!maxPermutations) {
        maxPermutations = getFactorial(str.length)
        set = new Set
        set.add(str)
    }

    // If all permutations are present
    if (set && set.size === 12) {
        console.log('break condition')
        return set
    }

    // iterate over the string and add permutations into the set.
    let char = str[0]
    for (let i = 0; i < str.length; i++) {
        str = str.replace(char, '')
        str = str.slice(0, i) + char + str.slice(i, str.length)
        set.add(str)
    }
    console.log(set.size)
    return getPermutations(str, maxPermutations, set)
}

/**
 * Get the factorial of any number.
 * @param {Number} num - Number for which we are calculating the factorial
 * @param {Number} [sum = 1] - Sum of previous iterations
 * @param {Number} [i = 2] - Tracks which iteration we are currently on
 * @returns {Number}
 */
function getFactorial(num, sum = 1, i = 2) {
    if (i > num) {
        return sum
    }
    sum = sum * i
    i++
    return getFactorial(num, sum, i)
}

console.log(getPermutations('1234'))

// from https://www.youtube.com/watch?v=xghJNlMibX4&ab_channel=JustinKim heap's for array
const permute = (arr) => {
    const output = []
    /**
     * Swaps the place of two elements in a given array
     * @param {Array} arrToSwap - array containing at least two elements
     * @param {Number} indexA - first position
     * @param {Number} indexB - second position
     * @returns undefined
     */
    const swap = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA]
        arrToSwap[indexA] = arrToSwap[indexB]
        arrToSwap[indexB] = temp
    }
    /**
     * 
     * @param {Number} n = length of array
     * @param {Array} heapArr 
     */
    const generate = (n, heapArr) => {
        if (n === 1) {
            return output.push(heapArr.slice())
        }

        generate(n - 1, heapArr)

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                // if it's even, swap it at i
                swap(heapArr, i, n - 1)
            }
            else {
                // if it's odd, swap it at 0
                swap(heapArr, 0, n - 1)
            }

            generate(n - 1, heapArr)
        }
    }
}

// permute([1,2,3])