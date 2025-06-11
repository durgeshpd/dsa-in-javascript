/* 
// Brute Force Approch (O(n²))

function removeDuplicates(nums) {
    let unique = [];

    for (let num of nums) {
        if (!unique.includes(num)) unique.push(num)
    }

    for (let i = 0; i < nums.length; i++) nums[i] = unique[i];

    return unique.length;
}
 */

// Optimize Approch using two pointers (O(n))

function removeDuplicates(nums) {
    
    if (nums.length === 0) return 0;

    let i = 0;

    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));