/* 
// Brute Force Approch (O(n²))

function maxArea(height) {

    let maxWater = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let water = (j - 1) * Math.min(height[i], height[j]);
            maxWater = Math.max(maxWater, water);
        }
    }
    return maxWater;
}
 */

// Optimized Approach (Two Pointers, O(n))

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let water = (right - left) * Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, water);

        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));