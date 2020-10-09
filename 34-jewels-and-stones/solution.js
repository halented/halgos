var jewelsAndStones = function (J, S) {
    //solution 1: one million .includes checks
    //solution 2: a jewel hash
    let jewelHash = {}
    let count = 0
    for(let i=0;i<J.length;i++){
        let character = J[i]
        jewelHash[character] = "jewel"
    }
    for(let i=0;i<S.length;i++){
        let character = S[i]
        if(jewelHash[character]){
            count += 1
        }
    }
    console.log(count)
};


jewelsAndStones("aA", "aAAbbbb")
