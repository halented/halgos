function cl(input1){
    console.log(input1)
}

var isPalindrome = function(x) {
    // if there's a minus sign, it's never going to be a palindrome
    if(x<0){return false}

    // use modulo to pop the final number off and rebuild it backwards -- but save the original number so we can compare the result 
    let og = x
    let newNum = 0
    while(x>0){
        let currentNum = x%10
        newNum = (newNum*10)+currentNum
        x = Math.floor(x/10)
    }

    return og === newNum
};

cl(isPalindrome(1234))
