
// Complexity (O(n²))

function rotate(matrix) {
    let n = matrix.length;

     // Step 1: Transpose the Matrix

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    
    // Step 2: Reverse Each Row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(rotate(matrix));