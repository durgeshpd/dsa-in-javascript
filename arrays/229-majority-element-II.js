/* 
// Approch 1: using hashmap Time and Space Complexity is (O(n))

function majorityElement(nums) {
    let map = new Map();
    let target = Math.floor(nums.length / 3);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let result = [];
    for (let [key, value] of map) {
        if (value > target) {
            result.push(key);
        }
    }
    return result;
}
 */
// Optimized Approch Boyer-Moore Voting Algorithm T.C -> (O(n)) S.C (O(1))

function majorityElement(nums) {
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // Step 1: Find candidates
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
        else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } 
        else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }

    // Step 2 : Verify the candidates
    count1 = 0, count2 = 0;

    for (let num of nums) {
        if (num === candidate1) count1++;
        if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > Math.floor(nums.length / 3)) result.push(candidate1);
    if (candidate1 !== candidate2 && count2 > Math.floor(nums.length / 3)) result.push(candidate2);

    return result;
}

let nums = [1, 1, 1, 3, 3, 2, 2, 2];
console.log(majorityElement(nums));