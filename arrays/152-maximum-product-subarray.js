// Brute Force Approach (O(n²))

/* function maxProduct(nums) {
    let maxProd = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        let product = 1;
        for(let j = i; j < nums.length; j++) {
            product *= nums[j];
            maxProd = Math.max(maxProd, product);
        }
    }
    return maxProd;
}
 */

// Optimized Approach (O(n)) - Kadane’s Algorithm

function maxProduct(nums) {
    let maxProd = nums[0], minProd = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] < 0) [maxProd, minProd] = [minProd, maxProd];

        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i] , minProd * nums[i]);

        result = Math.max(result, maxProd);
    }
    return result;
}

let nums = [2, 3, -2, 4];
console.log(maxProduct(nums));