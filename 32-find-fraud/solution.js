function findFraud(arr) {
    // we will need to iterate through the array, on each step log the locatiion and the amount in a separate holder somewhere. if the holder contains the same location and amount as the one we are on, increase the counter by 1. if the holder does not have any matches (and our counter is less than 3), reset the counter and the holder and start afresh with whatever transaction we are on. if the counter hits three, throw the last three transactions into a new array which will be returned at the end. 
    let potentialFraud = []
    let holder = { "loc": null, "amount": null }
    let counter = 0

    for (let i = 0; i < arr.length; i++) {
        const [id, location, amount] = arr[i].split(",")
        if (holder["loc"] === location && holder["amount"] === amount) {
            counter += 1
            if (counter === 3) {
                // pop this and the last two transactions into the return array and reset the counter and holder
                potentialFraud.push(arr[i], arr[i - 1], arr[i - 2])
                counter = 0
                holder = { "loc": null, "amount": null }
            }
        }
        else {
            // if it doesn't match, restart counter & holder with the trans that we are on.
            counter = 1
            holder = { "loc": location, "amount": amount }
        }

    }

    return potentialFraud.length ? potentialFraud : "No fraudulent transactions found"
}

console.log(findFraud(["1, loc1, 200", "2, loc1, 200", "3, loc1, 200", "4, loc2, 200"]))
console.log(findFraud(["1, loc2, 400", "2, loc1, 200", "3, loc2, 400", "4, loc2, 200"]))