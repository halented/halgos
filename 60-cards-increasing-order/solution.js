const cardOrder = (arr) => {
    const sorted = arr.slice().sort((a, b) => a - b)

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

    // now place each into solution using their correct index
    let solution = [];
    for (let i = 0; i < arr.length; i++) {
        let index = orderedIndices[i];
        solution[index] = sorted[i];
    }
    return solution;
}

cardOrder([17, 13, 11, 2, 3, 5, 7]);
// solution => [2, 13, 3, 11, 5, 17, 7]