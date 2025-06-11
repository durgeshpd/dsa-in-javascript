/* 
// Brute Force Approach (O(n))

function search (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}
 */

// Optimized Approach (Binary Search - O(log n))

function search(nums, target) {
    let left = 0, rigth = nums.length - 1;

    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2);

        if (nums[mid] === target) return mid;

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) rigth = mid - 1;
                else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[rigth]) left = mid + 1;
            else rigth = mid - 1;
        }
    }
    return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target));