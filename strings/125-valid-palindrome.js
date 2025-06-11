/* 
// Brute Force Approch - (O(n))

function isPalindrome(s) {
    let filtered = s.replace(/[^a-zA-Z0-9]/g , "").toLowerCase();

    return filtered === filtered.split("").reverse().join("");
}
 */

// Optimized Approach (Two-Pointer Method) Time Complexity: O(N) -Space Complexity: O(1)

function isPalindrome(s) {

    let left = 0, right = s.length - 1;

    function isAlphaNumeric(c) {
        return /[a-zA-Z0-9]/.test(c);

    } 
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++;
        while (left < right && !isAlphaNumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }
    return true;
}

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

