// leetcode 2270
//
// Example 1:
// Input: nums = [10,4,-8,7]
// Output: 2
// Explanation:
//     There are three ways of splitting nums into two non-empty parts:
//     - Split nums at index 0. Then, the first part is [10], and its sum is 10. The second part is [4,-8,7], and its sum is 3. Since 10 >= 3, i = 0 is a valid split.
// - Split nums at index 1. Then, the first part is [10,4], and its sum is 14. The second part is [-8,7], and its sum is -1. Since 14 >= -1, i = 1 is a valid split.
// - Split nums at index 2. Then, the first part is [10,4,-8], and its sum is 6. The second part is [7], and its sum is 7. Since 6 < 7, i = 2 is not a valid split.
//     Thus, the number of valid splits in nums is 2.
//
// Example 2:
// Input: nums = [2,3,1,0]
// Output: 2
// Explanation:
//     There are two valid splits in nums:
// - Split nums at index 1. Then, the first part is [2,3], and its sum is 5. The second part is [1,0], and its sum is 1. Since 5 >= 1, i = 1 is a valid split.
// - Split nums at index 2. Then, the first part is [2,3,1], and its sum is 6. The second part is [0], and its sum is 0. Since 6 >= 0, i = 2 is a valid split.


const waysToSplitArray = nums => {
    const prefixSum1 = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const res = nums[i] + prefixSum1[prefixSum1.length - 1];
        prefixSum1.push(res);
    }

    const prefixSum2 = [nums[nums.length - 1]];
    for (let i = nums.length - 2; i >= 0; i--) {
        const res = nums[i] + prefixSum2[0];
        prefixSum2.unshift(res);
    }


    let result = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        const p1 = prefixSum1[i];
        const p2 = prefixSum2[i+1];
        if (p1 >= p2) {
            result++;
        }
    }
    return result;
};


// console.log(waysToSplitArray([10,4,-8,7]));
console.log(waysToSplitArray([2,3,1,0]));
