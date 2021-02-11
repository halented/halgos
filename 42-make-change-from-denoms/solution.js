// given an amount, and the potential denominations of that amount, return the number of ways that the amount could be broken up.
// ex: makeChangeWithDenoms(4, [1,2,3])
// => 4
// (1+1+1+1, 1+1+2, 1+3, 2+2)

const makeChangeWithDenoms = (amount, denoms) => {
    // we are returning a whole number, rep. how many ways the amount can be divided
    let possibilities = 0

    // assuming that the denoms are sorted low to high, remove unusable options. probably extra
    while (denoms[denoms.length - 1] > amount) {
        denoms.pop()
    }
    if (!denoms.length) { return 0 }

    for (let i = 0; i < denoms.length; i++) {
        // see if we can match the amount 
        if (amount % denoms[i] === 0) {
            // add one possibility.
            possibilities += 1
        }
        // check denoms below our current one.
        for (let j = i - 1; j >= 0; j--) {
            // subtract increasing multiplications of our current denom until we're at 0'
            let tempAmount = amount - denoms[i]
            while (tempAmount > 0) {
                if (tempAmount % denoms[j] === 0) {
                    possibilities += 1
                }
                tempAmount -= denoms[i]
            }
        }
    }
    console.log(possibilities)
}

makeChangeWithDenoms(4, [3])