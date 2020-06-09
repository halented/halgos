
var reverse = function(x) {
    if(x === 0){return x}
    let str;
    x < 0 ? str = "-" : str = ""
    x = Math.abs(x)
    while(x>0){
        str = str+(x%10)
        x = Math.floor(x/10)
    }
    x = parseInt(str)
    if(x < -(Math.pow(2,31)) || x > (Math.pow(2,31)-1)){return 0}
    return x
};