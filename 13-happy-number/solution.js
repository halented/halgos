// Starting with any positive integer *n*, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (at which it will stay) or until it loops endlessly in a cycle which does not include 1. The numbers for which the process ends in 1 are happy numbers. 

const isHappy = function(n){
    // add all previous instances of n into an array, so that we can see what an endless loop actually looks like
    while (true){
        if(n===1){
            return true
        }
        if(n > 1 && n <= 4){
            return false
        }
        n = getSquares(n)
    }
}

// below will take any number and return to you the total of its squares
const getSquares = function(num){
    // first, create an array of all squared, individual digits...er, maybe just add all the squared nums up until num itself is no longer larger than 1
    // 
    let squaredNums = 0
    while(num>1){
        // grab last digit & add to total
        let lastDig = num%10
        squaredNums += (lastDig*lastDig)
        // remove digit from num
        num = Math.floor(num/10)
    }

    return num === 1 ? squaredNums+1 : squaredNums
}

console.log(isHappy(225))