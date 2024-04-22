[leetcode](https://leetcode.com/problems/most-frequent-subtree-sum/)

Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

**Example 1**
Input: root = [5,2,-3]
Output: [2,-3,4]
*Explanation:*
The tree can be visualized like so:
    5
   / \
  2   -3
The root node 5 has two values attached to it; left 2 and right -3. Its sub tree sum, then, is: 5 + 2 + (-3) = 4.
The sum of the subtree of the second node, 2, is 2, as it is a leaf.
The sum of the subtree of the third node, -3, is -3, as it is a leaf. 
Since there is a 3 way tie, our algorithm returns an array of all three sums which are the most frequent.

**Example 2** 
Input: root = [5,2,2]
Output: [2]
*Explanation:*
The tree can be visualized like so:
    5
   / \
  2   2
The root node 5 has two values attached to it; left 2 and right 2. Its sub tree sum, then, is: 5 + 2 + 2 = 9.
The sum of the subtree of the second node, 2, is 2, as it is a leaf.
The sum of the subtree of the third node, 2, is 2, as it is a leaf. 
Since 2 is the most frequent sum, it is returned in an array.

**Example 3**
Input: root = [5,2,-5]
Output: [2]