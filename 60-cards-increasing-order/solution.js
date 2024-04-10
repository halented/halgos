const cardOrder = (arr) => {
    const sorted = arr.slice().sort((a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    })

    if (arr.length < 3) {
        return sorted;
    }

    let orderedIndices = [];
    let arrWithIndices = arr.map((num, index) => {
        return { [num]: index }
    })

    for (let i = 0; i < arr.length; i++) {
        // process one (place its original index into ordered array)
        // put one in the back
        let k = arrWithIndices.shift();
        orderedIndices.push(k[Object.keys(k)[0]]);
        arrWithIndices.push(arrWithIndices.shift());
    }

    // ordered is now [0,2,4,6,3,1,5]
    // now place each into solution using their correct index
    let solution = [];
    for (let i = 0; i < arr.length; i++) {
        let index = orderedIndices[i];
        let elementToPlace = sorted[i];
        solution[index] = elementToPlace;
    }
    return solution;
}

cardOrder([17, 13, 11, 2, 3, 5, 7]);