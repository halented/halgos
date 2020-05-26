// given 2 SVGStringList, determine if they share a common substring.

// checkSub("tide", "ide")
    // => "ide"


const checkSub = (str1, str2) => {
    if(strt1>str2){
        let hashy = helper(str1)
        return helper2(str2, hashy)
    }
    else{
        let hashy = helper(str2)
        return helper2(str1, hashy)
    }
}

const helper = (str) => {
//make a hash out of all possible substrings out of the longest string
    let hashy = {}
    for(let i=0; i<str.length; i++){
        for(let j=i; j<str.length+1-i; j++){
            hashy[str.substr(i, j)] = j
        }
    }
    console.log(hashy)
}

const helper2 = (str, hashy) => {
//iterate through the unused string to check for the existence of its potential substrings within the hash of the longer string's substrings

}

helper("tolerate")