var convert = function(str, numRows) {
//     make a matrix with the correct number of rows
    let retArr = new Array(numRows)
    for(let i=0;i<numRows;i++){
        retArr[i] = []
    }
    cl(retArr)
//     if the length of the string is less than the rows, just return the string cause it isn't going to change
    if(str.length <= numRows){return str}

// we need to iterate through the arrays, and inside that, through the string. The first iteration should go through *numRows* number of times, and place sequential string characters in the 0th index for each array. To determine the next step, we will take Math.floor(numRows/2), and iterate that number of times (this is the zag part). the array we insert the character into should never be the last. we start at retArr.length-2, iterating *backwards* or *up* the array. we push the character into the array.

// start zig as true so we start off moving through a column (index)
    let zig = true
    let columnCounter = retArr.length-2
    let rowCounter = 0
    for(let i=0;i<str.length;i++){
// we need a way to determine if we are zigging or zagging -- for instance, on the first four characters, we should just put them in the same column (index) for each array in the matrix. but at that point (when i is a multiple of 4) we begin zagging (the iteration which starts at retArr.length-2 and continues Math.floor(numRows/2) times). 
        cl(zig)
        if(zig){
            // move through column(index) starting with 0
            retArr[rowCounter].push(str[i])
            rowCounter += 1
        }
        else if (!zig){
            // do zag work
            retArr[rowCounter].push(str[i])
            rowCounter -= 1
        }

        if(i != 0 && (i+1)%numRows === 0 && zig === true){
            // if i is a multiple of numRows, we should switch between zigging and zagging
            // on the first iteration, it's important to do i+1 (why is that the case? because we've yet to introduce the jump, or the zag. once that's in, the cadence changes.), but on later iterations, all we need is to check if i is a multiple
            zig = false
            rowCounter = retArr.length-2
        }
        // i != 0 && i-1%(Math.floor(numRows/2)) === 0 && 
        else if(zig === false){
            zig = true
            rowCounter = 0
        }
    }
    
    cl(retArr)
    // at the end, flatten and join return array
    return retArr.join("")
};

cl(convert("PAYPALISHIRING", 3))


function cl(input){
    console.log(input)
}