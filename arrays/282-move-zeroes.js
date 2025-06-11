/* 
// Brute Force Approch (O(n²))

function moveZeroes(nums) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < n; j++) nums[j - 1] = nums[j];
            nums[n - 1] = 0;
            n--;
            i--;
        }
    }
    return nums;
}
 */
// Optimize Approch - two pointers (O(n))

function moveZeroes(nums) {
    let lastNonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]];
            lastNonZeroIndex++;
        }
    }
    return nums;
}

nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));