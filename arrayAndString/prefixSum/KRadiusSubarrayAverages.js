// leetcode 2090



// Example 2:
// Input: nums = [100000], k = 0
// Output: [100000]// Example 1:
// // Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
// // Output: [-1,-1,-1,5,4,4,-1,-1,-1]
// // Explanation:
// //     - avg[0], avg[1], and avg[2] are -1 because there are less than k elements before each index.
// // - The sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9 + 1 + 8 + 5 = 37.
// // Using integer division, avg[3] = 37 / 7 = 5.
// //     - For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4.
// //     - For the subarray centered at index 5, avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4.
// //     - avg[6], avg[7], and avg[8] are -1 because there are less than k elements after each index.
// Explanation:
//     - The sum of the subarray centered at index 0 with radius 0 is: 100000.
// avg[0] = 100000 / 1 = 100000.

// Example 3:
// Input: nums = [8], k = 100000
// Output: [-1]
// Explanation:
//     - avg[0] is -1 because there are less than k elements before and after index 0.


const getAverages = (nums, k) => {
    const max = nums.length - 1;
    const preSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        preSum.push(nums[i] + preSum[i-1]);
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const left = i-k;
        const right = i+k;
        if (left < 0 || right > max) {
            result.push(-1);
        } else {
            const value = preSum[right] - preSum[left] + nums[left];
            const finalValue = Math.floor(value / (k+k+1));
            result.push(finalValue);
        }
    }
    return result;
}


console.log(getAverages([7,4,3,9,1,8,5,2,6], 3));
