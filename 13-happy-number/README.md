# Happy Number

Given a number *n*, determine if the number is "happy". For the purposes of this prompt, "happy" is defined by the following process:

Starting with any positive integer *n*, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (at which it will stay) or until it loops endlessly in a cycle which does not include 1. The numbers for which the process ends in 1 are happy numbers. 

Return true if *n* is happy, and false if it is not. 

## Examples

```javascript
    isHappy(19)
        => true
```

## Constraints

- Input will be a singluar non-negative integer. 

## Source
[LeetCode](https://leetcode.com/problems/happy-number/)