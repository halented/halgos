# Light Radius Problem
## Description

You're given two inputs, an integer and an array. 
The integer represents the length of a number line, and the elements of the array represent lamps along the number line. Each array element is structured as an array of two integers, representing [location, radius]. 

The lamp sits on the number line at location, and has a light radius covering radius, inclusive. A light [2,1] will cover the area from 1-3, [5,2] will cover 3-7

Return the smallest number of lights from the array necessary to completely light the number line, or -1 if you cannot light the numberline

Lights may overlap.

## Examples:

```javascript
    lampPosts(4, [[1,1], [2,1], [3,2], [4,2]])
    => 1
    lampPosts(5, [[1,2], [2,1], [3,1], [4,2], [5,2]])
    => 2
    lampPosts(10, [[1,2], [2,1], [3,1], [4,2], [5,2]])
    => -1
```
