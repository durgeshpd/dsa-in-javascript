
// Brute Force Approch (O(n))
/* 
function findMin(nums) {
    return Math.min(...nums);
}
 */
// Optimize Approch Binary search code (O(log n))

function findMin(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else right = mid;
    }
    return nums[left];
}

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));