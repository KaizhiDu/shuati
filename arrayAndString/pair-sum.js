// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

const pairSum = (numbers, targetSum) => {
    const hashMap = {};
    for(let i=0;i<numbers.length;i++) {
        const number = numbers[i];
        const compareNumber = targetSum - number;
        if (!isNaN(hashMap[compareNumber])) {
            return [hashMap[compareNumber], i]
        } else {
            hashMap[number] = i;
        }
    }
};

console.log(pairSum([3, 2, 5, 4, 1], 8));
