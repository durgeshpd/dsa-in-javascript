/* 
// Brute Force Approch (O(n²))

function productExceptSelf(nums) {
    let result = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i != j) product *= nums[j];
        }
        result[i] = product;
    }
    return result;
}
 */

function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    return result;
}

nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));