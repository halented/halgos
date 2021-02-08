// intersect([1,2,2,1],[2,2])
// => [2,2]
// intersect([4,9,5],[9,4,9,8,4])
// => [4,9]

// create a return array
// set a pointer to the first element in each array
// for the length of the longer array, begin iterating. if the pointers point to an element which matches, throw that element into a return array and increment both pointers. if the number in the shorter array is smaller than the number in the bigger array, increment its pointer so we can move those up and keep searching both decks. exit once we reach the end of the long array.

const intersect = (one, two) => {
    // sort both, then begin iterating through one of them til we find a matching number.
    one = one.sort((a, b) => a - b)
    two = two.sort((a, b) => a - b)
    let rtrn = one.length > two.length ? helper(one, two) : helper(two, one)
    return rtrn
}

const helper = (longer, shorter) => {
    let i = 0
    let j = 0
    let rtrn = []
    while (i < longer.length) {
        if (longer[i] === shorter[j]) {
            rtrn.push(longer[i])
            j++
            i++
        }
        else if (longer[i] > shorter[j]) {
            j++
        }
        else {
            i++
        }
    }
    return rtrn
}



console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
// [4,9]


console.log(intersect([1, 2, 2, 1], [2, 2]))
// [2,2]