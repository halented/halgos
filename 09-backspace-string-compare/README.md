# Backspace String Compare

Given two strings, S and T, return if they are equal when both are typed into empty text editors. *#* indicates a backspace character. 

Note that after backspacing an empty text, the text will continue empty. 

## Examples

```javascript
    backspace("ab#c", "ad#c")
        => true
    backspace("ab##","c#d#")
        => true
    backspace("a##c","#a#c")
        => true
        // backspaces which go over empty characters remain as empty characters
    backspace("##a","b")
        => false
```

## Constraints:
- 1 <= S.length <= 200
- 1 <= T.length <= 200
- S and T only contain lowercase and/or "#" characters.



[Source](https://leetcode.com/problems/backspace-string-compare/)