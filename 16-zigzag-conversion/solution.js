var convert = function(str, numRows) {
//     make a matrix with the correct number of rows
    let retArr = new Array(numRows)
    for(let i=0;i<numRows;i++){
        retArr[i] = []
    }
//     if the length of the string is less than the rows, just return the string cause it isn't going to change
    if(str.length <= numRows){return str}

    let zig = true
    let rowCounter = 0
    for(let i=0;i<str.length;i++){

        cl(zig)
        // add characters into their proper position based on whether we are zigging or zagging
        
        if(rowCounter === 0){
            retArr[rowCounter].push(str[i])
            zig = true
            rowCounter += 1
        }
        else if (rowCounter === numRows-1){
            retArr[rowCounter].push(str[i])
            zig = false
            rowCounter -= 1
        }
        else if(zig){
            // move through column(index) starting with 0
            retArr[rowCounter].push(str[i])
            rowCounter += 1
        }
        else if (!zig){
            // do zag work
            retArr[rowCounter].push(str[i])
            rowCounter -= 1
        }
    }
    
    cl(retArr)
    // at the end, flatten and join return array
    return retArr.join("")
};

cl(convert("PAYPALISHIRING", 4))


function cl(input){
    console.log(input)
}


// console.log("i-1: ", i-1, "numRows: ", numRows)
//         if(i+1 === numRows){
//             // the first time around
//             cl('ye')
//             zig = false
//             rowCounter = retArr.length-2
//         }
//         else if(i != 0 && (i+cadenceFixer)%numRows === 0 && zig === true){
//             // every time this goes around i would need to be checking i, then 1+1, then i+2, and so on, because each time the extra false offsets the cadence 
//             zig = false
//             rowCounter = retArr.length-2
//         }
//         // i != 0 && i-1%(Math.floor(numRows/2)) === 0 && 
//         else if(zig === false){
//             zig = true
//             rowCounter = 0
//             cadenceFixer += 1
//         }