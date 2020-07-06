function staircase(n){
    // n=2
    let spaces = n-1
    for(let i=0;i<n;i++){
        let str = ''
        for(let j=0;j<spaces;j++){
            str += ' '
        }
        for(let k=0;k<(n-spaces); k++){
            str += '#'
        }
        console.log(str)
        spaces -= 1
    }
}

staircase(5)