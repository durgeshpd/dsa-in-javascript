/* 
// Brute Force Approch - (O(n²))

function findErrorNums(nums) {
    let missing = -1, repeated = -1;

    for (let i = 1; i <= nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === i) count++;
        }
        if (count === 2) repeated = i;
        if (count === 0) missing = i;
    }
    return [repeated, missing];
} */

function findErrorNums(nums) {
    let map = new Map();
    let missing, repeated;

    for (let num of nums) map.set(num, (map.get(num) || 0) + 1);

    for (let i = 1; i <=nums.length; i++) {
        let count = map.get(i) || 0;
        if (count === 2) repeated = i;
        if (count === 0) missing = i;
    }
    return [repeated, missing];
}

let nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));