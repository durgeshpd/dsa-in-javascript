// Optimize Approch O(n * m) (where n = amount, m = number of coins).

function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return dp[amount] ===  Infinity ? -1 : dp[amount];

}

let coins = [1, 2, 5], amount = 11;
console.log(coinChange(coins, amount));