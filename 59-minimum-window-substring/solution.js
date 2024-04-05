/**
 * 
 * @param {string} s - string from which the substring should be created
 * @param {string} t - string from which the characters to create the substring must be taken
 */
// NOTE: This version works but is unacceptably costly for long strings (rejected on Leetcode for one test exceeding time limit)
const minWindowIterative = (s, t) => {
    let result = ""
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const tIndex = t.indexOf(char)

        if (tIndex !== -1) { //IF #1
            let endPointer = i + 1;
            let substr = t.slice(0, tIndex) + t.slice(tIndex + 1, t.length);

            while (substr.length && endPointer < s.length) {
                // check if character we are on exists inside of this substr
                const substrIndex = substr.indexOf(s[endPointer])
                if (substrIndex !== -1) { //IF #2

                    substr = substr.slice(0, substrIndex) + substr.slice(substrIndex + 1, substr.length);
                }
                endPointer += 1
            } // end of while loop

            if (!substr.length) {
                let potentialMinWin = s.slice(i, endPointer);
                if (result === "" || result.length > potentialMinWin.length) {
                    result = potentialMinWin;
                }
            }
        } // end of check if character of s exists in string t
    } //end of original for loop

    return result;
}

// Notes:
/**
 * This is case-sensitive
 * For *s*, substring maintains order, so "ab" is a substring of "abc" but NOT a substring of "bac"
 * For *t*, only characters matter, so they may be rearranged to suit the substring.
 * In the end we will be using a slice, s.slice(i, endPointer)
 * EXAMPLE 1: Input: s = "ADOBECODEBANC", t = "ABC", Output: "BANC"
 * EXAMPLE 2: Input: s = "a", t = "a", Output: "a"
 * EXAMPLE 3: Input: s = "a", t = "aa", Output: "" (all characters from t must be used, so no substring can satisfy)
 * Idea #1: 
 *  - iterate though s
 *  - for each character, if it exists within t, 
 *      - create a substring of t minus the letter we found
 *      - begin a sub iteration of s from that point forward, looking for the rest of the letters, keep repeating this (needs more detail)
 */


console.log(minWindowIterative("ADOBECODEBANC", "ABC"));