var plusOne = function(digits) {
    // one option: build the number using math, increment it, deconstruct it using modulo. 
    // it is true however, that if the input type matches the output type, it's better form not to change the type. 
    // in order to keep it as an array, you would need to iterate from the back of the array until you found a number that was not 9. if you reach the beginning of the array and all numbers are 9s, that's sort of an edge case, and you will need to return an extra digit at the beginning (a 1) with all other digits being converted to 0. in the normal case, you keep going til you hit something that isnt 9, increment that number, and change the numbers to its right into 0s. 
        
    // first edge case: the final element is less than 9. ez.
    let num = digits.pop()
    if(num < 9){ return [...digits, num+1]}
        
    // count the number of 9s we have (to be re-added as 0s)
    let counter = 0
    while(num === 9){
        counter += 1
        num = digits.pop()
    }
    // if num holds a number (if digits had more than just 9's), increment it. otherwise, just add 1
    num ? digits.push(num+1) : digits.push(1)
    // add appropriate amount of 0s
    while(counter > 0){
        digits.push(0)
        counter--
    }
    //     eh?
    return digits
};