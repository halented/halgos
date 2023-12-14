/**
 * Given a string of unique characters, return all permutations of the string in a set.
 * @param {String} str - String of all unique characters
 * @param {Number} [maxPermutations = null] - The number of permutations this string can make
 * @param {Object<Set>} [set = null]  - Set of permutations from original string
 * @returns {Object<Set>}
 */
function getPermutations(str, maxPermutations = null, set = null) {
    // If this is the first call
    if(!maxPermutations) {
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
    for (let i=0; i < str.length; i++) {
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