

function trappingRain(arr){
    // use two pointers. start with one at position 0, and one at position 2, because no matter what, elements right next to each other cannot calculate whether rain can be trapped or not. if position 2 is greater than or equal to position 1 && position 1 is greater than 0, we know that we have trapped some water between them. subtract the middle element from the lwoer one, which should be i. 
    let water = 0

    for(let i=0; i<arr.length-2; i++){
        let temp = 2
        if(arr[i] === 0){ temp = i+2}
        for(let j=temp; j<arr.length; j++){
            if (arr[j]>=arr[i] && arr[i]>0){
                water += (arr[i]-arr[i+1])
            }
            else {
                while(j<arr[i]){
                    j++
                }
            }
        }
    }
    return water
}




function buildWall(arr){
    // find the highest segment
    let max = 0
    arr.forEach(x=>{
        if(x>max){
            max = x
        }
    })
    // compare all segments to max, adding their differences
    let diff = 0
    arr.forEach(x=>{
        diff += max-x
    })

    return diff
}

console.log(trappingRain([0,1,0,2,1,0,1,3,2,1,2,1]))