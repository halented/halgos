// example input
// lampPosts(4, [[1,1], [2,1], [3,2], [4,2]])
// => 1

// i will assume we cannot have a lampPost with "0" radius
// one method *could* be to build a return array, covering each number as we move

function lampPosts(length, posts){
  let final = new Array(length)
//   here we have an "unlit" array of the appropriate length
// slowly fill array with posts, skipping positions if the light has already filled it 
// (do we need a way to represent being lit, which is separate from containing a post?)
// at the end, send this array through the non-null counter
// iterate through post array and "light" the final one up
    posts.forEach(lamp=>{
        let position = lamp[0]
        let radius = lamp[1]
        let startingPoint = position-radius
        startingPoint<0 ? startingPoint = 0 : null
        let endingPoint = position+radius
        for(startingPoint; startingPoint<endingPoint; startingPoint++){
            if(final[startingPoint]){
                final[startingPoint]['lit'] += 1
            }
            else {
                final[startingPoint] = {'lit':1}
            }
            // track how many of these are lit more than once
            // this is a little wonky still
        }
    })
    return final
}

function countNonNullElements(arr){
    let count = 0
    arr.forEach(x=> x != null? count+=1 : null)
}

console.log(lampPosts(4, [[1,1], [2,1], [3,2], [4,2]]))