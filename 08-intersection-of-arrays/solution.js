// intersect([1,2,2,1],[2,2])
// => [2,2]
// intersect([4,9,5],[9,4,9,8,4])
// => [4,9]

// create a return array
// set a pointer to the first element in each array
// for the length of the longer array, begin iterating. if the pointers point to an element which matches, throw that element into a return array and increment both pointers. continue until the pointers no longer match.

const intersect = function(a, b){
    let rtrn;
    b.length > a.length ? rtrn = helper(b, a): rtrn = helper(a,b) 
    return rtrn 
}

const helper = function(longer, shorter){
    let rtrn = []
    let i = 0;
    let j = 0;
    for(j; j<longer.length; j++){
        if(longer[j] === shorter[i]){
            rtrn.push(longer[j])
            i++
        }
        else if(longer[j] != shorter[i] && i>0){
            break;
        }
    }
    return rtrn
}



console.log(intersect([4,9,5],[9,4,9,8,4]))
// [4,9]


console.log(intersect([1,2,2,1],[2,2]))
// [2,2]