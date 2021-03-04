
const doMath = (arr) => {
    // need an iterator. if it's a number, keep iterating (holding onto those numbers) til you hit a non-number. then do a switch case based on that, using the previous numbers. with the result, sotre it wherever you were storing the original numbers, and more on. 
    let nums = []
    let i = 0
    let j;
    while (i < arr.length) {
        if (parseInt(arr[i])) {
            j = i + 1
            nums.push(arr[i])
            while (parseInt(arr[j])) {
                nums.push(arr[j])
                j++
            }
        }
        else {
            let res = eval(nums.join(`${arr[i]}`))
            nums = [res]
        }
        // if we collected any numbers, increment i by the amount of numbers collected. otherwise, we know it was a symbol, so just increment by 1.
        i += j - i ? j - i : 1
    }
    return nums[0]
}











console.log(doMath([2, 3, "+", 5, "*"]))
