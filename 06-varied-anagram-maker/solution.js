function randomGram(str){
    // make an empty string in order to build it back up
    let str2 = ''
    // iterate for the length of the string, counting down maybe, generating a random number to grab some character from the string, insert it into str2, and delete it from str

    let length = str.length

    for(let i=length; i>0; i--){
        let rndNum = Math.floor(Math.random()*str.length)
        str2 += str[rndNum]
        str = str.replace(str[rndNum], "")
    }
    return str2
}

console.log(randomGram("diana"))

// how could we alter this string in place?
// how could we solve this without On^2?

