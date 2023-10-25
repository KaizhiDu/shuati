// leetcode 977

const squareOfSortedArray = (nums) => {
    let i = 0;
    let j = nums.length - 1;
    const result = [];
    while (i !== j) {
        const a = Math.abs(nums[i]);
        const b = Math.abs(nums[j]);
        if (a > b) {
            i++;
            result.unshift(a*a)
        } else {
            j--;
            result.unshift(b*b)
        }
    }
    result.unshift(nums[i]*nums[i])
    return result;
}


// console.log(squareOfSortedArray([-4,-1,0,3,10]))
console.log(squareOfSortedArray([-5,-3,-2,-1]))
