// Kangaroo Circus
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
// The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return "YES", otherwise return "NO".

// For example, kangaroo 1 starts at x1=2 with a jump distance v1=1 and kangaroo 2 starts at x2=1 with a jump distance of v2=2. After one jump, they are both at x=3, (x1+v1 = 2+1, x2+v2 = 1+2) so our answer is YES.

// Input Format:
// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.
// Output Format:
// Print YES if they can land on the same location at the same time; motherwise, print NO.

// Test cases
// console.log(kangaroo(0, 3, 4, 2)) 
// => YES
// kangaroo(1,1,0,2)
// => YES
// kangaroo(0,2,0,4)
// => NO

function kangaroo(kang1, vel1, kang2, vel2) {
    // if the unknown number, when separately multiplied by each velocity and added to each kangaroos current position spits out the same number for both, return YES
    // seems like some fractions and stuff would be able to determine if the unknown number exists. alternatively, there is an iterative way to do this:
    // start a while loop, and while the further back kangaroo stays in the back, continue to add each velocity to the kangaroo's positions. if we reach a moment in that iteration when the positions match, halt and return yes.
    // if we exit the while loop, return NO. 

    // if the kangs are at the same spot, we're already done
    if (kang1 === kang2) {
        return "YES"
    }

    // otherwise, sort out which one is behind and start looping
    // kangaroo(0,3,4,2)
    let trailing
    let trailVel
    let leading
    let leadVel

    if (kang1 > kang2) {
        trailing = kang2
        trailVel = vel2
        leading = kang1
        leadVel = vel1
    } else if (kang2 > kang1) {
        trailing = kang1
        trailVel = vel1
        leading = kang2
        leadVel = vel2
    }

    // if the one that's behind is going slower, don't try the while loop
    if (trailVel <= leadVel) {
        return "NO"
    }

    while (trailing <= leading) {
        if (trailing === leading) {
            return "YES"
        }
        trailing += trailVel
        leading += leadVel
    }
    return "NO"
}

// Find the Next Greatest Number in an array

// - You are given an array. For each element, print out that element and the next number in the array which is greater than it.

// - If there is no element greater, print -1.

// nextGreatest([4, 3, 5])
// nextGreatest([51, 13, 5, 4, 9, 23])
// =>  {4:5, 3:5, 5:-1}

function nextGreatest(arr) {
    // start a for loop i think would be easiest. put a pointer where we are, and a pointer at the next place. do a lil while loop while the leading pointer still doesnt point to anything higher than our trailing pointer.

    let results = {}

    for (let i = 0; i < arr.length; i++) {
        let j = i + 1
        while (j < arr.length) {
            if (arr[j] > arr[i]) {
                results[arr[i]] = arr[j]
                break
            }
            j++
        }
        if (j === arr.length) {
            results[arr[i]] = -1
        }
    }
    console.log(results)
}

// Find the Nth Fibonacci Number

// Given a number *n*, return the related Fibonacci number. Assume that 0 is the 0th number in the fib sequence, and count up from there. 1 would be the first number, 1 would be the second number, 2 the third, and 3 the fourth.

// fib(0)  # => 0
// fib(1)  # => 1
// fib(2)  # => 1
// fib(3)  # => 2
// fib(4)  # => 3

// Source:

// [Interview Cake](https://www.interviewcake.com/question/ruby/nth-fibonacci)

// [Fibo Info](https://en.wikipedia.org/wiki/Fibonacci_number)
// each number is the sum of the two preceding ones, starting from 0 and 1

function fib(numOfSequences) {
    // *numOfSequences* number of times, do the fibbonacci thing, starting with 0 & 1.
    if (!numOfSequences) { return 0 }
    let recursionCount = 1
    function helper(val1, val2) {
        if (numOfSequences === recursionCount) {
            return val2
        }
        else {
            const val3 = val1 + val2
            recursionCount++
            return helper(val2, val3)
        }
    }
    return helper(0, 1)
}

// Varied Anagram Maker

// - Given a string, return an anagram of the string. 
// - The function, given the same string, should generate a different anagram each time (results may be repeated by chance)

function anagram(str) {
    // make an array by randomly popping characters out of the string until the length is zero
    // join & return
    let keeper = []
    while (str.length > 0) {
        let i = Math.floor(Math.random() * str.length)
        keeper.push(str[i])
        str = str.replace(str[i], "")
    }
    return keeper.join("")
}

// Find Intersection of Arrays

// - Given two arrays, write a function to compute their intersection. 

// ## Examples

// ```javascript
//     intersect([1,2,2,1],[2,2])
//         => [2,2]
//     intersect([4,9,5],[9,4,9,8,4])
//         => [4,9]
// ```

// ## Constraints
// - Each element in the result should appear as many times as it shows in both arrays.
// - The result can be in any order.

const crossSection = (one, two) => {
    // first thought: an inefficient way of solving this would be to find the shorter array, start iterating through it, and for each number, iterate thru the longer one to see if it's in there. if so, start incrementing both counters by one, collecting the results into a return array until the two iterators no longer point to a matching character or number. then exit the loop & return the filled array. 
    let shorter
    let longer
    let intersection = []
    if (one.length > two.length) {
        shorter = two
        longer = one
    } else {
        shorter = one
        longer = two
    }
    // this already sucks so bad because i think i doubled the amount of space being used, oh well for now
    let shortCounter = 0
    let longCounter = 0
    while (shortCounter < shorter.length) {
        while (longCounter < longer.length) {
            let comparable = longer[longCounter]
            let current = shorter[shortCounter]
            console.log("does shortCounter get incremented? ", shortCounter)
            if (current === comparable) {
                intersection.push(current)
                longCounter += 1
                shortCounter += 1
            } else {
                longCounter += 1
            }
        }
        shortCounter += 1
    }
    return intersection
}

// intersect([1, 2, 2, 1], [2, 2])


// it appears i misunderstood the question. it's not where the numbers match up, it's how many numbers in common they share, regardless of location.

const intersect = (one, two) => {
    // sort both, then begin iterating through one of them til we find a matching number.
    one = one.sort((a, b) => a - b)
    two = two.sort((a, b) => a - b)
    let rtrn = one.length > two.length ? helper(one, two) : helper(two, one)
    return rtrn
}

const helper = (longer, shorter) => {
    let i = 0
    let j = 0
    let rtrn = []
    while (i < longer.length) {
        if (longer[i] === shorter[j]) {
            rtrn.push(longer[i])
            j++
            i++
        }
        else if (longer[i] > shorter[j]) {
            j++
        }
        else {
            i++
        }
    }
    return rtrn
}

// console.log(intersect([1, 2, 2, 1], [2, 2]))
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

// Given an array of non-negative integers return the number which appears just once. All other numbers will appear twice. 

const findSingle = (arr) => {
    // O log N
    arr = arr.sort((a, b) => a - b)
    let i = 0
    while (arr[i] === arr[i + 1]) {
        i += 2
    }
    return arr[i]
}
// console.log(findSingle([1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6]))

// find longest common prefix
var longestCommonPrefix = function (arr) {
    // not sure if this counts as quadratic time because we're iterating through the array comp.length amount of times. which isn't....exponential 
    if (!arr[0]) { return "" }
    let prefix = ''
    let comp = arr.shift()
    for (let i = 0; i < comp.length; i++) {
        let currentChar = comp[i]
        for (let j = 0; j < arr.length; j++) {
            if (currentChar !== arr[j][i]) {
                return prefix
            }
        }
        prefix += currentChar
    }
    return prefix
}

longestCommonPrefix(["flower", "flow", "floyd"])
//  => "flo"

// make change


const makeChange = (amnt) => {
    // assuming the amount is given in cents -- if it were given in dollars, would just have to multiple the amount by 100 and do the same thing.
    let q = Math.floor(amnt / 25)
    amnt = amnt - (q * 25)
    let d = Math.floor(amnt / 10)
    amnt = amnt - (d * 10)
    let n = Math.floor(amnt / 5)
    amnt = amnt - (n * 5)
    return { q, d, n, p: amnt }
}

// console.log(makeChange(116))

// Given a number *n*, determine if the number is "happy". For the purposes of this prompt, "happy" is defined by the following process:

// Starting with any positive integer *n*, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (at which it will stay) or until it loops endlessly in a cycle which does not include 1. The numbers for which the process ends in 1 are happy numbers. 

const happyNum = (num) => {
    let sums = { [num]: true }
    while (num !== 1) {
        let tempTotal = 0
        while (num > 0) {
            tempTotal += (num % 10) * (num % 10)
            num = Math.floor(num / 10)
        }
        if (sums[tempTotal]) {
            return false
        }
        sums[tempTotal] = true
        num = tempTotal
    }
    return true
}

// console.log(happyNum(19))
// => true

// convert roman numeral to an integer
// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// romanToInt("III")
// => 3
// romanToInt("IV")
// => 4
// romanToInt("IX")
// => 9
// romanToInt("LVIII")
// => 58
// romanToInt("MCMXCIV")
// => 1994

const romanToInt = (roman) => {
    const dict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    // iterate through roman with two pointers, one goes forward to check if the next letter is "higher" than the one we are on. if not, add the one we are on to the total, and move both pointers forward one.
    let i = 0
    let total = 0
    while (i < roman.length) {
        let j = i + 1
        if (roman[j] === 'I') {
            // if the next character is I, iterate up to three times to find out how many I's to add to our current character, add the total to our running total, and increment i by however many iterations you did plus one. 
            while (roman[j] === 'I') {
                total += 1
                j++
            }
            total += dict[roman[i]]
            i += (j - i + 1)
        }
        else if (dict[roman[j]] <= dict[roman[i]]) {
            // if the next character is higher OR a character is repeated, we know these don't interact, so add the conversion to the total and increment i by one
            total += dict[roman[i]]
            i++
        }
        else if (roman[i] === "I" || roman[i] === "X" || roman[i] === "C") {
            // if it's one of the characters that can be subtracted, do so and then add the amount to the total and then increase i by two
            total += (dict[roman[j]] - dict[roman[i]])
            i += 2
        }

    }
    console.log(total)
}
// romanToInt("III")
// romanToInt("IV")
// romanToInt("IX")
// => 9
// romanToInt("LVIII")
// => 58
// romanToInt("MCMXCIV")

// Given an array of integers and a traget, return the sum of the three integers which add up closest to the target. 

const threesome = (arr, targ) => {
    // iterative version: for each num arr[i], iterate through the array twice to check possible combinations of three. 
    // track the closest distance along the way.
    // this is beyond quadratic time
    let closest = null

    for (let i = 0; i < arr.length - 2; i++) {
        let first = arr[i]
        for (let j = i + 1; j < arr.length - 1; j++) {
            let second = arr[j]
            for (let k = j + 1; k < arr.length; k++) {
                let total = first + second + arr[k]
                if (Math.abs(targ - total) < Math.abs(targ - closest) || closest === null) {
                    closest = total
                }
            }
        }
    }
    return closest
}

var threeSumClosest = function (arr, target) {
    //     gonna be returning an int, and need to keep track of the minimum distance to the target
    let sum = 0
    let minDist = false
    // we will have to determine all possible combinations of 3 for the nums provided. along the way, track which is closest to the target, and only reset the sum variable if the distance to the target is less than the previously set minimum

    //     now how to determine all possible combinations of an array 🤣  r/restOfTheOwl
    for (let i = 0; i < arr.length - 2; i++) {
        //first pointer starts at the beginning of the array, stops 3 from the end
        let j = i + 1;
        let starter = arr[i]
        while (j < arr.length - 1) {
            //second pointer starts one further than the first, stops 2 from the end
            let k = j + 1
            let second = arr[j]
            while (k < arr.length) {
                // third pointer starts 2 further than the first, stops at the end
                let total = starter + second + arr[k]
                //if we hit it, return it!
                if (total === target) { return target }
                let dist = Math.abs(target - total)

                //at the end, check if this is the shortest distance so far
                if (!minDist || minDist > dist) {
                    minDist = dist;
                    sum = total;
                }
                k++
            }
            j++
        }
    }
    return sum
};

// console.time('checker')
// console.log(threesome([-1, 0, 1, 2, -1, -4], 0))
// console.timeEnd('checker')

// console.time('chacker')
// console.log(threesome([-1, 0, 1, 2, -1, -4], 0))
// console.timeEnd('chacker')
// the while loops, which are logistically doing the exact same thing, are **ten times faster** than the nested for loops

