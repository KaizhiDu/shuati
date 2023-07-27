const quickSort = (array) => {
    if (array.length <= 1 ) {
        return array;
    }
    const [compareNumber, ...rest] = array;
    const { left, right } = (rest || []).reduce((accum, item) => {
        if (item < compareNumber) {
            accum.left.push(item);
        } else {
            accum.right.push(item);
        }
        return accum;
    }, {
        left: [],
        right: []
    });
    return [...quickSort(left), compareNumber, ...quickSort(right)]
}

 const result = quickSort([3,1,4,34,67,2,11,35]);

console.log('laoduxiangzhidao', result);
