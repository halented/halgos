// create a helper function that performs the operation we want to perform on each string, and then compare the results


function backspaceString(s, t){
    let newS = helper1(s)
    let newT = helper1(t)
    // remove hashtags with regex
    newS = newS.match(/[a-z]/g).join("")
    newT = newT.match(/[a-z]/g).join("")
    // this hits an error if the match winds up empty, as the .join() will fail
    return newS === newT
}

function helper1(str){
    // replace all characters in the string that should be spaces with hashtags
    let leng = str.length
    for(let i=0; i<leng; i++){
        if(str[i] != "#"){
            null
        }
        else {
            if(str[i-1] === "#" || str[i-1] === undefined){
                console.log("no action necessary")
            }
            else {
                let sub1 = str.substring(0, i-2)
                let sub2 = str.substring(i, str.length)
                str = sub1+"#"+sub2
            }
        }
    }
    return str
}

// using an array as a stack instead
function backspaceArray(S,T){
    let s1 = helper(S)
    let s2 = helper(T)
    return s1 === s2
}

function helper(str){
    let arr = []

    for(let i=0;i<str.length;i++){
        if(str[i] != "#"){
            arr.push(str[i])
        }
        else {
            arr.pop()
        }
    }
    return arr.join("")
}

console.log(backspaceArray("a##c","#a#c"))