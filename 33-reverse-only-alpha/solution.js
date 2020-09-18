function simpleStrReverse(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}

function reverseInPlace(str) {
    // distance from the middle remains the same, but the opposite operator (+/-). we can just swap characters' positions until we get halfway through the string.
    let arr = str.split("")
    let half = Math.floor(str.length / 2)
    for (let i = 0; i <= half; i++) {
        let char = arr[i]
        // this will get us the position that it *should* be sitting at
        // for example, if the character iss origianlly at position 0 in a string with a length of 5, we should instead place it at position 4. halfway is 2 (rounded), 2-0 = 2, and 2+2 = 4.
        let position = half + (half - i)
        let swap = arr[position]
        arr[i] = swap
        arr[position] = char
    }
    return arr.join("")
}


console.log(reverseInPlace("abcde"))