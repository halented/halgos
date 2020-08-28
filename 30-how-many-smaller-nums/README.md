# How Many Numbers are Smaller than the Current Number

Given the array nums, for each `nums[i]` find out how many numbers in the array are smaller than it. That is, for each `nums[i]` you have to count the number of valid j's such that `j != i` and `nums[j] < nums[i]`.

Return the answer in an array.

## Examples

```javascript
    smallerNumsThanCurrent([8,1,2,2,3])
        => [4,0,1,1,3]
    smallerNumsThanCurrent([6,5,4,8])
        => [2,1,0,3]
```

## Constraints
- `2 <= nums.length <= 500`
- `0 <= nums[i] <= 100`

## Source
[LeetCode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)