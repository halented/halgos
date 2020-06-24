// one two, one one

function countAndSay(n){
    if(n===1){return '1'}
    // takes in a number and, beginning with 1, perform the countAndSay sequence *n* times. return the nth element in the sequence. 
    // start with 1
    let sequence = "1"
    // sequence has to change on each go around. 
    // perform count & say *n* number of times
    for(let i=1; i<n; i++){
        // iterate through the existing sequence. we probably need the iterator to jump tempCounter number of times, because we know that's how many dupes we counted
        let tempCounter;
        let newSequence = []
        for(let j = 0; j<sequence.length; j+=tempCounter){
            tempCounter = 1
            // temp counter is only tracking the number of duplicates and traversing the string

            while(sequence[j] === sequence[j+tempCounter]){
                tempCounter++
            }
            // when this while loop is done, we have tempCounter with the number of things we counted, and sequence[j] with the thing we were counting. so we need to begin builing the new sequence with those two things. we'll join this array at the end. 
            newSequence.push(tempCounter, sequence[j])
        }
        sequence = newSequence.join("")
    }
    return sequence
}

console.log(countAndSay(3))