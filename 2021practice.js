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

console.log(fib(4)) 