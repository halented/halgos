var twoSum = function(nums, target) {
    // build a dictionary of each num's match as a key with a value of the index. once we find a num whose match is already a key in the dictionary, save whatever *i* happens to be and then find the index of the

    let dict = {}

    for(let i=0;i<nums.length;i++){
        let currentNum = nums[i]
        if(dict[`${currentNum}`] || dict[`${currentNum}`] === 0){
            return [i, dict[currentNum]]
        }
        else {
            let match = target-currentNum
            dict[match] = i
        }
    }
    return 0
};

console.log(twoSum([2, 7, 11, 15], 9))

// fun times with 0 being a falsy value