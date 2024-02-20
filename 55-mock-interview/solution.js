const validInput = ["wrt", "wrf", "er", "ett", "rftt"];
// => w,e,r,t,f

/**
 * 
 * @param {string} leftWord - word from the input which is alphabetically before the rightWord
 * @param {string} rightWord - word from the input which is alphabetically after the leftWord
 * @returns {array} array of ordered letters
 */
const compare = (leftWord, rightWord) => {
    let i = 0;
    while (leftWord[i] === rightWord[i]) {
        i++;
    }
    if (leftWord[i] && rightWord[i]) {
        return [leftWord[i], rightWord[i]];
    }
    else return [...leftWord[i], ...rightWord[i]]
}
/**
 * 
 * @param {array} existing - Set of ordered letters
 * @param {array} additional - Array or ordered letters
 * @returns Array of ordered letters 
 */
const insert = (existing, additional) => {
    console.log('trying to merge: ', existing)
    console.log('with: ', additional);
    let leftLetter = additional[0];
    let rightLetter = additional[1];
    if (existing.includes(leftLetter) && existing.includes(rightLetter)) {
        // if these letters are already in there don't worry about it
        console.log('both letters existed');
        return existing;
    }
    let noMatchFound = true;
    // to insert, check if either letter exists in the set already. if it does, place its counterpart, and return.
    for (let i = 0; i < existing.length; i++) {
        // if we found the lefthand letter, place the right one
        if (existing[i] === leftLetter) {
            noMatchFound = false;
            existing.splice(i + 1, 0, rightLetter)
            break
        }
        else if (existing[i] === rightLetter) {
            noMatchFound = false;
            existing.splice(i - 1, 0, rightLetter)
            break
        }
    }
    if (noMatchFound) { existing.push(leftLetter, rightLetter) }
    return existing;
}

/**
 * 
 * @param {array} arr - "valid and complete" input: this will contain all the letters from the undocumentated language in a series of words which are in alphabetical order.
 */
const determineOrder = (arr) => {
    /*
        step 1: take two adjacent words from the list and compare them
        step 2: if the first two letters are different, put them into an "ordered" array (or some such structure). if the first two letters are the same, step forward by one letter in each word until you find two letters that are not the same, then capture those
        step 3: if the characters do not yet exist in the return array, push them onto the end. if one does exist, slot its counterpart into the right space (before or after depending). if both exist, do nothing, move to the next pair of words to compare.
        step 4: return alphabetized array of letters.....? 
    */
    let ordered = [];
    for (let i = 0; i < arr.length; i++) {
        // each word's first letter MUST enter the ordered array
        ordered.includes(arr[i][0]) && ordered.push(arr[i][0]);
        if (arr[i + 1]) {
            ordered = insert(ordered, compare(arr[i], arr[i + 1]));
            console.log('merged, created: ', ordered);
        }
    }
    return ordered;
};

console.log('FINAL RESULT: ', determineOrder(validInput));

/**
  [ [ 't', 'f' ], [ 'w', 'e' ], [ 'r', 't' ], [ 'e', 'r' ] ]
        => after two iterations: ['t', 'f', 'w', 'e']
    3rd: INPUT ['t', 'f', 'w', 'e'], [ 'r', 't' ]
        => ['r', 't', 'f', 'w', 'e']
    4th: INPUT ['r', 't', 'f', 'w', 'e'], [ 'e', 'r' ]
        => ['r', 't', 'f', 'w', 'e']

    so in this final one, e and r already exist. struggling because using only these two pieces of information, we let 'e' go to the front of the list, and we WANT to let everything else follow, but we would get [ 't', 'f', 'w', 'e', 'r'] with nothing to refute this, even though previously processed arrays give info about the location of t, f, w, e.
    i know thomas said that the first step of gathering all the first letters wasn't really necessary, but it would have stopped us from having this problem. 
 */