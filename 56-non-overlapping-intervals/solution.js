/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    // sort by size of interval & find the length of the path
    let high;
    intervals = intervals.sort((a, b) => {
        if (!high || a[1] > high || b[1] > high) {
            //set new high
            a[1] > b[1] ? high = a[1] : high = b[1];
        }
        if (b[1] - b[0] > a[1] - a[0]) {
            return -1;
        }
        if (a[1] - a[0] > b[1] - b[0]) {
            return 1;
        }
        else return 0;
    })
    // create an empty matrix to track our usage of intervals....not convinced of this
    let path = Array.from(Array(high)).map(x => []);
};

eraseOverlapIntervals([[1,2], [2,3], [1,3]])