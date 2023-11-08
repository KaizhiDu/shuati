// leetcode 74

const searchMatrix = function(matrix, target) {
    const i = matrix.length;
    const j = matrix[0].length;
    let left = 0, right = i * j;
    while (left < right) {
        const mid = Math.floor((left+right)/2);
        const row = Math.floor(mid / j);
        const col = mid % j;
        if (matrix[row][col] === target) {
            return true;
        }
        if (matrix[row][col] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
