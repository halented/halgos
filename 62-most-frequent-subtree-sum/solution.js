/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
    // 1. traverse all nodes and form the subtree sum for each node
        // - the subtree includes the node we are on and *all nodes lower*
    // god this needs to be recursive, huh
    let copy = root
    while(copy.left || copy.right) {
        let sum = traverse(copy)
        // add sum to structures
        // remove root node
        copy = copy.right;
    }
};

const traverse = (root) => {
    if(!root) {
        return 0;
    }
    return root.val + traverse(root.left) + traverse(root.right);
}

/* creating test data below */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const testOne = new TreeNode(5);
testOne.left = new TreeNode(2);
testOne.right = new TreeNode(-3);
const testTwo = new TreeNode(5);
testTwo.left = new TreeNode(2);
testTwo.right = new TreeNode(2);


// console.log(findFrequentTreeSum(testOne));
console.log(traverse(testOne))

/**
 * Some thoughts:
 * We need to know how many times a sum has been found
 * We need to know the values of these sums in case
 * 
 * Well like, if we get one sum, that should instantly go into the solutions. If we get another sum and it doesn't match, add it to solutions. If we get another sum and it matches one of the first two, then the other one is kicked?
 * No, because we might find three more of the other one later on. So at the very least we know we have to keep track of all sums and their frequencies until the end, at which point we should have set our data structure up in such a way that we can instantly grab the most frequent sums off the top. 
 * So what would that look like?
 * here's an option for a data structure:
 * {2: 2, 9: 1}
 * This is saying that sum 2 appears twice and sum 9 appears once. but we will want to keep these things sorted, which is not a strength of hash objects. 
 * I suppose we could keep that object AND we could keep a variable that contains the highest frequency at the moment. but i don't know how that will allow us to pull all the subtotals matching that frequency quickly.
 * What about this, a hash object which keeps the frequencies as keys and the values are arrays of subtree totals. so, i find a subtree totals -- i mean it could be two hash objects.
 * I find a subtree total, I tally it in the frequency mapper.
 * i then use the value of the frequency mapper entry to look up the solution holder which looks like this:
 * {1: [9], 2: [2,2]}
 * 
 * Sorry, my brain is not separating these correctly:
 * In some cases, there are different SUBTREE SUMS which appear 1 time each. (example 1, solution [2,-3,4])
 * In some cases, there are different NODES whose sums are the same. (example 2, solution [2])
 * There may also be the circumstance that two subtree sums each appear multiple times. so like if there is a subtree sum of 2, 
 * Let's say I'm going through. I create a sum. I say, here's the sum and it has appeared once. 
 * SUM: 2. FREQ: 1
 * I sum the next one. 
 * SUM: 3. FREQ: 1
 * I sum the next. it is the same sum as the first. list now looks like this:
 * SUM: 2. FREQ: 2. 
 * SUM: 3. FREQ: 1. 
 * And at the end of all my summing, I may have a big long list of sums and frequencies of appearance. What I need is for that list to be organized in descending order by frequency. Then I need to put together an array of all the sums which have the highest frequency of appearance. Let's say the list looks like this: 
 * SUM: 2. FREQ: 2. 
 * SUM: 8. FREQ: 2.
 * SUM: 3. FREQ: 1. 
 * SUM: 4. FREQ: 1. 
 * SUM: 5. FREQ: 1. 
 * My solution should be: [2, 8]
 * So what I would want to do is check the top frequency then say hey, where FREQ === topFrequency
 * Maybe it is just an array of objects.
 * [{sum: 2, freq: 2}, {sum: 8, freq: 3}, {sum: 14, freq: 1}]
 * sorted by frequency:
 * arr.sort((a,b) => b.freq - a.freq);
 * that doesn't really solve the problem of quickly retrieving all sums with top frequency, but it at least makes it easier to get to. 
 * I actually think we work with two data structures: the array and an obj with just the sums as keys and the freqs as values like the above array would relate to the following obj:
 * {2:2, 8:3, 14:1}
 * and each time we add something into the obj, we know where to put it in the array because the array is *always sorted* -- every freq which is entered is sorted as it is placed. 
 * okay let's try for some code.
 */