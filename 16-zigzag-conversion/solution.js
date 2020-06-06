var convert = function(str, numRows) {
//     make a matrix with the correct number of rows
    let retArr = new Array(numRows)
    for(let i=0;i<numRows;i++){
        retArr[i] = []
    }
//     if the length of the string is less than the rows, or we only hvae one row, just return the string cause it isn't going to change
    if(str.length <= numRows || numRows === 1){return str}

    let zig = true
    let rowCounter = 0
    for(let i=0;i<str.length;i++){

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
    
    // at the end, flatten and join return array
    let retStr = ""
    for(let i=0;i<numRows;i++){
        retStr += retArr[i].join("")
    }
    return retStr
};


console.log(convert("PAYPALISHIRING", 4))