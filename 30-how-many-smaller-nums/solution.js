var smallerNumsThanCurrent = function (nums) {
    // return an array, and in place of each num, instead report the amount of other numbers in the array which are smaller than it.
    let counts = []
    // brute force: iterate through nums. for each num, iterate through the rest of them and build a count, which is dropped into the counts array.
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        let tempCount = 0

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < current) {
                tempCount += 1
            }
        }

        counts.push(tempCount)
    }

    return counts
}

function alt(nums){
    // let indexSaver = {8:0, 1:1}
    // let countSaver = {8:1, 1:0}
    let countSaver = {}
    let indexSaver = {}
    for(let i=0;i<nums.length;i++){
        let currentNum = nums[i]
        countSaver[currentNum] = 0
        indexSaver[currentNum] = i
    }
    nums.sort()
    for(let i=0;i<nums.length;i++){
        let currentNum = nums[i]
        countSaver[currentNum] = i
    }
}


