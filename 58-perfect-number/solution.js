/**
 * 
 * @param {integer} n - number to check 
 * @returns boolean - whether or not the number meets the definition of "perfect" per readme
 */
const checkPerfectNumber = (n) => {
    // Option 1: iterate from 1 to n/2. for each where i%n === 0, add to total. if we exeed total, return false. otherwise, return total === need
    let total = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            total += i;
            if (total > n) {
                return false;
            }
        }
    }

    return total === n;
}

console.log(checkPerfectNumber(28));