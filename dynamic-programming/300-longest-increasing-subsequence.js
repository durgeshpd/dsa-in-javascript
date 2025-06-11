/* 
// Solution 1: Dynamic Programming (O(n²))

function lengthOfLIS(nums) {
    n = nums.length;

    if (n === 0) return 0;

    let maxLIS = 1;
    let dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        maxLIS = Math.max(maxLIS, dp[i]);
    }
    return maxLIS;
}
 */

// Solution 2: Binary Search + DP (O(n log n))

function lengthOfLIS(nums) {
    let sub = [];

    for (let num of nums) {
        let left = 0, right = sub.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) left = mid + 1;
            else right = mid - 1;
        }
        if (left < sub.length) sub[left] = num;
        else sub.push(num);
    }
    return sub.length;
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));