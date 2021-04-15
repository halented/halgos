const martingaleBets = (initWallet, targetWallet, initBet, prob) => {
    // probabilitity of winning is btwn 0 & 1
    if (prob > 1 || prob < 0) { return "Probability is invalid" }

    // if anything has a bigint, convert all values to bigints so they play nicely together
    if (typeof (initWallet) === 'bigint' || typeof (targetWallet) === 'bigint' || typeof (initBet) === 'bigint') {
        initWallet = BigInt(initWallet)
        targetWallet = BigInt(targetWallet)
        initBet = BigInt(initBet)
    }

    // execute bet until target is met or init wallet is 0
    // after every loss set current bet to twice prev bet
    let currentBet = initBet
    let won = 0
    let lost = 0
    let repeatedBets = {}

    while (initWallet > 0 && initWallet < targetWallet && initWallet >= currentBet && currentBet > 0) {
        let result = Math.random()
        if (repeatedBets[currentBet]) {
            repeatedBets[currentBet] += 1
        }
        else {
            repeatedBets[currentBet] = 1
        }
        if (result <= prob) {
            // this is a win
            // set current bet to init bet, increase wallet
            won++
            initWallet += currentBet
            currentBet = initBet
        }
        else {
            // this is a loss
            // double prev bet, decrease wallet
            lost++
            initWallet -= currentBet
            // if we're dealing with bigint's, gotta keep the types the same
            currentBet = typeof (currentBet) === 'bigint' ? currentBet * 2n : currentBet * 2
        }
    }

    // return # of rounds total, # won, #lost, wallet amount, # of times each amount was bet
    return { won, lost, total: won + lost, walletAmount: initWallet, repeatedBets }
}

// args: (initWallet, targetWallet, initBet, prob)
console.log("1 => algorithm works with basic input")
console.log(martingaleBets(50, 200, 10, .3))

console.log("2 => algorithm rejects bets too high")
console.log(martingaleBets(50, 200, 60, .6))

console.log("3 => reports probability cheats")
console.log(martingaleBets(600, 1200, 100, 100))

console.log("4a => does not break on negative values")
console.log(martingaleBets(600, -40, 10, .4))

console.log("4b => does not break on negative values")
console.log(martingaleBets(600, 1200, -10, .4))

console.log("5 => does not break on big ints")
console.log(martingaleBets(700n, 1200, 100, .4))
