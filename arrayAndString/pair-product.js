// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

const pairProduct = (numbers, targetProduct) => {
    const hashMap = {};

    for(let i=0;i<numbers.length;i++) {
        const number = numbers[i];
        const compareNumber = targetProduct / number;
        if(!isNaN(hashMap[compareNumber])) {
            return [hashMap[compareNumber], i];
        } else {
            hashMap[number] = i;
        }
    }

};

console.log(pairProduct([3, 2, 5, 4, 1], 8));
