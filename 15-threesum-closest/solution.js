
var threeSumClosest = function(arr, target) {
    //     gonna be returning an int, and need to keep track of the minimum distance to the target
        let sum  = 0
        let minDist = false
    // we will have to determine all possible combinations of 3 for the nums provided. along the way, track which is closest to the target, and only reset the sum variable if the distance to the target is less than the previously set minimum
        
    //     now how to determine all possible combinations of an array 🤣  r/restOfTheOwl
        for(let i=0;i<arr.length-2;i++){
            //first pointer starts at the beginning of the array, stops 3 from the end
            let j = i+1;
            let starter = arr[i]
            while(j<arr.length-1){
                //second pointer starts one further than the first, stops 2 from the end
                let k = j+1
                let second = arr[j]
                while(k<arr.length){
                    // third pointer starts 2 further than the first, stops at the end
                    let total = starter + second + arr[k]
                    //if we hit it, return it!
                    if(total === target){return target}
                    let dist = Math.abs(target - total)
                    
                    //at the end, check if this is the shortest distance so far
                    if(!minDist || minDist > dist){
                        minDist = dist; 
                        sum = total;
                    }
                    k++
                }
                j++
            }
        }
    return sum
};

// [1,1,1,0]
// -100
// Output
// 1
// Expected
// 2

console.log(threeSumClosest([1,1,1,0], -100))


function cl(info){
    console.log(info)
}