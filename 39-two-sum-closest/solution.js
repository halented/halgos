const inputArray = [1, 17, 89, 4, 2, 45, 26, 3]
const inputTarget = 26

function closestSum(arr, target) {
    // one long option is to build a hash with all possible sums as keys, and an array containing both numbers as values, then iterate over that hash and find which entry is closest to target
    // not sure how to do that without nested iterations to create all possible sums, but let's do it and see if we can optimize later
    let possibilities = {}
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            let next = arr[j]
            let sum = curr + next
            possibilities[sum] = [i, j]
        }
    }
    let closest = Object.keys(possibilities)[0]
    for (const key of Object.keys(possibilities)) {
        //target is closer to this current key than closest
        if (Math.abs(target - key) < Math.abs(target - closest)) {
            // change this one to the closest
            closest = key
        }
    }
    return possibilities[closest]
    // this is O(n^2)
}

function twoSumClosest(arr, target) {
    const sorted = arr.sort(function (a, b) { return a - b })
    let left = 0
    let right = arr.length - 1
    let closest = [arr[left], arr[right]]
    while (left < right) {
        // if the two numbers we are on add up to a sum that is less than the target, we should move the left pointer because we need a higher value.
        if (arr[left] + arr[right] < target) {
            if (Math.abs(target - (arr[left] + arr[right])) < Math.abs(target - (closest[0] + closest[1]))) {
                closest = [arr[left], arr[right]]
            }
            left++
        }
        else {
            if (Math.abs(target - (arr[left] + arr[right])) < Math.abs(target - (closest[0] + closest[1]))) {
                closest = [arr[left], arr[right]]
            }
            right--
        }
    }

    return closest
}

console.log(twoSumClosest(inputArray, inputTarget))