function pig(str) {
    const vowels = 'aeiou'
    if (vowels.includes(str[0])) { return str + 'way' }
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        if (vowels.includes(letter)) {
            // using i, find out how many letters down we had to go and slice the array there, putting whatever was sliced off back onto the end
            arr.push(arr.splice(0, i).join(""))
            return arr.join("") + 'ay'
            // had to use .join twice to get rid of the nested array
        }
    }
}

console.log(pig("granted"))