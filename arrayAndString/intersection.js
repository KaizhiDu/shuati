// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

const intersection = (a, b) => {
    const unique = new Set();
    for(let i=0;i<a.length;i++) {
        const number = a[i];
        unique.add(number);
    }
    const result = [];
    for(let i=0;i<b.length;i++) {
        const number = b[i];
        if(unique.has(number)) {
            result.push(number);
        }
    }
    return result;
};

console.log(intersection([4,2,1,6], [3,6,9,2,10]));
