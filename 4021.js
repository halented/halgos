// given an array and a target, return the two numbers from the array whose sum is equal to the target

function twoSum(arr, targ) {
    const tracker = {}
    let dist;

    for (let num of arr) {
        if (tracker[num]) {
            // if the entry exists, this is a perfect matching
            return [num, tracker[num]]
        }
        // otherwise, add the new entry
        tracker[num] = targ - num
    }
    return false
}

// given an array and a target, return the two numbers from the array whose sum is closest to the target

// fisrt solution is O of n squared, with a nested for loop
function twoSumClosest(arr, target) {
    if (arr.length < 2) { return false }

    let closest = []

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let newDist = Math.abs(target - (arr[i] + arr[j]))
            let savedDist = Math.abs(target - (closest[0] + closest[1]))

            // if closest hasn't been defined yet OR 
            // if the new distance is smaller than the previously saved distance
            if (!closest.length || newDist < savedDist) {
                closest = [arr[i], arr[j]]
            }
        }
    }
    return closest
}

// second solution is O log N, sorting the array first to leverage having a predictable progression
function twoSumSorted(unsorted, target) {
    const arr = unsorted.sort((a, b) => a - b)

    let left = 0
    let right = arr.length - 1

    // if right - left reaches 1, we've gone thru all options
    while (right - left > 1) {

        // if the distance is zero it's an exact match, quit the funciton
        let distance = Math.abs(target - (arr[left] + arr[right]))
        if (distance === 0) { return [arr[left], arr[right]] }

        // otherwise, if the target is GREATER than the sum, move the left pointer up, and if the target is LESS than the sum, move the right pointer down.
        if (target > arr[left] + arr[right]) {
            left++
        }
        else if (target < arr[left] + arr[right]) {
            right--
        }
    }

    // if we've exited the loop, an exact match was not found
    return [arr[left], arr[right]]
}

console.log(twoSumSorted([1, 2, 3, 5, 6, 7, 8], 15))
