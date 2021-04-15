const martingaleBets = (initWallet, targetWallet, initBet, prob) => {
    // probabilitity of winning is btwn 0 & 1
    if (prob > 1 || prob < 0) { return "Probability is invalid" }

    // execute bet until target is met or init wallet is 0
    // after every loss set current bet to twice prev bet
    let currentBet = initBet
    let won = 0
    let lost = 0
    let repeatedBets = {}

    while (initWallet > 0 && initWallet < targetWallet && initWallet >= currentBet) {
        let result = Math.random()
        console.log(result)
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
            currentBet = currentBet * 2
        }
    }

    // return # of rounds total, # won, #lost, wallet amount, # of times each amount was bet
    return { won, lost, total: won + lost, walletAmount: initWallet, repeatedBets }
}

// args: (initWallet, targetWallet, initBet, prob)
console.log("first => algorithm works with basic input")
console.log(martingaleBets(50, 200, 10, .3))

console.log("second => algorithm rejects bets too high")
console.log(martingaleBets(50, 200, 60, .6))

console.log("third => reports probability cheats")
console.log(martingaleBets(600, 1200, 100, 100))

console.log("fourth => reports probability cheats")
console.log(martingaleBets(600, 20000, 10, .4))
