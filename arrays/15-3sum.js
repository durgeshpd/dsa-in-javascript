/* 
// Brute Force Approch (O(n³))

function threeSum(nums) {
    let n = nums.length;
    let result = new Set();

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }
    return Array.from(result).map(str => str.split(',').map(Number));
}
 */

// Optimize Approch - two pointer (O(n²))

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [], n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;

                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) left++;
            else right--;            
        }
    }
    return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));