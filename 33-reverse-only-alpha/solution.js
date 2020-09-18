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

function reverseAlphanumeric(str) {
    // make it an array. iterate thru, form a new array with all the alphanumeric characters (replacing them with null in the original array). reverese the alphanumeric array, and then fill in the blank spots of the original array with the reversed characters from the new array.
    // fill arr with alphanum chars, remove those from a separate array
    let arr = []
    let gutted = str.split("").map(x => {
        if (x.match(/^[a-zA-Z0-9]*$/)) {
            arr.push(x)
            return null
        }
        else {
            return x
        }
    })

    // reverse the alphanumeric characters in their array
    let half = Math.floor(arr.length / 2)
    for (let i = 0; i <= half; i++) {
        let char = arr[i]
        let position = half + (half - i)
        let swap = arr[position]
        arr[i] = swap
        arr[position] = char
    }

    // now we have a gutted array and an array full of reversed characters
    for (let i = 0; i < gutted.length; i++) {
        if (gutted[i] === null){
            gutted[i] = arr.shift()
        }
    }

    return gutted.join("")
}


console.log(reverseAlphanumeric("/!#$ye.s"))