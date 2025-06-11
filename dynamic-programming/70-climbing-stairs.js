// Optimized Dynamic Programming (O(n) Time, O(1) Space)

function climbStairs(n) {
    if (n <= 2) return n;

    let prev1 = 1, prev2 = 2;

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }
    return prev2;
}

let n = 2;
console.log(climbStairs(n));