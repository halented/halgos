## Minimum Window Substring

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is **unique**. Substrings are **case sensitive**.

#### Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

#### Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

#### Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.

[source](https://leetcode.com/problems/minimum-window-substring/description/)

Truth table for ADOBEC, ABC
Iterations: denoted by capital letters with iteration number appended

A1:
i = 0, char = "A", tIndex = 0. enter if #1 (A in t)
--> 
    B1:
    endPointer = 1, substr = BC, char2 = D, substrIndex = -1 (D not in substr). do not enter if #2
    B2: 
    endPointer = 2, substr = BC, char2 = O, substrIndex = -1 (O not in substr). do not enter if #2
    B3:
    endPointer = 3, substr = BC, char2 = B, substrIndex = 1 (B in substr). enter if #2
    --> 
        substr = C
    B4:
    endPointer = 4, substr = C, char2 = E, substrIndex = -1 (E not in substr). do not enter if #2
    B5: 
    endPointer = 5, substr = C, char2 = C, substrIndex = 0 (C in substr). enter if #2
    --> 
        substr = ''
    B5: QUIT, substr.length is falsy. 
substr.length is falsy. enter if #3
-->
    i = 0, endPointer = 5, potentialMinWin = 'ADOBEC", result = ''. enter if #4
    -->
        result = "ADOBEC"

[iterations continue]

