/* 
// Brute Force Approach (O(n²))

function maxProfit(prices) {
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length - 1; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}

 */


// Optimized Approach (O(n))

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log("Best Stock to buy:", maxProfit(prices));