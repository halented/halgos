var numIdenticalPairs = function(nums) {
    // a pair of indices are good if the first index is lower than the second, and the element appearing at each of the indices are equal. for instance, 
    //     in the array [1,1,2], index 0 contains the element 1, and index 1 contains the element 1. The elements match, and index 0 is lower than index 1. (0,1) is a "good" pair.
    let count = 0
    for(let i=0;i<nums.length-1;i++){
        let current = nums[i]
        for(let j = i+1; j<nums.length; j++){
            if(current === nums[j]){
                count += 1
            }
        }
    }
    return count
};