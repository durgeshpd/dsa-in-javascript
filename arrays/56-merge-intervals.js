// Optimize Approch (O(n))

function merge(intervals) {

    if (intervals.length == 0) return [];

    // Step 1: Sort intervals based on the start time
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];

    // Step 2: Iterate and Merge
    for (let i = 1; i < intervals.length; i++) {

        let last = result[result.length - 1];
        let current = intervals[i];

        if (last[1] >= current[0]) {
            last[1] = Math.max(last[1], current[1]);
        } else {
            result.push(current);
        }
    }
    return result;
}

let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));