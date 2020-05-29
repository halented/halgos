var singleNumber = function(nums) {
    //     quadratic time: iterate thru nums, for each num, iterate thru nums. return the number if it is not found (could probably use a ternary, like nums.find(nums[i]) ? null: return nums[i])
    //     linear time: create a hashmap of the array, with keys of each element and values of how many times it appears. at the end, return the key whose value is 1
    //     linear time, no extra memory: sort the array. iterate with for loop, stepping by i+2 each time rather than i+1. if at any point, we see a moment when nums[i] != nums[i+1,], return nums [i]
        nums = nums.sort((a,b)=>a-b)
        for(let i=0; i<nums.length; i+=2){
            if(nums[i] != nums[i+1]){
                return nums[i]
            }
        }
    };