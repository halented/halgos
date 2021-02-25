// turns out i understood this wrong -- here are the solutions to FIND ALL SUBSTRINGS, one iterative and one recursive. 
const iterativeSubstr = (str) => {
    // iterative version: two pointers, start at 0 and 1. 
    let sol = new Set
    for (let i = 0; i < str.length; i++) {
        sol.add(str[i])
        let j = i + 1
        let newStr = str[i]
        while (j < str.length) {
            newStr += str[j]
            sol.add(newStr)
            j++
        }
    }
    return sol
}

const recurSubstr = (str) => {
    let sol = new Set
    for (let i = 0; i < str.length; i++) {
        sol.add(str[i])
        let newStr = str[i]
        sol = helper(sol, newStr, str, i + 1)
    }
    return sol
}

const helper = (sol, newStr, str, j) => {
    if (j === str.length) {
        return sol
    }
    newStr += str[j]
    sol.add(newStr)
    helper(sol, newStr, str, j + 1)
    return sol
}


// and here are the solutions to FIND ALL PERMUTATIONS of the string, like the problem was actually asking

const findPerms = (str) => {
    if (str.length <= 1) {
        return new Set([str])
    }
    let sol = new Set
    // lock a character in one spot, swap everything out around it, move the character to the next spot, do the same, until that character reaches the end of the string. that should be all permutations.
    for (let i = 0; i < str.length; i++) {
        // use I to keep the character locked
        // first, add in the permutation we are on.
        let perm = str[i] + str.slice(i + 1)
        sol.add(perm)
    }
    return sol
}

console.log(findPerms('cat'))
// num of solutions is the factorial of the length
// cat
// cta
// act
// tca
// atc
// tac


function getPermutations(string) {

    // Base case
    if (string.length <= 1) {
        return new Set([string]);
    }

    const allCharsExceptLast = string.slice(0, -1);
    const lastChar = string[string.length - 1];

    // Recursive call: get all possible permutations for all chars except last
    const permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

    // Put the last char in all possible positions for each of the above permutations
    const permutations = new Set();
    permutationsOfAllCharsExceptLast.forEach(permutationOfAllCharsExceptLast => {
        for (let position = 0; position <= allCharsExceptLast.length; position++) {
            const permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
            permutations.add(permutation);
        }
    });
    console.log(permutations.size)
    return permutations;
}


console.log(getPermutations('cats'))