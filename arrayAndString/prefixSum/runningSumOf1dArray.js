// leetcode 1480

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//
// Return the running sum of nums.
//     Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
//
//     Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//
//     Example 3:
//
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
const runningSumOf1dArray = (nums) => {
    const prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        const res = nums[i] + prefixSum[prefixSum.length - 1];
        prefixSum.push(res);
    }
    return prefixSum;
}


runningSumOf1dArray([1,2,3,4]);
