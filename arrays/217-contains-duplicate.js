/* 
// Brute Force Approch (O(n²))

function containsDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) return true;
        }
    }
    return false;
}
 */

// Optimized approch using hash set (O(n))

var containsDuplicate = function(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        set.add(num)
    }
    return false;
}

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));