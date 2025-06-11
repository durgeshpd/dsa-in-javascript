/*
    If you want to reduce the time complexity of Pascal's Triangle 
    from O(n²) to O(n), it's not possible because every row depends 
    on the previous row’s values. Each element in Pascal’s Triangle 
    is formed by adding two elements from the row above, making it 
    impossible to generate in less than O(n²) time.
*/


function pascal(nums) {
    let triangle = []

    for (let i = 0; i < nums; i++) {
        let row = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        triangle.push(row);
    }
    return triangle;
}

console.log(pascal(5));