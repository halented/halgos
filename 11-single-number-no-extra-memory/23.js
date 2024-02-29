const findSingleNum = (arr) => {
    let ans = {}

    for (let i = 0; i < arr.length; i++) {
        if (ans[arr[i]]) {
            delete ans[arr[i]]
        }
        else {
            ans[arr[i]] = true
        }
    }

    return Object.keys(ans)[0];
}

console.log(findSingleNum([4,1,2,1,2]));

/** OPTIONS
 * 1. sort arr, iterate until you find one that doesn't double. return
 * 2. make hash, if hash[i] exists, delete it. should only have the right answer in the hash at the end. NOTE: this only works if all others are guaranteed to appear an even number of times. but that is specified. so. 
 */