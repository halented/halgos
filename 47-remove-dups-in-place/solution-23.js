// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

/**
 * 
 * @param {Array} nums 
 * @returns {Number}
 */
const removeDupes = (nums) => {
    let i = 0
    while (i < nums.length) {
        let j = i + 1
        if (typeof nums[i] === 'number' && nums[i] === nums[j]) {
            while (nums[i] === nums[j]) {
                j++
            }
            nums.splice(i, (j - i - 1))
        }
        i++
    }
    return nums.length
}

removeDupes([1])
