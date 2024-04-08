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


// minWindowIterative("ADOBECODEBANC", "ABC")

const minWindowSliding = (s, t) => {
    let left = 0;
    let right = 0;
    let result = '';
    let tCopy = t;

    while (right < s.length) {
        if (!tCopy.length) {
            // if the t string copy is empty
            // this window is valid
            let validWindow = s.slice(left, right);
            if (!result.length || result.length > validWindow.length) {
                result = validWindow;
            }

            let tIndex = t.indexOf(s[left]);
            if (tIndex !== -1) {
                // if the character the left pointer sees exists within the t string
                // add it back into the tCopy string
                tCopy += s[left];
            }

            left += 1;
        }
        else {
            let tIndex = tCopy.indexOf(s[right]);
            if (tIndex !== -1) {
                // if the character the right pointer sees exists within the t string copy
                // remove it from the tCopy
                tCopy = tCopy.slice(0, tIndex) + tCopy.slice(tIndex + 1, tCopy.length);
            }
            right += 1;
        }
    }
    return result;
}

//BECODEBA
    // conceptually, this works by: starting two pointers, left and right, and moving the right one forward until a valid window is found, then moving the left one forward until it is invalidated, then moving the right one forward til it is revalidated or the end of the string is found. 
    // each time a character from the t string copy is found, it should be subsequently removed from the t string copy, and when the copy string is empty, we will know we have a valid window. when the left pointer comes across a character which appears in the (unaltered reference for the original) t string, it is added back into the copy string. 
// something needs to happen if the right pointer finds a character which:
//      - IS NOT in the t string copy
//      - IS in the original t string
// it stays out of the t string copy, but it kicks us over to the left pointer?
// no bc i would have no way of knowing about duplicates
// i feel like i'm missing something here. 
// right pointer goes til a valid window is found. we know we have a valid window because tCopy is empty. 
// we start moving left pointer. if left pointer hits on a character which exists within tOriginal, it invalidates the window by adding it to the tCopy string. 
// after that, we begin moving the right pointer forward. 
// if the right pointer encounters a character from tOriginal, it should check if that character exists within tCopy. if it does exist, remove it, revalidate the window. if it DOES NOT exist...then it only matters if we start moving left forward again and it comes across the same character 
// but wait. wouldn't right pointer know if left pointer is going to come across that character?
// one thing to add is that left pointer should never increment more than t.length amount closer to right pointer

// console.log(minWindowSliding("ADOBECODEBANC", "ABC"));

const minWindowMap = (s, t) => {
    const charFreq = new Map();
    for (const char of t) {
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let minLeft = 0, minRight = s.length - 1;
    let minLength = Infinity;

    while (right < s.length) {
        const char = s[right];
        if (charFreq.has(char)) {
            charFreq.set(char, charFreq.get(char) - 1);
        }

        while (isValidWindow(charFreq)) {
            if (right - left + 1 < minLength) {
                minLeft = left;
                minRight = right;
                minLength = right - left + 1;
            }

            const leftChar = s[left];
            if (charFreq.has(leftChar)) {
                charFreq.set(leftChar, charFreq.get(leftChar) + 1);
            }
            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.substring(minLeft, minRight + 1);
};

const isValidWindow = (charFreq) => {
    for (const count of charFreq.values()) {
        if (count > 0) return false;
    }
    return true;
};

console.log(minWindowMap("ADOBECODEBANC", "ABC"));