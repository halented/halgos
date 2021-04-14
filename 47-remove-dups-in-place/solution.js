var removeDuplicates = function (nums) {
    let post = 0
    let checker = 1

    while (post < nums.length) {
        while (nums[post] === nums[checker]) {
            // find out how many dups there are
            checker++
        }
        if (checker - post === 1) {
            // we didn't see any duplicates, increment both and proceed to next loop
            post++
            checker++
        }
        else {
            // remove the appropriate amount of dupes, which will be one less than the amount we found
            let numToRemove = (checker - post) - 1
            nums.splice(post + 1, numToRemove)

            // increment post by one, since there's only one of that item now
            post++
            checker = post + 1
        }
    }
    return nums.length
}

const arr = [0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(arr))

