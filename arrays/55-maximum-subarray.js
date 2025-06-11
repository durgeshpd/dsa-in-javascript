/* 
// Brute Force Approch (O(n²))

function maxSub(arr) {
    let maxSum = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        let sum = 0;
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
 */


// Optimized Approch (O(n))

function maxSub(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

var arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSub(arr));