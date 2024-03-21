function lEM(sprice) {
    // Receive array of stock prices (ints)
    // Return single int representing the month at which the net price change is lowest (month will be its index +1, human readable)
    // net price change for month i: abs difference between the average of months 1 through i and months i+1 through n
    // example: [1,2,3,4,5] => stock prices
    // month 3 (stock price 3) would have a net change of:
    // Math.abs(Math.floor((1+2+3))/3) - (Math.floor((4+5))/2))
    // iterate through and perform this on every single month barring the final one, and keep track of which one is lowest with a variable. at the end, return the variable containing the lowest month.
    let runningRightTotal = 0
    for (let i = 0; i < sprice.length; i++) {
        runningRightTotal += sprice[i];
    }

    let lowestMonth;
    let lowestNetChange = null;
    let runningLeftTotal = 0;

    for (let i = 0; i < sprice.length - 1; i++) {
        // Math.abs(Math.floor((1+2+3))/3) - (Math.floor((4+5))/2))
        runningLeftTotal += sprice[i];
        let leftAvg = Math.floor(runningLeftTotal / (i + 1));
        // start by calculating the running right total outside of the iteration so we don't nest, then take away a number each time to get the right avg
        runningRightTotal -= sprice[i];
        // running right total divided by however many months are between i+1 and the end of the list
        let rightAvg = Math.floor(runningRightTotal / (sprice.length - (i + 1)));
        // console.log('left: ', leftAvg)
        // console.log('right: ', rightAvg)
        
        let netChange = Math.abs(leftAvg - rightAvg);
        console.log(netChange);
        if(netChange < lowestNetChange || !lowestNetChange) {
            lowestNetChange = netChange;
            lowestMonth = i + 1;
        }
    }
    
    return lowestMonth;
}

// should print 2 and 1.5
lEM([1,2,3,4,5])

function fRIQ(wts) {
    // wts is a list of max wait times for requests
    // number of requests is wts.length
    // a request is expired if time passed === wts[i] and we are not currently processing it HOWEVER, if time passed === wts[i] and we are now serving wts[i], it is processed.
    // find the number of requests present in the queue at every second until it is empty.
    // i'm guessing every iteration t increases by 1? so it's not actual seconds, but an iteration REPRESENTS a second?
    // first thought is to make a dictionary containing all the wts times indexes with each key being the wts times themselves. we will index it at i + 1 to avoid the 0th index being a falsy value. we can use this to determine which indexes have a an expired wts time and remove them from the array. let's create that, and then i'll write out some steps for the request processing iteration itself. 
    // let wtsDictionary = {}
    // for(let i = 0; i<wts.length; i++){
    //     // wtsDictionary[i+1] = wts[i];
    //     if(wtsDictionary[wts[i]]) {
    //         // if this wts time is already in the dictionary, go ahead and add this index into its array of request indexes
    //         wtsDictionary[wts[i]].push(i)
    //     }
    //     else {
    //         // otherwise add entry
    //         wtsDictionary[wts[i]] = [i]
    //     }
    // }
    // // request processing:
    // /**
    //  * 1. process current request. (shift array)
    //  * 2. check dictionary for requests having a wts time of t or greater. shoot the dictionary needs to be different
    //  */
    // let t = 0;
    // while(wts.length) {
    //     console.log(wts.length)
    //     wts.shift();
    //     // problem: this changes the indexes
    //     if(wtsDictionary[t]) {
    //         // if the wts time exists in the dictionary, then we have a list of indexes. each index should be removed from the wts list.
    //         wtsDictionary[t].forEach(index => {
    //             wts.splice(index, 1);
    //         })
    //     }
        
    // }
    for(let t = 0; t<wait.length; t++){
        // process this request
        console.log(wait.length)
        wait.shift();
        for(let i = 0; i<wait.length; i++){
            // check for any expired requests
            // console.log('checking if ', wait[i], ' should be removed')
            if(wait[i] <= t+1) {
                wait.splice(i, 1);
                i--
                // console.log('should see this on third iteration, we just removed something: ', wait)
            }
        }
        t--
        // console.log('for first iteration, 2 should be kept: ', wait)
    }
    console.log(wait)
}
// one way to solve this problem is to change the request to null and return the number of non-null elements in the array still

fRIQ([2,2,3,1])
