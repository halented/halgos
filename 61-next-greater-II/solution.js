/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let i = 0;
    let j = 1;
    let greaterNums = [];

    var incrementCounters = () => {
        i++;
        j = i >= nums.length - 1 ? 0 : i + 1;
    }

    while (greaterNums.length < nums.length) {
        if (j === i) {
            greaterNums[i] = -1;
            incrementCounters();
        }
        else if (nums[j] > nums[i]) {
            greaterNums[i] = nums[j];
            incrementCounters();
        }
        else {
            j = j >= nums.length - 1 ? 0 : j + 1;
        }
    }

    return greaterNums;
};

console.log(nextGreaterElements([1, 2, 1]));

/**
 * Array behaves in a circular manner, meaning that once you get to the end it loops back around -- looking for the "next" number, when you are sitting on the last one, means checking array[0]. 
 * Receive an array of numbers, nums. 
 * For each number, replace it with the next number in the original array which is greater than itself. 
 * If no greater number can be found, replace it with -1.
 * Return the array of next greater nums. 
 * Solution with pointers: place one pointer, i, at the beginning of the array, and another pointer, j, starting at i+1 OR 0, if i+1 would blow out the array.
 * iterate j forward until we find a greater num or hit i.
 */