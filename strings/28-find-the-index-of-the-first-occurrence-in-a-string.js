// Optimized Approch using two pointers (O(M * N))

function strStr(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;

    for (let i = 0; i <= m - n; i++) {
        let j = 0;
        while (j < n && haystack[i + j] === needle[j]) j++;
        if (j === n) return i;
    }
    return -1;
}

let haystack = "sadbutsad", needle = "sad";
console.log(strStr(haystack, needle))