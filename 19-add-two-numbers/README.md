# Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 * Definition for singly-linked list.
```javascript
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
```
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

## Examples

```javascript
    addTwoNumbers([2,4,3], [5,6,4])
        => [7,0,8]
```

## Constraints
- You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Source
[LeetCode](https://leetcode.com/problems/add-two-numbers/)