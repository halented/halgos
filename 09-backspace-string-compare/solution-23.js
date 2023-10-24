// areStringsEqual("ab#c", "ad#c")
// => true
// areStringsEqual("ab##","c#d#")
// => true
// areStringsEqual("a##c","#a#c")
// => true
// // backspaces which go over empty characters remain as empty characters
// areStringsEqual("##a","b")
// => false

/**
 * Determines if provided strings are equal after backspaces (represented by `#`) are calculated
 * @param {String} s 
 * @param {String} t 
 * @returns {Boolean}
 */

function areStringsEqual(s, t) {
    return applyBackspaces(s) === applyBackspaces(t)
}

/**
 * 
 * @param {String} str 
 * @returns {String}
 */
function applyBackspaces(str) {
    let converted = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i] === '#') {
            converted = converted.slice(0, -1)
        }
        else {
            converted += str[i]
        }
    }
    return converted
}

console.log(areStringsEqual("##a","b"))