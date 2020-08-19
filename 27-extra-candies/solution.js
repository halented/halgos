var kidsWithCandies = function(candies, extra) {
    let max = Math.max(...candies)
    return candies.map(x=> x+extra >= max ?  true : false)
    
};

console.log(kidsWithCandies([2,3,5,1,3], 3))