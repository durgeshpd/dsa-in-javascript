/* 
// Approach 1: Sorting (O(n log n))

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
} */

// Approach 2: Frequency Counter (O(n)) - Best Approach

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let count = new Map();

    for (let char of s) count.set(char, (count.get(char) || 0) + 1);

    for (let char of t) {
        if (!count.has(char) || count.get(char) === 0) return false;
        count.set(char, count.get(char) - 1);
    }
    return true;
}

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));