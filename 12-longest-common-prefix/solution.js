

var longestCommonPrefix = function(arr){
    // find the smallest string in the bunch.
    if(!arr[0]){return ""} 
    let smallest = arr[0]
    for(let i=1;i<arr.length;i++){
        if (arr[i].length < smallest.length){
            smallest = arr[i]
        }
    }
    // iterate thru smallest, checking all other elements in the array to see if their characters match. if at any point the characters do not match, exit and return the built up string of matches.
    let matches= ''
    for(let i=0;i<smallest.length;i++){
        let add = true;
        for(let j=0;j<arr.length;j++){
            if(arr[j][i] != smallest[i]){
                add = false;
                break;
            }
        };
        if(add != true){
           break;
        };
        matches += smallest[i];
    };
    return matches
}

console.log(longestCommonPrefix(["flower","flow","flight"]))