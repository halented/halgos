# Count Valid Teams

There are `n` people standing in a line. Each person is assigned a unique `rating` value.

You have to form a team of 3 people amongst them under the following rules:

Choose 3 people with index `(i, j, k)` with rating `(rating[i], rating[j], rating[k])`.
A team is valid if:  `(rating[i] < rating[j] < rating[k])` or `(rating[i] > rating[j] > rating[k])` where `(0 <= i < j < k < n)`.
Return the number of teams you can form given the conditions. (people can be part of multiple teams).

## Examples

```javascript
    validTeams([2,5,3,4,1])
        => 3
    validTeams([2,1,3])
        => 0
    validTeams([1,2,3,4])
        => 4
```

## Constraints
- `n == rating.length`
- `1 <= n <= 200`
- `1 <= rating[i] <= 10^5`

## Source
[LeetCode](https://leetcode.com/problems/count-number-of-teams/)