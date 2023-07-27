// leetcode 179

// const largestNumber = (nums) => {
//     const numbers = nums.sort((a, b) => a - b);
//     let largestNumberInNums = 0;
//     for (let i = 0; i <numbers.length ; i++) {
//         if (numbers[i] > largestNumberInNums) largestNumberInNums = numbers[i]
//     }
//     const count = largestNumberInNums.toString().length;
//     const beforeSort = numbers.map(num => {
//         const numberCount = num.toString().length;
//         const moreExtend = count - numberCount;
//         if (moreExtend) {
//             return {
//                 num,
//                 number: num * Math.pow(10, moreExtend)
//             }
//         }
//         return {
//             num,
//             number: num
//         }
//     });
//     const afterSort = beforeSort.sort((a, b) => b.number - a.number);
//
//     console.log(afterSort);
//
//     let result = '';
//     for (let i = 0; i <afterSort.length ; i++) {
//         const val = afterSort[i].num;
//         result = result+val
//     }
//     return result;
// }


const largestNumber = (nums) => {
    const result = nums.sort((a,b) => {
        const aa = `${a}${b}`
        const bb = `${b}${a}`
        return bb - aa;
    });
    return result.reduce((accum, item)=> {
        return `${accum}${item}`
    }, '')
}

const res = largestNumber([3,30,34,5,9]);


console.log(res);
