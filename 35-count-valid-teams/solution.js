function validTeams(ratings){
    let numTeams = 0
    let i = 0
    for (i;i<ratings.length-2; i++){
        for (let j = i+1;j<ratings.length-1; j++){
            for (let k = j+1 ;k<ratings.length; k++){
                if(ratings[i]<ratings[j]<ratings[k]||ratings[i]>ratings[j]>ratings[k]) {
                    numTeams++
                }
            }
        }
    }
    // returns an integer -- the number of possible valid teams
    return numTeams
}


console.log(validTeams([2,5,3,4,1]))
// => 3
// validTeams([2,1,3])
// => 0
// validTeams([1,2,3,4])
// => 4