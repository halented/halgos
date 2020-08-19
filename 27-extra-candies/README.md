# Extra Candies

Given the array `candies` and the integer `extraCandies`, where `candies[i]` represents the number of candies that the **ith** kid has.

For each kid check if there is a way to distribute `extraCandies` among the kids such that he or she can have the **greatest** number of candies among them. Notice that multiple kids can have the **greatest** number of candies.

## Examples

```javascript
    kidsWithCandies([4,2,1,1,2], 1)
        => [true,false,false,false,false] 
    kidsWithCandies([12,1,12], 10)
        => [true,false,true]
```


## Constraints
- 2 <= candies.length <= 100
- 1 <= candies[i] <= 100
- 1 <= extraCandies <= 50

## Source
[LeetCode](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)