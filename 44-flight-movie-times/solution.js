
// Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

// Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

const movieFinder = (flightLength, movieLengths) => {

    let pairs = {}
    for (let i = 0; i < movieLengths.length; i++) {
        if (pairs[movieLengths[i]]) {
            // if this number is already in the pairs list, then we have found a valid set.
            return true
        }
        // if it's not in the pairs list, add it.
        let complimentaryLength = flightLength - movieLengths[i]
        pairs[complimentaryLength] = true
    }
    // if we make it to the end, we didn't find a match.
    return false
}

console.log(movieFinder(120, [60, 70, 80]))

