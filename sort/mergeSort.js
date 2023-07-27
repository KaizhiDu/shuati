const mergeSort = (array) => {
    if (array.length < 2) {
        return array;
    }
    const middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const mergeResult = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            mergeResult.push(left.shift());
        } else {
            mergeResult.push(right.shift());
        }
    }
    return mergeResult.concat(left.length ? left : right);

}

const result = mergeSort([3,1,4,34,67,2,11,35]);

console.log(result);
