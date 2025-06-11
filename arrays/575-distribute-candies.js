// Optimized Approach (Using Sets) - (O(n))

function distributeCandies(candyType) {
    let uniqueTypes = new Set(candyType).size;
    return Math.min(uniqueTypes, candyType.length / 2);
};

candyType = [1, 1, 2, 2,3, 3]
console.log(distributeCandies(candyType));