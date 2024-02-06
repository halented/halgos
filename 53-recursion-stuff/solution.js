// just using this one to help get a better in-the-gut understanding of recursion

const toThePowerOf = (base, power) => {
    // think about it upside down. to know what your return case will be, you need to know what the end of the line will look like (and what you need it to spit back up to the previous stack call)
    if (power === 1) {
        // if the function was originally called to the power of one, you do not need to change the base number. in the case of this function, this will only ever be hit one time.
        return base
    }

    // in every other case, drill down (creating a call stack) until you reach the first power. once you get there, the first return value is the base, and each call on the stack is multiplied by the base again, building on the last return value. 
    return base * toThePowerOf(base, power - 1);
}

// this we'll call a "linear recursive function" since it only dives down and back up -- it does not "branch out." (53-powers/power-linear-recursive.png)
// the merge sort and the fibo recursive functions both "branch out," meaning that the function calls itself not just once but *two* times, and it must resolve the branch of the first calls first, then once it reaches the top and has a return value for all of those, begin resolving the branch of second calls. 

const fib = (n) => {
    // it's the sum of the last two fib numbers, starting with 0 & 1.
    // for our first case, if we receive 1, we need to just return 1. 
    if (n <= 1) {
        return n;
    }
    // for all other cases, you want to add the last two fibs together, til you get down to 1. 
    return fib(n - 1) + fib(n - 2);
}
// lot easier than how i was thinking about it before

// okay so merge sort, in which you receive an array, you split it up over and over til you hit one element in the array on the left hand branch, and one element in the array on the right hand branch, and then you merge those and hand the result up to the next call. building the sorted array up in recusive calls that eventually spit out a single sorted array. so:

const merge = (l, r) => {
    // these are sorted already, so we just go left to right and pop them into a new array to return. 
    const sorted = [];
    while (l.length && r.length) {
        if (l[0] <= r[0]) {
            sorted.push(l.shift());
        }
        else {
            sorted.push(r.shift());
        }
    }
    return [...sorted, ...l, ...r];
}

const mergeSort = (arr) => {
    if (arr.length === 1) {
        // if we only have one element in the array, return that
        return arr
    }
    // otherwise, split up the array into left and rights
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // then feed those into mergeSorts to get sliced. the return value of each merge sort should be an argument in a merging function which combines the two arrays
    return merge(mergeSort(left), mergeSort(right));
}