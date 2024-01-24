const fib = (n) => {
    if (n <= 1) {
        return n
    }

    return fib(n-1) + fib(n-2)
}

var fibo = function(n) {
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2)
};

console.log(fibo(5))

// i was gravely misunderstanding fibos for a second -- 
// this question wants you to find the 5th or whatever number that would appear in the "fibonacci" sequence of numbers. it's not a "start at 5 and add numbers backwards to 0" problem even though reading it kind of looks like it. it's 