const romanToInt = function (str) {
    // create a num which will be our return value. start at 0
    let num = 0
    // if there's nothing in the string, all done. 
    if (!str) { return num }

    // dictionary to lookup values
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // iterate through string. if the character is followed by a character which evaluates to a higher number than itself, do some math to it and add it to the num. if not, just add it to the num.
    for (let i = 0; i < str.length; i++) {
        let currentNum = dict[str[i]]
        let followingNum = dict[str[i + 1]]
        if (currentNum < followingNum) {
            num += (followingNum - currentNum)
            // skip the following num so we don't add it twice
            i++
        }
        else {
            num += currentNum
        }
    }
    return num
}

// console.log(romanToInt(""))
console.log(romanToInt("MCMXCIV"))
