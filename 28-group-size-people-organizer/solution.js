// TOTALLY not finished


function groupThePeople(sizes) {
    let ans = []
    let len = sizes.length
    // array containing arrays of grouped indexes (people)
    let tracking = {}
    for (let i = 0; i < len; i++) {
        tracking[i] = "unused"
    }
    // now we know none of them have been used yet

    
    for (let i = 0; i < len; i++) {
        let currentSize = sizes[i]
        if (currentSize === 0) {
            console.log("schrödinger's woman")
            tracking[i] = "used"
        }
        if (currentSize === 1) {
            // if it's one, it lives on its own.
            ans.push([i])
            tracking[i] = "used"
        }
        else {
            // otherwise, we know that there are at least currentSize number of this currentSize in the sizes array, and we must make an entry into the answers array and fill it with the right elements. we need a way of making sure that each size is accounted for once and only once
            let temp = [i]
            for (let j = i; j < len; j++) {
                // IF the size is right, the array isn't full yet, and the person hasn't already been assigned
                if(sizes[j] === currentSize && temp.length<currentSize && tracking[j] === "unused"){
                    temp.push(j)
                    tracking[j] = "used"
                }
            }
            ans.push(temp)
        }
    }
    return ans
}