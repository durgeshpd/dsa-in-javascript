/* 
// Brute Force Appproch (O(n²))

function sortColors(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = 0; j < nums.length - i - 1; j++) {
            if(nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums
}
 */

// Optimized Approch (0(n²))

function sortColors(nums) {

    let low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        else if(nums[mid] === 1) {
            mid++;
        }
        else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}

let nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));