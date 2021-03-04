var addToArrayForm = function (A, K) {
    // build up the num
    if (!K) { return A }
    let total = 0
    for (let i = 0; i < A.length; i++) {
        // add the int to our total
        total = total * 10 + A[i]
    }
    total += K
    A = []
    // return to array form, unshifting each popped integer
    while (total > 0) {
        let temp = total % 10
        total = Math.floor(total / 10)
        A.unshift(temp)
    }
    return A
};