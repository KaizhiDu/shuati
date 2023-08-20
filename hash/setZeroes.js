// leetcode 73

const setZeroes = (matrix) => {

    let m = matrix.length;
    let n = matrix[0].length;
    let firstRow = false;
    let firstCol = false;

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstCol = true;
        }
    }

    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            firstRow = true;
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j <n ; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (firstRow) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }

    if (firstCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
}


console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));



// 1 1 1 1
// 1 1 1 0
// 1 1 1 1

// 1 1 1 0
// 0 1 1 0
// 1 1 1 1

// 1 1 1 0
// 0 0 0 0
// 1 1 1 0



// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
//
//
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
