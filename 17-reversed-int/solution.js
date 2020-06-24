
// var reverse = function(x) {
//     if(x === 0){return x}
//     let str;
//     x < 0 ? str = "-" : str = ""
//     x = Math.abs(x)
//     while(x>0){
//         str = str+(x%10)
//         x = Math.floor(x/10)
//     }
//     x = parseInt(str)
//     if(x < -(Math.pow(2,31)) || x > (Math.pow(2,31)-1)){return 0}
//     return x
// };


var reverse = function(x) {
    let returnInt = 0;
    
    while(x>0){
//         lop off the last number from x
        let temp = x%10
//         change the value of x (permanently remove last digit)
        x = Math.floor(x/10)
//         add that number to returnInt
        returnInt = (returnInt*10) + temp
    }

    return returnInt
};

console.log(reverse(101))