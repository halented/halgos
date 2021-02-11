var shortestToChar = function (s, c) {
    // array of ints -- each int representing the 
    // distance from i to the closest c character (abs val)
    let answ = []
    let currentClosest = null

    let indicies = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            indicies.push(i)
            if (!currentClosest) { currentClosest = i }
        }
    }

    for (let i = 0; i < s.length; i++) {
        // check which index we should be using
        indicies.forEach(x => {
            if (Math.abs(i - x) < Math.abs(i - currentClosest)) {
                currentClosest = x
            }
        })
        answ.push(Math.abs(i - currentClosest))
    }
    console.log(answ)
}

// shortestToChar("combovber", "b")
// => [3,2,1,0,1,2,3,4]

// solving with a "Two Pass" style approach

const twoPass = (s, c) => {
    let answ = []
    // find first instance of c
    let closest = s.indexOf(c)
    let leng = closest
    // first pass, looks just like the above but without checking for current closest.
    for (let i = 0; i < s.length; i++) {
        // check which index we should be using
        if (s[i] === c) {
            closest = i
        }
        answ.push(Math.abs(i - closest))
    }
    // second pass, same idea but we check if the number we already logged is greater than the one we're calculating this go around. conveniently, closest should be set to the last instance of c at this point.
    for (let i = closest; i > leng; i--) {
        if (s[i] === c) {
            closest = i
        }
        let dist = Math.abs(closest - i)
        if (answ[i] > dist) {
            answ[i] = dist
        }
    }
    return answ
}
twoPass("combovber", "b")