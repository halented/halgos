# Number of Good Pairs

Given an array of integers `nums`.

A pair (i,j) is called *good* if `nums[i] == nums[j]` and `i < j`.

Return the number of *good* pairs.

## Examples

```javascript
    numIdenticalPairs([1,2,3,1,1,3])
        => 4
    numIdenticalPairs([1,1,1,1])
        => 6
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Source
[LeetCode](https://leetcode.com/problems/number-of-good-pairs/)