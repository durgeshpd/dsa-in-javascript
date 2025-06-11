/* 
// Brute force approch - (O(n²))

function lengthOfLongestSubstring(s) {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let set = new Set();
        for (let j = i; j < s.length; j++) {
            if (set.has(s[j])) break;

            set.add(s[j]);
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}
 */

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) left = Math.max(left, map.get(s[right]) + 1);

        map.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));