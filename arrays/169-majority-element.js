/* 
// Approch 1: using hashmap Time and Space Complexity is (O(n))

function majorityElement(nums) {
    let map = new Map();

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
        // this one also write as map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > nums.length / 2) return num;
    }

}
 */

// Optimized Approch Boyer-Moore Voting Algorithm T.C -> (O(n)) S.C (O(1))

const majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) count += 1;
        // also written as count += (num === candidate) ? 1 : -1;
        else count -= 1;
    }
    return candidate;
}

let nums = [3, 2, 3];
console.log(majorityElement(nums));
